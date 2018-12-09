import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from '../shared/guards/auth/auth.guard';
import { DragonsComponent } from "./dragons.component";

const routes: Routes = [
  {
    path: "",
    component: DragonsComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonsRoutingModule {}
