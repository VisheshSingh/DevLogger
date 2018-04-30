import { Injectable } from "@angular/core";
import { Log } from "../models/Log";

@Injectable()
export class LogService {
  logs: Log[];
  constructor() {
    this.logs = [
      {
        id: "1",
        text: "Generated components",
        date: new Date("12/25/2017 12:54:33")
      },
      {
        id: "2",
        text: "Added Bootstrap",
        date: new Date("12/26/2017 9:24:33")
      },
      {
        id: "3",
        text: "Added logs component",
        date: new Date("12/27/2017 2:14:23")
      }
    ];
  }

  getLogs() {
    return this.logs;
  }
}
