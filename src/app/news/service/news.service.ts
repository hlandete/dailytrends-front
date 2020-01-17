import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import * as API from "../../shared/endpoints";

@Injectable({
  providedIn: "root"
})
export class NewsService {
  constructor(private http: HttpClient) {}

  public getFeed() {
    return this.http.get(API.endpoints.articles);
  }

  public getLastNews() {
    return this.http.get(API.endpoints.lastNews);
  }

  public getSingleNew(id) {
    return this.http.get(API.endpoints.articles + "/" + id);
  }

  public postSingleNew(url) {
    return this.http.post(API.endpoints.articles, { url });
    /*public getArticles(endpoint) {
    return this.http.get(endpoint).toPromise();
  }*/
  }

  public updateArticle(id, body) {
    return this.http.patch(API.endpoints.articles + "/" + id, { body });
  }

  public delete(id) {
    return this.http.delete(API.endpoints.articles + "/" + id);
  }
}
