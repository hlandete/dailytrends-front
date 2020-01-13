import { NewsService } from "./../../service/news.service";
import { Component, OnInit } from "@angular/core";

import * as API from "../../../global/endpoints";

@Component({
  selector: "app-news-landing",
  templateUrl: "./news-landing.component.html",
  styleUrls: ["./news-landing.component.scss"]
})
export class NewsLandingComponent implements OnInit {
  constructor(private newsService: NewsService) {}

  public mundoArticles;
  public paisArticles;

  async ngOnInit() {
    this.mundoArticles = await this.newsService.getArticles(API.mundoEndPoint);
    this.paisArticles = await this.newsService.getArticles(API.paisEndPoint);
  }
}
