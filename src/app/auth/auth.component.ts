import { Component, OnInit, Input } from "@angular/core";
import { AuthService } from '../core/services/auth/auth.service';

interface Credentials {
  user: string;
  pass: string;
};

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
  }

  login(credentials: Credentials) {
    try {
      this.authService.login(credentials);
    } catch (e) {
      alert(e);
    }
  }
}
