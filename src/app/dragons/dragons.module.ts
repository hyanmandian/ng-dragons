import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../shared/components/components.module";
import { DragonsComponent } from "./dragons.component";
import { DragonsRoutingModule } from "./dragons-routing.module";
import { AuthGuard } from '../shared/guards/auth/auth.guard';

@NgModule({
  imports: [CommonModule, ComponentsModule, DragonsRoutingModule],
  providers: [AuthGuard],
  declarations: [DragonsComponent]
})
export class DragonsModule {}
