import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  MatIconModule,
  MatDialogModule,
  MatButtonModule,
  MatToolbarModule,
  MatProgressSpinnerModule
} from "@angular/material";

import { DialogComponent } from "./dialog/dialog.component";
import { LayoutComponent } from "./layout/layout.component";
import { LoaderComponent } from "./loader/loader.component";

@NgModule({
  imports: [
    CommonModule,
    MatIconModule,
    MatDialogModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressSpinnerModule
  ],
  exports: [DialogComponent, LayoutComponent, LoaderComponent],
  declarations: [DialogComponent, LayoutComponent, LoaderComponent],
  entryComponents: [DialogComponent]
})
export class SharedModule {}
