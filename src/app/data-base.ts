import { TypeCasting } from "./type-casting";
import { InMemoryDbService } from "angular-in-memory-web-api";
// Data
export class DataBase implements InMemoryDbService {
  createDb() {
    let classDetail: TypeCasting[] = [
      {
        id: 1,
        name: "Parikshit Bhatt",
        age: 6,
        class: "2th B",
        rollNumber: 7,
        school: "D . A . V"
      },
      {
        id: 2,
        name: "Yash Bhatt",
        age: 3,
        class: "2th B",
        rollNumber: 9,
        school: "D . A . V"
      },
      {
        id: 3,
        name: "Trisu Bhatt",
        age: 2,
        class: "1th B",
        rollNumber: 10,
        school: "D . A . V"
      }
    ];
    let welcomeMess = "Welcome to The SahoSoft Angular Class";
    return { studentDetail: classDetail, messWel: welcomeMess };
  }
}
