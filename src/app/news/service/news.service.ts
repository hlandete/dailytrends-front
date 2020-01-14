import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import * as API from "../../global/endpoints";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getFeed() {
    return this.http.get("http://localhost:3000/articles/feed").toPromise();
  }
  /*public getArticles(endpoint) {
    return this.http.get(endpoint).toPromise();
  }*/
}
