import {
  ApplicationConfig,
  importProvidersFrom,
  isDevMode,
  provideAppInitializer,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';
import { initDB } from './core/services/database/database.service';
import { provideFastSVG } from '@push-based/ngx-fast-svg';
import { NgApexchartsModule } from 'ng-apexcharts';
import { provideServiceWorker } from '@angular/service-worker';

const iconPathPrefix = isDevMode() ? '' : '/turtle-track';

export const appConfig: ApplicationConfig = {
  providers: [
    provideExperimentalZonelessChangeDetection(),
    provideRouter(appRoutes),
    provideFastSVG({ url: (name) => `${iconPathPrefix}/icons/${name}.svg` }),
    provideAppInitializer(() => initDB()),
    importProvidersFrom(NgApexchartsModule),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000',
    }),
  ],
};
