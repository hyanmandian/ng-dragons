import { Component, OnInit } from "@angular/core";
import { NgForm } from "@angular/forms";
import { MatDialog } from "@angular/material";

import { AuthService } from "../core/services/auth/auth.service";
import { DialogComponent } from "../shared/dialog/dialog.component";

@Component({
  selector: "app-auth",
  templateUrl: "./auth.component.html",
  styleUrls: ["./auth.component.scss"]
})
export class AuthComponent implements OnInit {
  constructor(private authService: AuthService, private dialog: MatDialog) {}

  ngOnInit() {}

  login(form: NgForm) {
    try {
      this.authService.login(form.value);
    } catch (e) {
      const dialog = this.dialog.open(DialogComponent, {
        data: {
          title: "Error :(",
          message: e.message
        }
      });

      dialog.afterClosed().subscribe(() => form.reset());
    }
  }
}
