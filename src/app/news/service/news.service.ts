import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import * as API from "../../global/endpoints";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getFeed() {
    return this.http.get(API.endpoints.feed).toPromise();
  }

  public getLastNews() {
    return this.http.get(API.endpoints.lastNews).toPromise();
  }

  public getSingleNew(id) {
    return this.http.get(API.endpoints.singleNew + "/" + id).toPromise();
  }
  /*public getArticles(endpoint) {
    return this.http.get(endpoint).toPromise();
  }*/
}
