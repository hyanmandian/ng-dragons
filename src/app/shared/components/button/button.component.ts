import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-button",
  styleUrls: ["./button.component.scss"],
  templateUrl: "./button.component.html"
})
export class ButtonComponent implements OnInit {
  @Input("appearance")
  appearance: string = "default";

  constructor() {}

  ngOnInit() {
    console.log(this.appearance);
  }
}
