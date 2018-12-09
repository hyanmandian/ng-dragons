import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../shared/components/components.module";
import { AuthComponent } from "./auth.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { GuestGuard } from '../shared/guards/guest/guest.guard';

@NgModule({
  imports: [CommonModule, ComponentsModule, AuthRoutingModule],
  providers: [GuestGuard],
  declarations: [AuthComponent]
})
export class AuthModule {}
