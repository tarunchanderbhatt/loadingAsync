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
        room: "2th B",
        roll: 7,
        school: "D . A . V"
      },
      {
        id: 2,
        name: "Yash Bhatt",
        age: 3,
        room: "2th B",
        roll: 9,
        school: "D . A . V"
      },
      {
        id: 3,
        name: "Trisu Bhatt",
        age: 2,
        room: "1th B",
        roll: 10,
        school: "D . A . V"
      }
    ];
    let welcomeMess = "Welcome to The SahoSoft Angular Class";
    return { studentDetail: classDetail, messWel: welcomeMess };
  }
}
