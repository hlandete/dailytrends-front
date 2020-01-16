import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import * as API from "../../shared/endpoints";

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
    return this.http.get(API.endpoints.getNew + "/" + id).toPromise();
  }

  public postSingleNew(url) {
    return this.http.post(API.endpoints.postNew, { url });
    /*public getArticles(endpoint) {
    return this.http.get(endpoint).toPromise();
  }*/
  }

  public updateArticle(id, body) {
    return this.http.patch(API.endpoints.postNew + "/" + id, { body });
  }
}
