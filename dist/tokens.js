"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendRefreshToken = exports.createRefreshToken = exports.createAccessToken = void 0;
require("dotenv/config");
const jsonwebtoken_1 = require("jsonwebtoken");
const createAccessToken = (user) => {
    return (0, jsonwebtoken_1.sign)({ userId: user.id }, process.env.ACCESS_TOKEN_SECRET, {
        expiresIn: "1h",
    });
};
exports.createAccessToken = createAccessToken;
const createRefreshToken = (user) => {
    return (0, jsonwebtoken_1.sign)({ userId: user.id, tokenVersion: user.tokenVersion }, process.env.REFRESH_TOKEN_SECRET, {
        expiresIn: "30d",
    });
};
exports.createRefreshToken = createRefreshToken;
const sendRefreshToken = (res, token) => {
    res.cookie("jid", token, {
        httpOnly: true,
    });
};
exports.sendRefreshToken = sendRefreshToken;
//# sourceMappingURL=tokens.js.map