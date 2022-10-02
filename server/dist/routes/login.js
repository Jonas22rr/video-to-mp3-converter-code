"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const express = __importStar(require("express"));
exports.login = express.Router();
// Array of example users for testing purposes
const users = [
    {
        id: 1,
        name: "Maria Doe",
        email: "maria@example.com",
        password: "maria123",
    },
    {
        id: 2,
        name: "Juan Doe",
        email: "juan@example.com",
        password: "juan123",
    },
];
exports.login.get("/login", (req, res) => {
    res.send("<h1>Login Test</h1>");
});
// route login
exports.login.post("/login", (req, res) => {
    const { email, password } = req.body;
    const user = users.find((user) => {
        return user.email === email && user.password === password;
    });
    if (!user) {
        return res.status(404).send("User Not Found!");
    }
    return res.status(200).json(user);
});
