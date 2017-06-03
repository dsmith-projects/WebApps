import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { ApiModuleComponent } from './api-module/api-module.component';
import { ResultModuleComponent } from './result-module/result-module.component';

@NgModule({
  declarations: [
    AppComponent,
    ApiModuleComponent,
    ResultModuleComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
