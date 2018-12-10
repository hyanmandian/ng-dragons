import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule
} from "@angular/material";

import { SharedModule } from "../shared/shared.module";
import { DragonsComponent } from "./dragons.component";
import { DragonsRoutingModule } from "./dragons-routing.module";
import { AuthGuard } from "../core/guards/auth/auth.guard";

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    DragonsRoutingModule
  ],
  providers: [AuthGuard],
  declarations: [DragonsComponent]
})
export class DragonsModule {}
