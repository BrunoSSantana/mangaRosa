import { Response, Request } from "express";

import { CpfValidation, emailValidation } from "../lib";
import {
  createUser,
  getByCpf,
  findAllusers,
  validateUser,
  findByName,
} from "../services/UsersServices";

const createUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const { name, email, cpf, cell, skills, validate } = request.body;

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
    if (!skills) {
      return response.status(400).json({ message: "skills Vazias" });
    }

    await createUser(name, email, cpf, cell, skills, validate);

    // enviado apenas a linha do retorno do getBycpf
    return response.status(201).json({ message: "criado com sucesso" });
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

const findAllUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const allUsers = await findAllusers();
  return response.status(200).json(allUsers.rows);
};

const findUser = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { name } = request.params;
  const user = await findByName(name);

  return response.status(200).json(user);
};

const updateUser = async (
  request: Request,
  response: Response
): Promise<Response> => {
  const { name } = request.params;

  const allUsers = await findAllusers();
  console.log(allUsers);

  const myUser = await allUsers.rows.find((obj) => {
    return obj.name.replace(/\s/g, "") === name;
  });

  validateUser(myUser.name);
  // const newName = name.replace(/\s/g, "");
  return response.json("User Updated Successfully");
};

export { createUserController, findAllUsersController, findUser, updateUser };
