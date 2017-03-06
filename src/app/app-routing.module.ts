import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingViewComponent } from './landing-view/landing-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { RegisterViewComponent } from './register-view/register-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { SearchViewComponent } from './search-view/search-view.component';
import { CreateViewComponent } from './create-view/create-view.component';
import { DashboardViewComponent } from './dashboard-view/dashboard-view.component';
import { DonateViewComponent } from './donate-view/donate-view.component';


const routes: Routes = [
  { path: '',  component: LandingViewComponent },
  { path: 'login',  component: LoginViewComponent },
  { path: 'register',  component: RegisterViewComponent },
  { path: 'project/:id',  component: ProjectViewComponent },
  { path: 'create', component: CreateViewComponent},
  { path: 'search', component: SearchViewComponent},
  { path: 'dashboard', component: DashboardViewComponent},
  { path: 'donate', component: DonateViewComponent},
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
