import { ApplicationConfig, } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions
} from '@angular/router';

import { routes } from './app.routes';
import {
  firebaseProviders,
  ScreenTrackingService,
  UserTrackingService
} from './firebase.config';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withViewTransitions(), withComponentInputBinding()),
    firebaseProviders,
    ScreenTrackingService,
    UserTrackingService
  ],
};
