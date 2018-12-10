import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import {
  MatIconModule,
  MatTableModule,
  MatInputModule,
  MatButtonModule,
  MatDialogModule
} from "@angular/material";

import { AuthGuard } from "../core/guards/auth/auth.guard";
import { SharedModule } from "../shared/shared.module";
import { FormComponent } from "./form/form.component";
import { DragonsComponent } from "./dragons.component";
import { DragonsRoutingModule } from "./dragons-routing.module";

@NgModule({
  imports: [
    FormsModule,
    CommonModule,
    SharedModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    MatButtonModule,
    DragonsRoutingModule
  ],
  providers: [AuthGuard],
  declarations: [DragonsComponent, FormComponent]
})
export class DragonsModule {}
