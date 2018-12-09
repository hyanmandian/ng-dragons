import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ComponentsModule } from "../shared/components/components.module";
import { NotFoundComponent } from "./not-found.component";
import { NotFoundRoutingModule } from "./not-found-routing.module";

@NgModule({
  imports: [CommonModule, ComponentsModule, NotFoundRoutingModule],
  declarations: [NotFoundComponent]
})
export class NotFoundModule {}