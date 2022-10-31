import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {Child1Component} from "../child1/child1.component";
import {Child2Component} from "../child1/child2/child2.component";
import {Child3Component} from "../child3/child3.component";
import {Child4Component} from "../child3/child4/child4.component";
import {ChildWrapperComponent} from "../child-wrapper/child-wrapper.component";

@NgModule({
  declarations: [
    AppComponent,
    Child1Component,
    Child2Component,
    Child3Component,
    Child4Component,
    ChildWrapperComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  exports: [
    ChildWrapperComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
