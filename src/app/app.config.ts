import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration, withEventReplay } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import {registerLicense} from '@syncfusion/ej2-base';

registerLicense("Ngo9BigBOggjHTQxAR8/V1NMaF5cXmBCfEx3QHxbf1x1ZFxMZF9bQXVPIiBoS35Rc0ViWHlccXBWQ2VUUUV2")

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideClientHydration(), provideHttpClient(withFetch())]
};
