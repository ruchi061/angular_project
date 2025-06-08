import { ApplicationConfig, provideZoneChangeDetection, isDevMode } from '@angular/core';
import { provideRouter, withComponentInputBinding } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideAnimations } from '@angular/platform-browser/animations';
import { provideStore } from '@ngrx/store';
import { provideStoreDevtools } from '@ngrx/store-devtools';
// import { DisasterEffects } from './store/effects/disaster.effect';
import { provideEffects } from '@ngrx/effects';
import { AppState } from './store/reducers/app.state';
import { disasterReducer } from './store/reducers/disaster.reducer';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withComponentInputBinding()),
    provideHttpClient(), provideAnimationsAsync(), provideAnimationsAsync(),
    provideAnimations(),
    provideStore<AppState>({ disasters: disasterReducer }),
    // provideEffects([DisasterEffects]),
    provideStoreDevtools({ maxAge: 25, logOnly: !isDevMode() })]
};
