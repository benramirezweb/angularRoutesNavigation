import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MenuComponent } from './menu.component';
import { MainComponent } from './main.component';
import { Pg1Component } from './pages/pg1.component';
import { Pg2Component } from './pages/pg2.component';

import { RouterModule, Routes } from '@angular/router';
import { FeatureRoutingModule } from './app.routes';
import { Pg3Component } from './pages/pg3.component';
import { Pg4Component } from './pages/pg4.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    MainComponent,
    Pg1Component,
    Pg2Component,
    Pg3Component,
    Pg4Component
  ],
  imports: [
    BrowserModule,
    FeatureRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
