import {Component} from '@angular/core';
import { FormioAuthService } from 'ng2-formio/auth';

@Component({
  selector: 'fountain-header',
  template: require('./header.html')
})
export class HeaderComponent {
  constructor(private auth: FormioAuthService) {}
}
