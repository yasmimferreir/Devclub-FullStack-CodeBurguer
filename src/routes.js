import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import ProductController from "./app/controllers/ProductController";
import Sessioncontroller from "./app/controllers/Sessioncontroller";
import UserController from "./app/controllers/UserController";
import authMiddleware from "./app/middlewares/auth";
import CategoryController from "./app/controllers/CategoryController";
import OrderController from "./app/controllers/OrderController";

const upload = multer(multerConfig);

const routes = new Router();
routes.post("/users", UserController.store);
routes.post("/sessions", Sessioncontroller.store);

routes.use(authMiddleware);

routes.post("/products", upload.single("file"), ProductController.store);
routes.get("/products", ProductController.index);


routes.post("/categories", CategoryController.store);
routes.get("/categories", CategoryController.index);


routes.post("/orders", OrderController.store);

export default routes;
