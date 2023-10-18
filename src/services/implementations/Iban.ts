import { environment } from "@config/environment";
import HttpClient from "../HttpClient";
import { IIban } from "../IIban";

export class Iban implements IIban {
    constructor (private httpClient: HttpClient) {}

    async getIban(iban: string): Promise<any> {
        const response = await this.httpClient.get(`http://localhost/angola-open-source/angola-api/php/valid_iban.php?iban=${iban}`);
        return response;
    }

}