import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import Credentials from '../../models/credentials.model';

const CREDENTIALS = {
  user: "demo",
  pass: "demo"
};

@Injectable()
export class AuthService {
  constructor(private router: Router) {}

  login({ user, pass, redirectTo = "" }: Credentials): void | Error {
    if (CREDENTIALS.user !== user || CREDENTIALS.pass !== pass) {
      throw new Error("User not found.");
    }

    localStorage.setItem("isLogged", "true");
    this.router.navigate([redirectTo]);
  }

  logout(): void {
    localStorage.removeItem("isLogged");
    this.router.navigate(["login"]);
  }

  isLogged(): boolean {
    return !!localStorage.getItem("isLogged");
  }
}
