import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AuthModule } from "./auth/auth.module";
import { DragonsModule } from "./dragons/dragons.module";
import { NotFoundModule } from "./not-found/not-found.module";
import { CoreModule } from './core/core.module';
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";

@NgModule({
  imports: [
    CoreModule,
    DragonsModule,
    AuthModule,
    BrowserModule,
    AppRoutingModule,
    NotFoundModule,
  ],
  bootstrap: [AppComponent],
  declarations: [AppComponent]
})
export class AppModule {}
