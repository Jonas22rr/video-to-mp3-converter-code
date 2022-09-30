import * as express from "express";
import { users } from "./users";
import { login } from "./login";
import { convert } from "./convert";

export const routes = express.Router();

routes.use(users);
routes.use(login);
routes.use(convert);
