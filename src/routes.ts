import { Router } from "express";

import {
  createUserController,
  findAllUsersController,
} from "./controllers/UserController";

const router = Router();

router.post("/registrar", createUserController);
router.put("/:name/validar", updateUser);

export { router };
