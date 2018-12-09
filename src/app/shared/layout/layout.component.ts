import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from 'src/app/core/services/auth/auth.service';

@Component({
  selector: "app-layout",
  templateUrl: "./layout.component.html",
  styleUrls: ["./layout.component.scss"]
})
export class LayoutComponent implements OnInit {
  @Input()
  public title: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  logout(): void {
    this.authService.logout();
  }
}
