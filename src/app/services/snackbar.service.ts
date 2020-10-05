import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: "root",
})
export class SnackbarService {
  constructor(private snackBar: MatSnackBar) {}

  showSnakBar(message: string, duration = 3) {
    this.snackBar.open(message, "", {
      duration: duration * 1000,
    });
  }
}
