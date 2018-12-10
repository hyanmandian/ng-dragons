import { Component, OnInit, Inject } from "@angular/core";
import { MAT_DIALOG_DATA } from "@angular/material";

interface Data {
  title: string;
  message: string;
}

@Component({
  selector: "app-dialog",
  styleUrls: ["./dialog.component.scss"],
  templateUrl: "./dialog.component.html"
})
export class DialogComponent implements OnInit {
  constructor(@Inject(MAT_DIALOG_DATA) private data: Data) {}

  ngOnInit() {}
}
