import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebComponent } from './web/web.component';
import {PagesComponent} from './pages/pages.component'
import {Error404Component} from './notfound/error404/error404.component'
import {NotfoundComponent} from './notfound/notfound.component'
import {LoginComponent} from './auth/login/login.component'
import { RegisterComponent } from './auth/register/register.component';
import {HomeComponent} from './web/home/home.component'


@NgModule({
  declarations: [
    AppComponent,
    WebComponent,
    PagesComponent,
    NotfoundComponent,
    Error404Component,
    RegisterComponent,
    LoginComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
