import { Application, Request, Response } from "express";
import * as express from "express";

export const users = express.Router();

users.get("/users", function (req, res, next) {
    // Kommentiere diese Zeile aus
    //res.send('respond with a resource');

    // Und füge soetwas ein
    res.json([
        {
            id: 1,
            username: "samsepi0l",
        },
        {
            id: 2,
            username: "D0loresH4ze",
        },
    ]);
});
