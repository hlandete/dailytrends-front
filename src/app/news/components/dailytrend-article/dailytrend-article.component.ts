import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-dailytrend-article",
  templateUrl: "./dailytrend-article.component.html",
  styleUrls: ["./dailytrend-article.component.scss"]
})
export class DailytrendArticleComponent implements OnInit {
  @Input() article;

  public id: string;
  public title: string;
  public body: string;
  public source: string;
  public author: string;
  public image: string;
  public publisher: string;

  constructor(private router: Router) {}

  ngOnInit() {
    this.id = this.article._id;
    this.title = this.article.title;
    this.body = this.article.body;
    this.source = this.article.source;
    this.image = this.article.image;
    this.publisher = this.article.publisher;
    this.author = this.article.author;
  }

  navigate() {
    this.router.navigate(["news-detail/" + this.id]);
  }
}
