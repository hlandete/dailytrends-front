import { NewsService } from "./../../service/news.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Article } from "src/app/global/article.interface";

@Component({
  selector: "app-news-landing",
  templateUrl: "./news-landing.component.html",
  styleUrls: ["./news-landing.component.scss"]
})
export class NewsLandingComponent implements OnInit {
  constructor(private newsService: NewsService) {}

  public articleForm: FormGroup = new FormGroup({ url: new FormControl(null) });

  public articles: Article[];

  async ngOnInit() {
    await this.newsService.getLastNews();

    this.newsService.getFeed().then(res => {
      this.articles = res as Article[];
    });
    // this.paisArticles = await this.newsService.getArticles(API.paisEndPoint);
  }

  public addArticle() {
    const url = this.articleForm.get("url").value;
    this.newsService
      .postSingleNew(url)
      .then(res => {
        console.log(res);
      })
      .catch(error => {
        console.log(error);
      });
  }
}
