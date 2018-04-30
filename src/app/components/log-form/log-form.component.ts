import { Component, OnInit } from "@angular/core";
import { Log } from "../../models/Log";

import { LogService } from "../../services/log.service";

@Component({
  selector: "app-log-form",
  templateUrl: "./log-form.component.html",
  styleUrls: ["./log-form.component.css"]
})
export class LogFormComponent implements OnInit {
  constructor(private logService: LogService) {}

  ngOnInit() {
    //Subscribe to the selected Log observable
    this.logService.selectedLog.subscribe(log => console.log(log));
  }
}
