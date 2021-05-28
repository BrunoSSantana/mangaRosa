// @controller: path craido no tsconfig com o inutito de facilitar a busca por esses arquivos
import { Router } from "express";

import {
  findAllUsersController,
  findUserController,
  updateUserController,
} from "./controllers/AdminController";
import { createUserController } from "./controllers/UsersController";

const router = Router();
// Users
router.post("/registrar", createUserController);
// Admin
router.get("/registros", findAllUsersController);
router.get("/:name/validar", findUserController);
router.put("/:name/validar", updateUserController);

export { router };
