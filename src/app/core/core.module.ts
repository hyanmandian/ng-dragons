import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { AuthService } from "./services/auth/auth.service";
import { DragonService } from './services/dragon/dragon.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [CommonModule, HttpClientModule],
  providers: [AuthService, DragonService],
  declarations: []
})
export class CoreModule {}
