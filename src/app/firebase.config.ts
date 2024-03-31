import { importProvidersFrom } from '@angular/core';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
  UserTrackingService,
} from '@angular/fire/analytics';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { EnvironmentProviders } from '@angular/core';
import { environment } from '../environments/environment';

const firebaseProviders: EnvironmentProviders = importProvidersFrom(
    provideFirebaseApp(() =>
      initializeApp(environment.firebase)
    ),
    provideAuth(() => getAuth()),
    provideAnalytics(() => getAnalytics()),
    provideFirestore(() => getFirestore())
)

export { firebaseProviders, ScreenTrackingService, UserTrackingService }
