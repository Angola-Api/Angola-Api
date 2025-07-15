import { Nif } from "src/entities/Nif";

export interface INif{
    consultarNif(nif: string): Promise<Nif>;
}