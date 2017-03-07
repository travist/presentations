import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormioAuth, FormioAuthRoutes } from 'ng2-formio/auth';
@NgModule({
  imports: [
    FormioAuth,
    RouterModule.forChild(FormioAuthRoutes())
  ]
})
export class AuthModule {}
