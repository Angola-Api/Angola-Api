import { environment } from "../../config/environment";
import path from "path";
import * as sqlite from "sqlite";
import sqlite3 from "sqlite3";
import { mkdir } from "fs";
import fs from "fs";

const getPath = async (fileName: string): Promise<string> => {
  const dir = path.resolve(__dirname, environment.dbPath);
  const filePath = path.join(dir, fileName);

  if (!fs.existsSync(dir)) {
    mkdir(dir, { recursive: true }, (err) => {
      if (err) throw err;
    });
  }

  return filePath;
};

export async function openDb() {
  const filePath = await getPath(process.env.FILE_NAME);

  return await sqlite.open({
    filename: filePath,
    driver: sqlite3.Database,
  });
}
