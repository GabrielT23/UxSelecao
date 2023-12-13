import { Router } from "express";
import { userRoutes } from "./userRoutes";
import { enderecoUserRoutes } from "./enderecoUserRoutes";
import { authenticateRoutes } from "./authenticateRoutes";

const routes = Router();
routes.use("/user", userRoutes);
routes.use("/endereco", enderecoUserRoutes);
routes.use('/authenticate', authenticateRoutes);
export {routes};