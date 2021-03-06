import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Category } from "./models/category";
import { HomeService } from "./services/home.service";
import { AuthService } from "./services/auth.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent implements OnInit {
  displayedColums: string[] = ["catName", "catDec"];
  categories: Category[] = [];
  loginStatus = false;

  constructor(
    private api: HomeService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit() {
    this.authService.isLoggedIn.subscribe((status: any) => {
      if (status === true) {
        this.loginStatus = true;
      } else {
        this.loginStatus = false;
      }
    });
    this.api.getCategories().subscribe(
      (res: any) => {
        this.categories = res;
        console.log(this.categories);
      },
      err => {
        console.log(err);
      }
    );
  }

  logout() {
    this.authService.logout().subscribe(
      (res: any) => {
        this.router.navigate(["/"]);
      },
      err => {
        console.log(err);
      }
    );
  }
}
