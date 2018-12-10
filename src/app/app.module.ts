import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { CoreModule } from "./core/core.module";
import { AuthModule } from "./auth/auth.module";
import { AppComponent } from "./app.component";
import { DragonsModule } from "./dragons/dragons.module";
import { NotFoundModule } from "./not-found/not-found.module";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    AppRoutingModule,
    DragonsModule,
    AuthModule,
    NotFoundModule
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {}
