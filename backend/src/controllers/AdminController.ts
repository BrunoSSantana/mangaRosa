import { Response, Request } from "express";

import {
  findAllusers,
  findByName,
  validateUser,
} from "../services/UsersServices";

const findAllUsersController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const allUsers = await findAllusers();
    return response.status(200).json(allUsers.rows);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

const findUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const { name } = request.params;
    const user = await findByName(name);

    return response.status(200).json(user);
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

const updateUserController = async (
  request: Request,
  response: Response
): Promise<Response> => {
  try {
    const { name } = request.params;

    // capturando todos os usuários
    const allUsers = await findAllusers();

    // pegando o usuário que possui o name igual ao que está na rota
    // para isso uso regex para tirar os espaaços em branco dos nomes no banco de dados
    const myUser = await allUsers.rows.find((obj) => {
      return obj.name.replace(/\s/g, "") === name;
    });

    // validadando usuário
    validateUser(myUser.name);

    return response.json("User Updated Successfully");
  } catch (err) {
    return response.status(400).json({ message: err.message });
  }
};

export { findAllUsersController, findUserController, updateUserController };
