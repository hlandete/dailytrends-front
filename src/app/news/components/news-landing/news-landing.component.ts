import { NewsService } from "./../../service/news.service";
import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl } from "@angular/forms";
import { Article } from "../../../../app/shared/article.interface";
import { ToastrService } from "ngx-toastr";
import { ReversePipe } from "src/app/shared/pipes/reverse.pipe";
@Component({
  selector: "app-news-landing",
  templateUrl: "./news-landing.component.html",
  styleUrls: ["./news-landing.component.scss"]
})
export class NewsLandingComponent implements OnInit {
  constructor(
    private newsService: NewsService,
    private readonly toastService: ToastrService
  ) {}

  public articleForm: FormGroup = new FormGroup({ url: new FormControl(null) });

  public articles: Article[];
  public timeLineArticles: Article[];

  async ngOnInit() {
    await this.newsService.getLastNews().toPromise();

    this.newsService.getFeed().subscribe(
      res => {
        this.articles = (res as Article[]).slice().reverse();
      },
      error => {}
    );
    // this.paisArticles = await this.newsService.getArticles(API.paisEndPoint);
  }

  public addArticle() {
    const url = this.articleForm.get("url").value;
    this.newsService.postSingleNew(url).subscribe(
      article => {
        this.articles.unshift(article as Article);
        this.toastService.success("Articulo añadido con exito");
      },
      error => {
        this.toastService.error(error.error.message);
      }
    );
  }
}
