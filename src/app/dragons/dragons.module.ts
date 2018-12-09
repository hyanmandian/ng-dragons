import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { MatTableModule } from '@angular/material';

import { SharedModule } from "../shared/shared.module";
import { DragonsComponent } from "./dragons.component";
import { DragonsRoutingModule } from "./dragons-routing.module";
import { AuthGuard } from '../core/guards/auth/auth.guard';

@NgModule({
  imports: [CommonModule, SharedModule, MatTableModule, DragonsRoutingModule],
  providers: [AuthGuard],
  declarations: [DragonsComponent]
})
export class DragonsModule {}
