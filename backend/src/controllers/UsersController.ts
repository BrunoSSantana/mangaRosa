import { Response, Request } from "express";

import { CpfValidation, emailValidation } from "../lib";
import { createUser, getByCpf } from "../services/UsersServices";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const { name, email, cpf, cell, skills } = request.body;

    // verifica se o usuário existe
    const useralreadyExists = await getByCpf(cpf);

    // Verifica se  usuário existe
    if (useralreadyExists.rows[0] !== undefined) {
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
    if (!skills || skills === [""]) {
      return response.status(400).json({ message: "skills Vazias" });
    }

    if (cell) {
      if (cell.length > 14) {
        return response.status(400).json({ message: "Número inválido" });
      }
    }

    // validate = false (default)
    const validate = false;

    await createUser(name, email, cpf, cell, skills, validate);

    // enviado apenas a linha do retorno do getBycpf
    return response.status(201).json({ message: "criado com sucesso" });
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export { createUserController };
