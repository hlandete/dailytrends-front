import { NewsService } from "./service/news.service";
import { NewsLandingComponent } from "./components/news-landing/news-landing.component";
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DailytrendArticleComponent } from "./components/dailytrend-article/dailytrend-article.component";
import { MatCardModule } from "@angular/material";
@NgModule({
  declarations: [NewsLandingComponent, DailytrendArticleComponent],
  providers: [NewsService],
  imports: [CommonModule, MatCardModule]
})
export class NewsModule {}
