import { Router } from "express";
import ProductController from "./app/controllers/ProductController";
import Sessioncontroller from "./app/controllers/Sessioncontroller";
import UserController from "./app/controllers/UserController";

const routes = new Router();
routes.post("/users", UserController.store);
routes.post("/sessions", Sessioncontroller.store);
routes.post("/products", ProductController.store);

export default routes;
