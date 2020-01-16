import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../service/news.service";
import { ActivatedRoute } from "@angular/router";
import { Article } from "src/app/shared/article.interface";
import { ToastrService } from "ngx-toastr";

@Component({
  selector: "app-new-detail",
  templateUrl: "./new-detail.component.html",
  styleUrls: ["./new-detail.component.scss"]
})
export class NewDetailComponent implements OnInit {
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private readonly toastService: ToastrService
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

  public enableEditMode() {
    this.editMode = true;
  }

  public updateArticle(id, body) {
    this.newsService.updateArticle(id, body).subscribe(
      article => {
        this.toastService.success("Articulo actualizado con exito");
      },
      error => {
        this.toastService.error(error.error.message);
      }
    );
    this.editMode = false;
  }

  public deleteArticle(id) {}
}
