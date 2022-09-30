import { Request, Response } from "express";
import * as express from "express";

export const login = express.Router();

interface FormInputs {
    email: string;
    password: string;
}

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

login.get("/login", (req: Request, res: Response) => {
    res.send("<h1>Login Test</h1>");
});

// route login
login.post("/login", (req: Request, res: Response) => {
    const { email, password }: FormInputs = req.body;
    const user = users.find((user) => {
        return user.email === email && user.password === password;
    });

    if (!user) {
        return res.status(404).send("User Not Found!");
    }

    return res.status(200).json(user);
});
