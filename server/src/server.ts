import dotenv from "dotenv";
import express, { Express, Request, Response } from "express";
import path from "path";
import bodyParser from "body-parser";
import { routes } from "./routes/index";
import cors from "cors";
const corsOptions = {
    origin: "*",
    credentials: true, //access-control-allow-credentials:true
    optionSuccessStatus: 200,
};

dotenv.config();

const app: Express = express();

app.use(cors(corsOptions));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/", routes);

app.get("/", (req: Request, res: Response) => {
    res.send("<h1>Hello World From the Typescript Server!</h1>");
});

const port = process.env.PORT || 8000;

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});
