import * as express from "express";
import { users } from "./users";

export const routes = express.Router();

routes.use(users);
