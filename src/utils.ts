import { Client } from "pg";

export async function getClient() {
  const client = new Client({
    user: "demodatabase_ahb9_user",
    password: "eNMzrpfU7RRMMho855Q1Dhw8AFCqRgJ5",
    database: "demodatabase_ahb9",
    port: 5432,
    host: "dpg-cpt68ijv2p9s73b26rpg-a.singapore-postgres.render.com",
    ssl: { rejectUnauthorized: false },
  });
  await client.connect();
  return client;
}
