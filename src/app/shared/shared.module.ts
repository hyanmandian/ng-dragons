import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ButtonComponent } from "./button/button.component";
import { InputComponent } from './input/input.component';

@NgModule({
  imports: [CommonModule],
  exports: [ButtonComponent, InputComponent],
  declarations: [ButtonComponent, InputComponent]
})
export class SharedModule {}
