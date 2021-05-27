import { QueryResult } from "pg";

import { db } from "../database";

const getByCpf = async (cpf: string): Promise<QueryResult> => {
  const user: QueryResult = await db.query(
    "SELECT * FROM users WHERE cpf = $1;",
    [cpf]
  );
  console.log(user.rows[0].cpf);
  console.log(cpf);

  return user;
};

const createUser = async (
  name: string,
  email: string,
  cpf: string,
  cell: string,
  skills: string[],
  validate: boolean
): Promise<QueryResult> => {
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
  const newUser = await getByCpf(cpf);
  return newUser.rows[0];
};

export { createUser, getByCpf };
