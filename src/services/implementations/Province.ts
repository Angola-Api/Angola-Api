import { IProvincesProps } from "src/constants/mock/provinces/types";
import { IProvince } from "../IProvince";
import { openDb } from "../../databse/sqlite";

export class ProvinceService implements IProvince {
  async getProvinces(): Promise<IProvincesProps[]> {
    const db = await openDb();
    const provinces = await db.all<IProvincesProps[]>(
      "SELECT id,nome, fundada, capital, area,prefixo_telefonico,site_governo_provincial, municipios FROM provinces"
    );
    db.close();

    return provinces;
  }
  async getOneProvince(id: string): Promise<IProvincesProps> {
    const db = await openDb();
    const province = await db.get<IProvincesProps>(
      "SELECT id,nome, fundada,capital, area,prefixo_telefonico,site_governo_provincial, municipios FROM provinces WHERE id = ?",
      [id]
    );
    db.close();

    return province;
  }

  async getOneProvinceByName(nome: string): Promise<IProvincesProps> {
    const db = await openDb();
    const province = await db.get<IProvincesProps>(
      "SELECT id,nome, fundada,capital, area,prefixo_telefonico,site_governo_provincial, municipios FROM provinces WHERE normalized = ?",
      [nome]
    );
    db.close();

    return province;
  }
}
