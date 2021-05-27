import { Response, Request } from "express";

import { db } from "../database";
import { CpfValidation, emailValidation } from "../lib";

const create = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const { name, email, cpf, cell, skills } = request.body;
    if (!emailValidation(email))
      return response.status(400).json({ message: "Email inválido" });

    if (!CpfValidation(cpf)) {
      return response.status(400).json({ message: "CPF inválido" });
    }
    if (!skills) {
      return response.status(400).json({ message: "skills Vazias" });
    }

    const user = [name, email, cpf, cell, skills];
    const query = `
      INSERT INTO users (
        name,
        email,
        cpf,
        cell,
        skills
      ) 
      VALUES ($1, $2, $3, $4, $5 );
      `;

    await db.query(query, user);

    return response.json(user);

    return response.status(201).json(user);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export { create };
