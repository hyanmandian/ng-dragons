import { Component, OnInit } from "@angular/core";

import { DragonService } from "../core/services/dragon/dragon.service";

@Component({
  selector: "app-dragons",
  styleUrls: ["./dragons.component.scss"],
  templateUrl: "./dragons.component.html"
})
export class DragonsComponent implements OnInit {
  constructor(private dragonService: DragonService) {}

  table = {
    columns: ["created_at", "name", "type"],
    data: []
  };

  ngOnInit() {
    this.dragonService.total().subscribe(total => {
      this.dragonService.all({ total }).subscribe(dragons => {
        this.table.data = dragons;
      });
    });
  }
}
