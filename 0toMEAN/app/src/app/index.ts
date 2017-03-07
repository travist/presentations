import {NgModule, Component} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import { FormioAuthService, FormioAuthConfig } from 'ng2-formio/auth';
import { AuthConfig } from './config';

import { routing, AuthContainerComponent } from './routes';

import {MainComponent} from './main';
import {HomeComponent} from './home';
import {HeaderComponent} from './header';
import {TitleComponent} from './title';
import {FooterComponent} from './footer';

@NgModule({
  imports: [
    BrowserModule,
    routing
  ],
  declarations: [
    HomeComponent,
    MainComponent,
    HeaderComponent,
    TitleComponent,
    FooterComponent,
    AuthContainerComponent
  ],
  bootstrap: [MainComponent],
  providers: [
    FormioAuthService,
    {provide: FormioAuthConfig, useValue: AuthConfig}
  ]
})
export class AppModule {}
