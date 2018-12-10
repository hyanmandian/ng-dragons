import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import {
  MatCardModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule,
  MatDividerModule
} from "@angular/material";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { AuthComponent } from "./auth.component";
import { AuthRoutingModule } from "./auth-routing.module";
import { GuestGuard } from "../core/guards/guest/guest.guard";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    MatCardModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    MatDividerModule,
    AuthRoutingModule
  ],
  providers: [GuestGuard],
  declarations: [AuthComponent]
})
export class AuthModule {}
