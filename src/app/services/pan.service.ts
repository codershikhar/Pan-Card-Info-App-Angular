import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";
import { IPanInfo } from "../models/app.models";

@Injectable({
  providedIn: "root",
})
export class PanService {
  constructor(private http: HttpClient) {}

  processFile(formData): Observable<IPanInfo> {
    let url = `${environment.dbUrl}/api/v1/pan/`;
    return this.http.post<IPanInfo>(url, formData);
  }

  listPanInfo(
    pageNumber: number,
    pageCount: number
  ): Observable<Array<IPanInfo>> {
    let url = `${environment.dbUrl}/api/v1/pan/?pageCount=${pageCount}&pageNumber=${pageNumber}`;
    return this.http.get<Array<IPanInfo>>(url);
  }
}
