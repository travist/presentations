import { FormioAppConfig } from 'ng2-formio';
import { FormioAuthConfig } from 'ng2-formio/auth';

export const AppConfig: FormioAppConfig = {
  appUrl: 'http://localhost:3001',
  apiUrl: 'http://localhost:3001'
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
