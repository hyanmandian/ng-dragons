import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { GuestGuard } from '../core/guards/guest/guest.guard';

@NgModule({
  imports: [CommonModule, SharedModule, AuthRoutingModule],
  providers: [GuestGuard],
  declarations: [AuthComponent]
})
export class AuthModule {}
