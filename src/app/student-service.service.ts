import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { TypeCasting } from "./type-casting";

@Injectable({
  providedIn: "root"
})
export class StudentServiceService {
  apiurl = "/api/studentDetail";
  constructor(private http: HttpClient) {}

  methodClass(): Observable<TypeCasting[]> {
    return this.http.get<TypeCasting[]>(this.apiurl);
  }

  methodId(id: number): Observable<TypeCasting> {
    return this.http.get<TypeCasting>(this.apiurl + "/" + id);
  }

  methodidAsiynt(id: number): Observable<TypeCasting> {
    return this.http.get<TypeCasting>(this.apiurl + "/" + id);
  }
}
