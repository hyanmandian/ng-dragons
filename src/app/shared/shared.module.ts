import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
  MatToolbarModule
} from "@angular/material";

import { DialogComponent } from "./dialog/dialog.component";
import { LayoutComponent } from "./layout/layout.component";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule
  ],
  exports: [DialogComponent, LayoutComponent],
  declarations: [DialogComponent, LayoutComponent],
  entryComponents: [DialogComponent]
})
export class SharedModule {}
