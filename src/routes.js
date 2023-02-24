import { Router } from "express";
import multer from "multer";
import multerConfig from "./config/multer";
import ProductController from "./app/controllers/ProductController";
import Sessioncontroller from "./app/controllers/Sessioncontroller";
import UserController from "./app/controllers/UserController";

const upload = multer(multerConfig);

const routes = new Router();
routes.post("/users", UserController.store);
routes.post("/sessions", Sessioncontroller.store);
routes.post("/products", upload.single("file"), ProductController.store);

routes.get("/products", ProductController.index);


export default routes;
