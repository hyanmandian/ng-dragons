import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthService } from "./services/auth/auth.service";

@NgModule({
  imports: [CommonModule],
  providers: [AuthService],
  declarations: []
})
export class CoreModule {}
