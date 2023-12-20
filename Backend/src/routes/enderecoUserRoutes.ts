import { Router } from "express";
import { EnderecoUserController } from "../controllers/EnderecoUserController";
import { ensureAuthenticate } from "../middlewares/ensureAuthenticate";

const enderecoUserRoutes = Router();
const controller = new EnderecoUserController();
enderecoUserRoutes.post("/create", controller.create);
enderecoUserRoutes.use(ensureAuthenticate);
enderecoUserRoutes.get("/list", controller.list);
enderecoUserRoutes.get("/show/:id", controller.show);
enderecoUserRoutes.put("/update/:id", controller.update);
enderecoUserRoutes.delete("/delete/:id", controller.delete);
export {enderecoUserRoutes}