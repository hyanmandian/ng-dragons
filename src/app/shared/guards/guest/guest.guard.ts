import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";

@Injectable()
export class GuestGuard implements CanActivate {
  constructor(private router: Router) {}

  canActivate(): boolean {
    const already = false;

    if (already) return true;

    this.router.navigate([""]);
    return false;
  }
}
