import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingViewComponent } from './landing-view/landing-view.component';
import { LoginViewComponent } from './login-view/login-view.component';


const routes: Routes = [
  { path: '',  component: LandingViewComponent },
  { path: 'login',  component: LoginViewComponent },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
