import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { InMemoryWebApiModule } from "angular-in-memory-web-api";
import { DataBase } from "./data-base";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    InMemoryWebApiModule.forRoot(DataBase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
