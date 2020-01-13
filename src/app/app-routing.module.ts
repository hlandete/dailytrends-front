import { NewsLandingComponent } from "./news/components/news-landing/news-landing.component";
import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

const routes: Routes = [
  {
    path: "news",
    component: NewsLandingComponent
  },
  {
    path: "",
    redirectTo: "/news",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
