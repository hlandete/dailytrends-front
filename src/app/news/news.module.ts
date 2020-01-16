import { NewsService } from "./service/news.service";
import { NewsLandingComponent } from "./components/news-landing/news-landing.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DailytrendArticleComponent } from "./components/dailytrend-article/dailytrend-article.component";
import { MaterialModule } from "../shared/material/material.module";
import { NewDetailComponent } from "./components/new-detail/new-detail.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  declarations: [
    NewsLandingComponent,
    DailytrendArticleComponent,
    NewDetailComponent
  ],
  providers: [NewsService],
  imports: [
    CommonModule,
    MaterialModule,
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class NewsModule {}
