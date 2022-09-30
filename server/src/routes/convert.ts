import { Application, Request, Response } from "express";
import * as express from "express";

export const convert = express.Router();

convert.get("/convert", (req: Request, res: Response) => { 
    res.json("convert test");
});

convert.post("/convert", (req: Request, res: Response) => {
    const parameter: string  = req.body;
    let result: any = ""

    if (parameter) {
        result = "parameter converted";
        alert("parameter converted");
    } else {
        result = "parameter not converted";
    }
    return res.status(200).json(result);
});