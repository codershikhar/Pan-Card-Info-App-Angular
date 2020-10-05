import { Component, OnInit } from "@angular/core";
import { IPanInfo } from "src/app/models/app.models";
import { PanService } from "src/app/services/pan.service";
import { SnackbarService } from "src/app/services/snackbar.service";
import { environment } from "../../../environments/environment";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
})
export class HomeComponent implements OnInit {
  dbUrl = environment.dbUrl;
  totalLists: number = 0;
  currentPageSize: number = 5;
  currentPageNumber: number = 0;

  displayedColumns: string[] = [
    "id",
    "card image",
    "full name",
    "fathers name",
    "dob",
    "pan number",
    "signature",
    "photo",
  ];

  dataSource: Array<IPanInfo>;

  constructor(
    private panService: PanService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {
    this.fetchPanInfoList();
  }

  fetchPanInfoList() {
    console.log(this.currentPageNumber, this.currentPageSize);
    this.panService
      .listPanInfo(this.currentPageNumber, this.currentPageSize)
      .subscribe(
        (res) => {
          console.log("listTodo res", res);
          this.dataSource = res["data"];
          this.totalLists = res["count"];
        },
        (err) => {
          console.error("err", err);
          this.snackbarService.showSnakBar("Error Fetching Date");
        }
      );
  }

  paginationPanInfoList(event) {
    console.log("event", event);
    this.currentPageNumber = event.pageIndex;
    this.currentPageSize = event.pageSize;
    this.fetchPanInfoList();
  }
}
