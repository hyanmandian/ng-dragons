import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { AuthService } from "src/app/core/services/auth/auth.service";

@Component({
  selector: "app-layout",
  styleUrls: ["./layout.component.scss"],
  templateUrl: "./layout.component.html"
})
export class LayoutComponent implements OnInit {
  @Input()
  public title: string;

  @Output()
  public onBack: EventEmitter<any> = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  hasBack() {
    return !!this.onBack.observers.length;
  }

  handleBack() {
    this.onBack.emit();
  }

  logout(): void {
    this.authService.logout();
  }
}
