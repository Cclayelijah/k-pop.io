import "reflect-metadata";
import "dotenv/config";
import AppDataSource from "./data-source";
import express from "express";
import { ApolloServer } from "apollo-server-express";
import { buildSchema } from "type-graphql";
import { UserResolver } from "./resolvers/UserResolver";
import { verify } from "jsonwebtoken";
import cors from "cors";
import cookieParser from "cookie-parser";
import {
  createAccessToken,
  createRefreshToken,
  sendRefreshToken,
} from "./tokens";
import { User } from "./entity/User";

const PORT = process.env.PORT || 8080;
// const path = require("path");

(async () => {
  const app = express();
  app.use(express.json());
  app.use(cors());
  app.use(cookieParser());
  console.log(__dirname);
  if (process.env.NODE_ENV === "production") {
    // client: npm run build
    // app.use(express.static("./client/build"));
  }
  // app.use(
  //   cors({
  //     origin: ["http://localhost:3000", "https://studio.apollographql.com"],
  //     credentials: true,
  //   })
  // );
  app.get("/", (_req: any, res: any) => {
    res.send("hello");
  });

  app.get("/test", (_req: any, res: any) => {
    res.send("this is a test");
  });

  app.post("/refresh_token", async (req, res) => {
    const token = req.cookies.jid;
    if (!token) return res.send({ ok: false, accessToken: "" });

    let payload: any = null;
    try {
      payload = verify(token, process.env.REFRESH_TOKEN_SECRET!);
    } catch (err) {
      console.log(err);
      return res.send({ ok: false, accessToken: "" });
    }

    const user = await User.findOne({ where: { id: payload.userId } });
    if (!user) return res.send({ ok: false, accessToken: "" });
    if (user.tokenVersion !== payload.tokenVersion) {
      return res.send({ ok: false, accessToken: "" });
    }
    sendRefreshToken(res, createRefreshToken(user));
    return res.send({ ok: true, accessToken: createAccessToken(user) });
  });

  AppDataSource.initialize();

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [UserResolver],
    }),
    context: ({ req, res }) => ({ req, res }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app, cors: true });

  app.listen(PORT, () => {
    console.log(`server started on port ${PORT}`);
  });
})();
