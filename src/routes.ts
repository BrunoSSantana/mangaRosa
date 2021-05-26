import { Router } from "express";

const router = Router();

router.get("/:nomeDoColaborador/registrar", (request, response) => {
  // const { name, email, cpf, cell, skills } = request.body;
  return response.send();
});

export { router };
