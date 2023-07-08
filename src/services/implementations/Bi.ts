import { environment } from "@config/environment";
import HttpClient from "../HttpClient";
import { IBi } from "../IBi";

export class Bi implements IBi {

    constructor (private httpClient: HttpClient) {}

    async getBi(bi: string): Promise<any> {
        const response = await this.httpClient.get(`${environment.biUrl}/ao/actions/bi.ajcall.php?bi=${bi}`);
        return response;
    }

}