import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LandingViewComponent } from './landing-view/landing-view.component';
import { LoginViewComponent } from './login-view/login-view.component';
import { ProjectViewComponent } from './project-view/project-view.component';
import { SearchViewComponent } from './search-view/search-view.component';


const routes: Routes = [
  { path: '',  component: LandingViewComponent },
  { path: 'login',  component: LoginViewComponent },
  { path: 'project',  component: ProjectViewComponent },
  { path: 'search', component: SearchViewComponent},

];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
