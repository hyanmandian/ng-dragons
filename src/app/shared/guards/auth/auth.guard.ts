import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const already = true;

    if (already) return true;

    this.router.navigate(["login"]);
    return false;
  }
}
