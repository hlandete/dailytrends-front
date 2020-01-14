import { NewsService } from "./service/news.service";
import { NewsLandingComponent } from "./components/news-landing/news-landing.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DailytrendArticleComponent } from "./components/dailytrend-article/dailytrend-article.component";
import { MaterialModule } from "../global/material.module";
@NgModule({
  declarations: [NewsLandingComponent, DailytrendArticleComponent],
  providers: [NewsService],
  imports: [CommonModule, MaterialModule]
})
export class NewsModule {}
