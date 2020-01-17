import { NewsLandingComponent } from "./news/components/news-landing/news-landing.component";
import { NewDetailComponent } from "./news/components/new-detail/new-detail.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "",
    redirectTo: "/news",
    pathMatch: "full"
  },
  {
    path: "news",
    component: NewsLandingComponent
  },
  {
    path: "news-detail/:id",
    component: NewDetailComponent
  },
  { path: "**", redirectTo: "/news" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
