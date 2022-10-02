"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dotenv_1 = __importDefault(require("dotenv"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const index_1 = require("./routes/index");
const cors_1 = __importDefault(require("cors"));
const corsOptions = {
    origin: "*",
    credentials: true,
    optionSuccessStatus: 200,
};
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)(corsOptions));
app.use(body_parser_1.default.urlencoded({ extended: true }));
app.use(body_parser_1.default.json());
app.use("/", index_1.routes);
app.get("/", (req, res) => {
    res.send("<h1>Hello World From the Typescript Server!</h1>");
});
const port = process.env.PORT || 8000;
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
