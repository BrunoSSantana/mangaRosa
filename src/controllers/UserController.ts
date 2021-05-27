import { Response, Request } from "express";

import { CpfValidation, emailValidation } from "../lib";
import { createUser, getByCpf } from "../services/UsersServices";

const create = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const { name, email, cpf, cell, skills, validate } = request.body;

    // verifica se o usuário existe
    const useralreadyExists = await getByCpf(cpf);

    // dentro do objeto que o pg buscou eu pego o cpf da 1º row e comparo
    if (useralreadyExists.rows[0].cpf !== undefined) {
      return response.status(400).json({ message: "Usuário exite" });
    }

    // valida o email
    if (!emailValidation(email))
      return response.status(400).json({ message: "Email inválido" });

    // valida cpf
    if (!CpfValidation(cpf)) {
      return response.status(400).json({ message: "CPF inválido" });
    }

    // valida se existe skills
    if (!skills) {
      return response.status(400).json({ message: "skills Vazias" });
    }

    const user = await createUser(name, email, cpf, cell, skills, validate);

    // enviado apenas a linha do retorno do getBycpf
    return response.status(201).json(user);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export { create };
