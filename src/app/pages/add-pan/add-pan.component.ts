import { Component, OnInit } from "@angular/core";
import { IPanInfo } from "src/app/models/app.models";
import { PanService } from "src/app/services/pan.service";
import { SnackbarService } from "src/app/services/snackbar.service";
import { environment } from "src/environments/environment";

@Component({
  selector: "app-add-pan",
  templateUrl: "./add-pan.component.html",
  styleUrls: ["./add-pan.component.scss"],
})
export class AddPanComponent implements OnInit {
  dbUrl = environment.dbUrl;

  loading: boolean = false;

  panInfo: IPanInfo;

  constructor(
    private panService: PanService,
    private snackbarService: SnackbarService
  ) {}

  ngOnInit(): void {}

  fileInputChange(fileInputEvent: any) {
    this.loading = true;
    console.log(fileInputEvent.target.files[0]);
    var form = new FormData();
    form.append("file", fileInputEvent.target.files[0]);
    this.panService.processFile(form).subscribe(
      (res: IPanInfo) => {
        this.loading = false;
        console.log("res", res);
        this.panInfo = res;
        this.snackbarService.showSnakBar("Data Extracted Successfully");
      },
      (err) => {
        this.loading = false;
        console.log("err", err);
        this.snackbarService.showSnakBar(err.error.message, 5);
      }
    );
  }

  reset() {
    this.panInfo = null;
  }
}
