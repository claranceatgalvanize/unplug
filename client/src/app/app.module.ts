import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HTTP_INTERCEPTORS, HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { CKEditorModule } from "ckeditor4-angular";
import { MatContenteditableModule } from "mat-contenteditable";

import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule,
  MatMenuModule,
  MatToolbarModule,
  MatSelectModule,
  MatOptionModule,
  MatGridListModule,
  MatExpansionModule,
  MatListModule
} from "@angular/material";

import { TokenInterceptor } from "./interceptors/token-interceptor";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { LoginComponent } from "./auth/login/login.component";
import { RegisterComponent } from "./auth/register/register.component";
import { HomeComponent } from "./home/home.component";
import { AdminComponent } from "./admin/admin.component";
import { BycategoryComponent } from "./bycategory/bycategory.component";
import { DetailsComponent } from "./details/details.component";
import { CategoryComponent } from "./category/category.component";
import { CategoryDetailsComponent } from "./category/category-details/category-details.component";
import { CategoryAddComponent } from "./category/category-add/category-add.component";
import { CategoryEditComponent } from "./category/category-edit/category-edit.component";
import { PostComponent } from "./post/post.component";
import { PostDetailsComponent } from "./post/post-details/post-details.component";
import { PostAddComponent } from "./post/post-add/post-add.component";
import { PostEditComponent } from "./post/post-edit/post-edit.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { SideNavComponent } from "./home/side-nav/side-nav.component";
import { FeatureComponent } from './home/feature/feature.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    AdminComponent,
    BycategoryComponent,
    DetailsComponent,
    CategoryComponent,
    CategoryDetailsComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    PostComponent,
    PostDetailsComponent,
    PostAddComponent,
    PostEditComponent,
    SideNavComponent,
    FeatureComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatMenuModule,
    MatToolbarModule,
    MatSelectModule,
    MatOptionModule,
    MatGridListModule,
    MatExpansionModule,
    MatListModule,
    CKEditorModule,
    MatContenteditableModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
