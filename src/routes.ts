import { Router } from "express";

import {
  createUserController,
  findAllUsersController,
  updateUser,
} from "./controllers/UserController";

const router = Router();
// Users
router.post("/registrar", createUserController);
// Admin
router.get("/registros", findAllUsersController);
router.get("/:name/validar"); // PENDENTE
router.put("/:name/validar", updateUser);

export { router };
