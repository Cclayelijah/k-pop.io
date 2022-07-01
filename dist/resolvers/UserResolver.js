"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserResolver = void 0;
const type_graphql_1 = require("type-graphql");
const User_1 = require("../entity/User");
const bcryptjs_1 = require("bcryptjs");
const tokens_1 = require("../tokens");
const isAuth_1 = require("../isAuth");
const data_source_1 = require("../data-source");
let LoginResponse = class LoginResponse {
};
__decorate([
    (0, type_graphql_1.Field)(),
    __metadata("design:type", String)
], LoginResponse.prototype, "accessToken", void 0);
LoginResponse = __decorate([
    (0, type_graphql_1.ObjectType)()
], LoginResponse);
let UserResolver = class UserResolver {
    hello() {
        return "Hello world!";
    }
    bye({ payload }) {
        return `Your user id is: ${payload.userId}`;
    }
    users() {
        return User_1.User.find();
    }
    async revokeRefreshTokensForUser(userId) {
        try {
            await data_source_1.AppDataSource.manager
                .getRepository(User_1.User)
                .increment({ id: userId }, "tokenVersion", 1);
        }
        catch (err) {
            console.log(err);
            return false;
        }
        return true;
    }
    async login(email, password, { res }) {
        const user = await User_1.User.findOne({ where: { email } });
        if (!user) {
            throw new Error("The username or password is incorrect.");
        }
        const valid = await (0, bcryptjs_1.compare)(password, user.password);
        if (!valid) {
            throw new Error("The username or password is incorrect.");
        }
        (0, tokens_1.sendRefreshToken)(res, (0, tokens_1.createRefreshToken)(user));
        return {
            accessToken: (0, tokens_1.createAccessToken)(user),
        };
    }
    async register(firstName, lastName, bDay, email, password, displayName) {
        const hashedPassword = await (0, bcryptjs_1.hash)(password, 12);
        try {
            await User_1.User.insert({
                firstName,
                lastName,
                bDay: new Date(bDay),
                email,
                password: hashedPassword,
                displayName,
            });
        }
        catch (err) {
            console.log(err);
            return false;
        }
        return true;
    }
};
__decorate([
    (0, type_graphql_1.Query)(() => String),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "hello", null);
__decorate([
    (0, type_graphql_1.Query)(() => String),
    (0, type_graphql_1.UseMiddleware)(isAuth_1.isAuth),
    __param(0, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "bye", null);
__decorate([
    (0, type_graphql_1.Query)(() => [User_1.User]),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserResolver.prototype, "users", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("userId", () => type_graphql_1.Int)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "revokeRefreshTokensForUser", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => LoginResponse),
    __param(0, (0, type_graphql_1.Arg)("email")),
    __param(1, (0, type_graphql_1.Arg)("password")),
    __param(2, (0, type_graphql_1.Ctx)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Object]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "login", null);
__decorate([
    (0, type_graphql_1.Mutation)(() => Boolean),
    __param(0, (0, type_graphql_1.Arg)("firstName")),
    __param(1, (0, type_graphql_1.Arg)("lastName")),
    __param(2, (0, type_graphql_1.Arg)("bDay")),
    __param(3, (0, type_graphql_1.Arg)("email")),
    __param(4, (0, type_graphql_1.Arg)("password")),
    __param(5, (0, type_graphql_1.Arg)("displayName")),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, String, String, String, String]),
    __metadata("design:returntype", Promise)
], UserResolver.prototype, "register", null);
UserResolver = __decorate([
    (0, type_graphql_1.Resolver)()
], UserResolver);
exports.UserResolver = UserResolver;
//# sourceMappingURL=UserResolver.js.map