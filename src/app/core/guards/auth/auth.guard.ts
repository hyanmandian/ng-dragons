import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

import { AuthService } from "../../services/auth/auth.service";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authService.isLogged()) return true;

    this.router.navigate(["login"]);

    return false;
  }
}
