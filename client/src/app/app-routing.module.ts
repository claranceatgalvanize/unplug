import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { BycategoryComponent } from "./bycategory/bycategory.component";
import { DetailsComponent } from "./details/details.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { CategoryComponent } from "./category/category.component";
import { CategoryDetailsComponent } from "./category/category-details/category-details.component";
import { CategoryEditComponent } from "./category/category-edit/category-edit.component";
import { CategoryAddComponent } from "./category/category-add/category-add.component";
import { PostComponent } from "./post/post.component";
import { PostAddComponent } from "./post/post-add/post-add.component";
import { PostDetailsComponent } from "./post/post-details/post-details.component";
import { PostEditComponent } from "./post/post-edit/post-edit.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  {
    path: "home",
    component: HomeComponent,
    data: { title: "Blog Home" }
  },
  {
    path: "admin",
    component: AdminComponent,
    data: { title: "Blog Admin" }
  },
  {
    path: "bycategory/:id",
    component: BycategoryComponent,
    data: { title: "Post by Category" }
  },
  {
    path: "details/:id",
    component: DetailsComponent,
    data: { title: "Show Post Details" }
  },
  {
    path: "login",
    component: LoginComponent,
    data: { title: "Login" }
  },
  {
    path: "register",
    component: RegisterComponent,
    data: { title: "Register" }
  },
  {
    path: "category",
    component: CategoryComponent,
    data: { title: "Category" }
  },
  {
    path: "category/details/:id",
    component: CategoryDetailsComponent,
    data: { title: "Category Details" }
  },
  {
    path: "category/add",
    component: CategoryAddComponent,
    data: { title: "Category Add" }
  },
  {
    path: "category/edit/:id",
    component: CategoryEditComponent,
    data: { title: "Category Edit" }
  },
  {
    path: "post",
    component: PostComponent,
    data: { title: "Post" }
  },
  {
    path: "post/details/:id",
    component: PostDetailsComponent,
    data: { title: "Post Details" }
  },
  {
    path: "post/add",
    component: PostAddComponent,
    data: { title: "Post Add" }
  },
  {
    path: "post/edit/:id",
    component: PostEditComponent,
    data: { title: "Post Edit" }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
