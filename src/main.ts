import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { AppComponent } from './app/app.component';
import { appConfig } from './app/app.config';
import { importProvidersFrom } from '@angular/core';
import {
  LucideAngularModule,
  Phone,
  Mail,
  MapPin,
  Info,
  Building,
  Clock,
} from 'lucide-angular';

bootstrapApplication(AppComponent, {
  ...appConfig,
  providers: [
    ...(appConfig.providers || []),
    provideHttpClient(withFetch()),
    importProvidersFrom(
      LucideAngularModule.pick({ Phone, Mail, MapPin, Info, Building, Clock })
    ),
  ],
}).catch((err) => console.error(err));
