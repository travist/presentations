import { Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home';

@Component({
  template: '<div class="row"><div class="col-md-6 col-md-offset-3"><router-outlet></router-outlet></div></div>'
})
export class AuthContainerComponent {}

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'auth',
    component: AuthContainerComponent,
    loadChildren: 'es6-promise-loader?,[name]!./auth.module#AuthModule'
  },
  {
    path: 'event',
    loadChildren: 'es6-promise-loader?,[name]!./event.module#EventResource'
  }
];
export const routing = RouterModule.forRoot(routes);
