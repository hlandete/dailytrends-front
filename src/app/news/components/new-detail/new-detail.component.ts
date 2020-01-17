import { Component, OnInit } from "@angular/core";
import { NewsService } from "../../service/news.service";
import { ActivatedRoute } from "@angular/router";
import { Article } from "src/app/shared/article.interface";
import { ToastrService } from "ngx-toastr";
import { FormGroup, FormControl } from "@angular/forms";
import { Location } from "@angular/common";

@Component({
  selector: "app-new-detail",
  templateUrl: "./new-detail.component.html",
  styleUrls: ["./new-detail.component.scss"]
})
export class NewDetailComponent implements OnInit {
  constructor(
    private newsService: NewsService,
    private route: ActivatedRoute,
    private readonly toastService: ToastrService,
    private location: Location
  ) {}

  public id: string;
  public article: Article = {} as Article;
  public editMode: boolean = false;
  public articleForm: FormGroup = new FormGroup({
    title: new FormControl(null),
    body: new FormControl(null)
  });

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params["id"];
    });

    this.newsService.getSingleNew(this.id).subscribe(
      article => {
        this.article = article as Article;
        this.articleForm.get("title").setValue(this.article.title);
        this.articleForm.get("body").setValue(this.article.body);
      },
      error => {
        this.toastService.error(error.message);
      }
    );
  }

  public toggleEditMode() {
    this.editMode = !this.editMode;
    if (!this.editMode) {
      this.articleForm.get("title").setValue(this.article.title);
      this.articleForm.get("body").setValue(this.article.body);
    }
  }

  public updateArticle(id, body) {
    body = {
      title: this.articleForm.get("title").value,
      body: this.articleForm.get("body").value
    };
    this.newsService.updateArticle(id, body).subscribe(
      article => {
        this.toastService.success("Articulo actualizado con exito");
        this.article = article as Article;
      },
      error => {
        this.toastService.error("Error actualizando");
      }
    );
    this.editMode = false;
    this.articleForm.get("title").setValue(this.article.title);
    this.articleForm.get("body").setValue(this.article.body);
  }

  public deleteArticle(id) {
    this.newsService.delete(id).subscribe(
      article => {
        this.toastService.success("Articulo eliminado con exito");
        this.location.back();
      },
      error => {
        this.toastService.error(error.message);
      }
    );
  }
}
