import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { AuthGuard } from "../core/guards/auth/auth.guard";
import { DragonsComponent } from "./dragons.component";
import { FormComponent } from "./form/form.component";

const routes: Routes = [
  {
    path: "",
    component: DragonsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "create",
    component: FormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":slug/show",
    component: FormComponent,
    canActivate: [AuthGuard]
  },
  {
    path: ":slug/edit",
    component: FormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DragonsRoutingModule {}
