import { ApplicationConfig, importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './service/in-memory-data.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

export const appConfig: ApplicationConfig = {
  providers: [
     provideRouter(routes),
     provideClientHydration(),
     importProvidersFrom(BrowserAnimationsModule),
     provideHttpClient(), //withFetch()
     importProvidersFrom([HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService)
  ])
]
};
