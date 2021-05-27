import { Router } from "express";

import {
  createUserController,
  findAllUsersController,
} from "./controllers/UserController";

const router = Router();

router.post("/registrar", createUserController);

router.get("/", findAllUsersController);

export { router };
