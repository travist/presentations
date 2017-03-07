import {Component} from '@angular/core';
import { Router } from '@angular/router';
import { FormioAuthService } from 'ng2-formio/auth';

@Component({
  selector: 'fountain-app',
  template: require('./main.html')
})
export class MainComponent {
  constructor(private auth: FormioAuthService, private router: Router) {
    this.auth.onLogin.subscribe(() => {
      this.router.navigate(['/']);
    });

    this.auth.onLogout.subscribe(() => {
      this.router.navigate(['/']);
    });

    this.auth.onRegister.subscribe(() => {
      this.router.navigate(['/']);
    });
  }
}
