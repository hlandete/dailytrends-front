import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-dailytrend-article",
  templateUrl: "./dailytrend-article.component.html",
  styleUrls: ["./dailytrend-article.component.scss"]
})
export class DailytrendArticleComponent implements OnInit {
  @Input() article;

  public title: string;
  public body: string;
  public source: string;
  public image: string;
  public publisher: string;

  constructor() {}

  ngOnInit() {
    this.title = this.article.title;
    this.body = this.article.body;
    this.source = this.article.source;
    this.image = this.article.image;
    this.publisher = this.article.publisher;
  }
}
