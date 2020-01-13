import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import * as API from "../../global/endpoints";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getArticles(endpoint) {
    return this.http.get(API.apiUrl + endpoint).toPromise();
  }
}
