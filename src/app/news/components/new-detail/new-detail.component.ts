import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../service/news.service";
import { ActivatedRoute } from "@angular/router";
import { Article } from "src/app/global/article.interface";

@Component({
  selector: "app-new-detail",
  templateUrl: "./new-detail.component.html",
  styles: []
})
export class NewDetailComponent implements OnInit {
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute
  ) {}

  public id: string;
  public article: Article;
  public editMode: boolean = false;

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.newsService.getSingleNew(this.id).then(article => {
      this.article = article as Article;
    });
  }
}
