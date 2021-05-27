import { Router } from "express";

import { create } from "./controller/UserController";

const router = Router();

router.post("/registrar", create);

export { router };
