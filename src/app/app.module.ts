import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './common/auth.guard';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { LandingViewComponent } from './landing-view/landing-view.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    LandingViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
  ],
  providers: [ AuthGuard, ...AUTH_PROVIDERS],
  bootstrap: [AppComponent]
})
export class AppModule { }
