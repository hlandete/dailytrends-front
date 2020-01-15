import { NewsService } from "./../../service/news.service";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-news-landing",
  templateUrl: "./news-landing.component.html",
  styleUrls: ["./news-landing.component.scss"]
})
export class NewsLandingComponent implements OnInit {
  constructor(private newsService: NewsService) {}

  public mundoArticles;
  public paisArticles;
  public articles;

  async ngOnInit() {
    await this.newsService.getLastNews();

    this.newsService.getFeed().then(res => {
      this.articles = res;
    });
    // this.paisArticles = await this.newsService.getArticles(API.paisEndPoint);
  }
}
