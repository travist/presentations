import { FormioAppConfig } from 'ng2-formio';
import { FormioAuthConfig } from 'ng2-formio/auth';

export const AppConfig: FormioAppConfig = {
  appUrl: 'https://example.form.io',
  apiUrl: 'https://api.form.io'
};

export const AuthConfig: FormioAuthConfig = {
  app: AppConfig,
  login: {
    form: 'user/login'
  },
  register: {
    form: 'user/register'
  }
};
