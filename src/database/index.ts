import { Pool } from "pg";

const db = new Pool({
  user: "postgres",
  password: "96672286",
  host: "localhost",
  port: 5432,
  database: "mangarosa",
});

export { db };
