import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
    providedIn: "root",
})
export class HomeService {
    constructor(private http: HttpClient) {}

    /**
     * Retrieves the offers data from the JSON file.
     * @returns An observable that emits the offers data.
     */
    public getOffers(): Observable<any> {
        return this.http.get("/assets/data.json");
    }
}
