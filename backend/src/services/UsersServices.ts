import { QueryResult } from "pg";

import { db } from "../database";

const getByCpf = async (cpf: string): Promise<QueryResult> | undefined => {
  console.log(cpf);
  const user: QueryResult = await db.query(
    "SELECT * FROM users WHERE cpf = $1;",
    [cpf]
  );
  // console.log(user);
  return user;
};

const createUser = async (
  name: string,
  email: string,
  cpf: string,
  cell: string,
  skills: string[],
  validate: boolean
): Promise<void> => {
  const user = [name, email, cpf, cell, skills, validate];
  const query = `
    INSERT INTO users (
      name,
      email,
      cpf,
      cell,
      skills,
      validate
    ) 
    VALUES ($1, $2, $3, $4, $5, $6);
    `;

  await db.query(query, user);
};

const findAllusers = async (): Promise<QueryResult> => {
  const allUsers: QueryResult = await db.query(
    `SELECT * FROM users ORDER BY name`
  );

  return allUsers;
};

const findByName = async (name: string): Promise<QueryResult> => {
  const allUsers = await findAllusers();

  const myUser = await allUsers.rows.find((obj) => {
    return obj.name.replace(/\s/g, "") === name;
  });
  return myUser;
};

const validateUser = async (name: string): Promise<void> => {
  await db.query(
    `UPDATE users
	SET validate = true, validatedat = now()
  WHERE name = $1;`,
    [name]
  );
};

export { createUser, getByCpf, findAllusers, validateUser, findByName };
