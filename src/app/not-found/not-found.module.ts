import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SharedModule } from "../shared/shared.module";
import { NotFoundComponent } from "./not-found.component";
import { NotFoundRoutingModule } from "./not-found-routing.module";

@NgModule({
  imports: [CommonModule, SharedModule, NotFoundRoutingModule],
  declarations: [NotFoundComponent]
})
export class NotFoundModule {}
