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
  title = "Coming Soon...";
  myStudent: TypeCasting[];
  myStudentAsinc: Observable<TypeCasting[]>;
  studentFilter: TypeCasting[];
  sId: TypeCasting; // sINGLE DATA for Subcribe
  sidAsinc: Observable<TypeCasting>; // id data for Asinc pipe

  // Inject Service
  constructor(private _serv: StudentServiceService) {}

  // call method jo hum html me use kerenge
  ngOnInit() {
    this.student_Subscribe();
    this.student_async();
    this.student_Filster();
    //this.getmyStudentid_subscribe();
    this.getStudentId();
    this.getasync();
  }

  // Method Subscribt
  student_Subscribe() {
    this._serv.methodClass().subscribe(students => {
      // debugger;
      this.myStudent = students;
    });
  }

  // Method Asinc
  student_async() {
    this.myStudentAsinc = this._serv.methodClass();
  }

  //Methos Student Fillter
  student_Filster() {
    this._serv.methodClass().subscribe(studentFilter => {
      // this.studentFilter = studentFilter.filter(val => val.id == 1);
      this.studentFilter = studentFilter.filter(val => val.id == 1);
    });
  }

  getStudentId() {
    this._serv.methodId(1).subscribe(data => {
      this.sId = data;
    });
  }

  getasync() {
    this.sidAsinc = this._serv.methodidAsiynt(3);
  }
}
