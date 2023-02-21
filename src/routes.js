import { Router } from "express";
import Sessioncontroller from "./app/controllers/Sessioncontroller";
import UserController from "./app/controllers/UserController";

const routes = new Router();
routes.post("/users", UserController.store);
routes.post("/sessions", Sessioncontroller.store);

export default routes;
