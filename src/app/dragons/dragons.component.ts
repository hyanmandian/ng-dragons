import { Component, OnInit } from "@angular/core";

import { DragonService } from "../core/services/dragon/dragon.service";
import { MatDialog } from "@angular/material";
import { DialogComponent } from "../shared/dialog/dialog.component";

@Component({
  selector: "app-dragons",
  styleUrls: ["./dragons.component.scss"],
  templateUrl: "./dragons.component.html"
})
export class DragonsComponent implements OnInit {
  constructor(
    private dragonService: DragonService,
    private dialog: MatDialog
  ) {}

  loading = true;

  table = {
    columns: ["created_at", "name", "type", "actions"],
    data: []
  };

  ngOnInit() {
    this.fetch();
  }

  fetch() {
    this.loading = true;

    return this.dragonService.total().subscribe(total => {
      this.dragonService.all({ total }).subscribe(dragons => {
        this.table.data = dragons;
        this.loading = false;
      });
    });
  }

  delete(dragon) {
    const dialog = this.dialog.open(DialogComponent, {
      data: {
        title: "Delete",
        message: `Do you want to delete <strong>${dragon.name ||
          "unnamed"}</strong> dragon?`,
        onConfirm: () => {
          dialog.close();

          this.loading = true;

          this.dragonService.delete(dragon.slug).subscribe(() => this.fetch());
        },
        onCancel: () => dialog.close()
      }
    });
  }
}
