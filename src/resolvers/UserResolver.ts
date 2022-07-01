import {
  Arg,
  Ctx,
  Field,
  Int,
  Mutation,
  ObjectType,
  Query,
  Resolver,
  UseMiddleware,
} from "type-graphql";
import { User } from "../entity/User";
import { compare, hash } from "bcryptjs";
import { MyContext } from "../MyContext";
import {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
} from "../tokens";
import { isAuth } from "../isAuth";
import { AppDataSource } from "../data-source";

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "Hello world!";
  }

  @Query(() => String)
  @UseMiddleware(isAuth)
  bye(@Ctx() { payload }: MyContext) {
    // protected Route
    return `Your user id is: ${payload!.userId}`;
  }

  @Query(() => [User])
  users() {
    return User.find();
  }

  // Don't actually make this a mutation, this function should only be used internally
  @Mutation(() => Boolean)
  async revokeRefreshTokensForUser(@Arg("userId", () => Int) userId: number) {
    try {
      await AppDataSource.manager
        .getRepository(User)
        .increment({ id: userId }, "tokenVersion", 1);
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }

  @Mutation(() => LoginResponse)
  async login(
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Ctx() { res }: MyContext
  ): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email } });

    if (!user) {
      throw new Error("The username or password is incorrect.");
    }

    const valid = await compare(password, user.password);

    if (!valid) {
      throw new Error("The username or password is incorrect.");
    }

    // login successful

    sendRefreshToken(res, createRefreshToken(user));

    return {
      accessToken: createAccessToken(user),
    };
  }

  @Mutation(() => Boolean)
  async register(
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("bDay") bDay: string,
    @Arg("email") email: string,
    @Arg("password") password: string,
    @Arg("displayName") displayName: string
  ) {
    const hashedPassword = await hash(password, 12);
    try {
      await User.insert({
        firstName,
        lastName,
        bDay: new Date(bDay),
        email,
        password: hashedPassword,
        displayName,
      });
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }
}
