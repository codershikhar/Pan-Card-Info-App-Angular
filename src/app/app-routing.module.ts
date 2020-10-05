import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AddPanComponent } from "./pages/add-pan/add-pan.component";
import { HomeComponent } from "./pages/home/home.component";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "add", component: AddPanComponent },
  { path: "**", redirectTo: "" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
