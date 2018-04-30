import { Injectable } from "@angular/core";
import { Log } from "../models/Log";
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Observable";
import { of } from "rxjs/observable/of";

@Injectable()
export class LogService {
  logs: Log[];

  private logSource = new BehaviorSubject<Log>({
    id: null,
    text: null,
    date: null
  });

  selectedLog = this.logSource.asObservable();

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

  getLogs(): Observable<Log[]> {
    return of(this.logs);
  }

  setFormLog(log: Log) {
    this.logSource.next(log);
  }
}
