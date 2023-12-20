import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const userRoutes = Router();
const controller = new UserController();

userRoutes.post("/create", controller.create);
userRoutes.use(ensureAuthenticate);
userRoutes.get("/list", controller.list);
userRoutes.get("/show/:id", controller.show);
userRoutes.put("/update/:id", controller.update);
userRoutes.delete("/delete/:id", controller.delete);
export {userRoutes}