import 'hammerjs';

import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppRoutingModule } from './app-routing.module';
import { MaterialModule } from '@angular/material';

//import { AUTH_PROVIDERS } from 'angular2-jwt';
import { AuthGuard } from './common/auth.guard';

import { AppComponent } from './app.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { LandingViewComponent } from './landing-view/landing-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { ProjectCardComponent } from './project-card/project-card.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginViewComponent,
    LandingViewComponent,
    ProjectViewComponent,
    SearchViewComponent,
    ProjectCardComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    MaterialModule.forRoot(),
  ],
  providers: [ AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
