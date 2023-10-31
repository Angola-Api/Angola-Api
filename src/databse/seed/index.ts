import { provinces } from "../../constants/mock/provinces";
import { openDb } from "../sqlite";

const seed = async () => {
  const { db } = await openDb();

  db.exec(
    `CREATE TABLE IF NOT EXISTS provinces (id TEXT PRIMARY KEY NOT NULL, nome TEXT, fundada TEXT, capital TEXT, area TEXT, prefixo_telefonico TEXT, site_governo_provincial TEXT, municipios TEXT, normalized TEXT)`
  );

  for (const province of provinces) {
    db.run(
      `INSERT INTO provinces (id, nome, fundada, capital, area, prefixo_telefonico, site_governo_provincial, municipios, normalized) VALUES (?,?,?,?,?,?,?,?,?)`,
      [
        province.id,
        province.nome,
        province.fundada,
        province.capital,
        province.area,
        province.prefixo_telefonico,
        province.site_governo_provincial,
        JSON.stringify(province.municipios),
        province.normalized,
      ]
    );
  }
};

seed();
