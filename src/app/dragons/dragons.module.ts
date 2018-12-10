import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatTableModule,
  MatButtonModule,
  MatIconModule,
  MatDialogModule,
  MatInputModule
} from "@angular/material";

import { SharedModule } from "../shared/shared.module";
import { DragonsComponent } from "./dragons.component";
import { DragonsRoutingModule } from "./dragons-routing.module";
import { AuthGuard } from "../core/guards/auth/auth.guard";
import { FormComponent } from "./form/form.component";
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    FormsModule,
    MatButtonModule,
    MatIconModule,
    MatTableModule,
    MatInputModule,
    MatDialogModule,
    DragonsRoutingModule
  ],
  providers: [AuthGuard],
  declarations: [DragonsComponent, FormComponent]
})
export class DragonsModule {}
