"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
require("dotenv/config");
const data_source_1 = require("./data-source");
const express_1 = __importDefault(require("express"));
const apollo_server_express_1 = require("apollo-server-express");
const type_graphql_1 = require("type-graphql");
const UserResolver_1 = require("./resolvers/UserResolver");
const jsonwebtoken_1 = require("jsonwebtoken");
const cors_1 = __importDefault(require("cors"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const tokens_1 = require("./tokens");
const User_1 = require("./entity/User");
(async () => {
    const app = (0, express_1.default)();
    app.use((0, cors_1.default)({
        origin: ["http://localhost:3000", "https://studio.apollographql.com"],
        credentials: true,
    }));
    app.use((0, cookie_parser_1.default)());
    app.get("/", (_req, res) => {
        res.send("hello");
    });
    app.post("/refresh_token", async (req, res) => {
        const token = req.cookies.jid;
        if (!token)
            return res.send({ ok: false, accessToken: "" });
        let payload = null;
        try {
            payload = (0, jsonwebtoken_1.verify)(token, process.env.REFRESH_TOKEN_SECRET);
        }
        catch (err) {
            console.log(err);
            return res.send({ ok: false, accessToken: "" });
        }
        const user = await User_1.User.findOne({ where: { id: payload.userId } });
        if (!user)
            return res.send({ ok: false, accessToken: "" });
        if (user.tokenVersion !== payload.tokenVersion) {
            return res.send({ ok: false, accessToken: "" });
        }
        (0, tokens_1.sendRefreshToken)(res, (0, tokens_1.createRefreshToken)(user));
        return res.send({ ok: true, accessToken: (0, tokens_1.createAccessToken)(user) });
    });
    data_source_1.AppDataSource.initialize();
    const apolloServer = new apollo_server_express_1.ApolloServer({
        schema: await (0, type_graphql_1.buildSchema)({
            resolvers: [UserResolver_1.UserResolver],
        }),
        context: ({ req, res }) => ({ req, res }),
    });
    await apolloServer.start();
    apolloServer.applyMiddleware({ app, cors: true });
    const PORT = process.env.PORT;
    app.listen(PORT, () => {
        console.log(`server started on port ${PORT}`);
    });
})();
//# sourceMappingURL=index.js.map