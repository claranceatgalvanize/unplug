import { Component, OnInit } from "@angular/core";
import { Category } from "../models/category";
import { CategoryService } from "../services/category.service";

@Component({
  selector: "app-category",
  templateUrl: "./category.component.html",
  styleUrls: ["./category.component.scss"]
})
export class CategoryComponent implements OnInit {
  displayedColumns: string[] = ["catName", "catDec"];
  data: Category[] = [];
  isLoadingResults = true;

  constructor(private api: CategoryService) {}

  ngOnInit() {
    this.api.getCategories().subscribe(
      (res: any) => {
        this.data = res;
        console.log(this.data);
        this.isLoadingResults = false;
      },
      err => {
        console.log(err);
        this.isLoadingResults = false;
      }
    );
  }
}
