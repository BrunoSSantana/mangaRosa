import { Router } from "express";

import {
  createUserController,
  findAllUsersController,
  findUser,
  updateUser,
} from "./controllers/UserController";

const router = Router();
// Users
router.post("/registrar", createUserController);
// Admin
router.get("/registros", findAllUsersController);
router.get("/:name/validar", findUser); // PENDENTE
router.put("/:name/validar", updateUser);

export { router };
