import { NgModule, Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormioResource, FormioResourceRoutes, FormioResourceConfig, FormioResourceService, FormioResourceViewComponent } from 'ng2-formio/resource';
import { AppConfig } from './config';

@Component({
  template: require('./event.html')
})
export class EventViewComponent extends FormioResourceViewComponent {
  constructor(service: FormioResourceService) {
    super(service);
  }
}

@NgModule({
  imports: [
    FormioResource,
    RouterModule.forChild(FormioResourceRoutes({
      view: EventViewComponent
    }))
  ],
  providers: [
    FormioResourceService,
    {provide: FormioResourceConfig, useValue: {
      app: AppConfig,
      name: 'event',
      form: 'event'
    }}
  ],
  declarations: [
    EventViewComponent
  ]
})
export class EventResource {}
