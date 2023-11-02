import { environment } from "../../config/environment";
import path from "path"
import * as sqlite from "sqlite";
import sqlite3 from "sqlite3";

const dbPath = path.resolve(__dirname, environment.dbPath);

export async function openDb() {
  return await sqlite.open({
    filename: dbPath,
    driver: sqlite3.Database,
  });
}