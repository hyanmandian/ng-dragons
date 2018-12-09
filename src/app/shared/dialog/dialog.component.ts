import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

interface Data {
  title: string;
  message: string;
}

@Component({
  selector: "app-dialog",
  templateUrl: "./dialog.component.html",
  styleUrls: ["./dialog.component.scss"]
})
export class DialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) private data: Data) {}

  ngOnInit() {}
}
