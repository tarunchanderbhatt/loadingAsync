import { Component } from "@angular/core";
import { StudentServiceService } from "./student-service.service";
import { TypeCasting } from "./type-casting";
import { Observable } from "rxjs";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "obse";
  myStudent: TypeCasting[];
  myStudentAsinc: Observable<TypeCasting[]>;
  constructor(private _serv: StudentServiceService) {}
  ngOnInit() {
    this.student_Subscribe();
    this.student_async();
  }

  // Method
  student_Subscribe() {
    this._serv.methodClass().subscribe(students => {
      this.myStudent = students;
    });
  }

  student_async() {
    this.myStudentAsinc = this._serv.methodClass();
  }
}
