import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { GuestGuard } from '../shared/guards/guest/guest.guard';
import { AuthComponent } from "./auth.component";

const routes: Routes = [
  {
    path: "login",
    component: AuthComponent,
    canActivate: [GuestGuard],
  },
  {
    path: "",
    pathMatch: "full",
    redirectTo: "login",
    canActivate: [GuestGuard],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
