import { importProvidersFrom } from '@angular/core';
import { AppComponent } from './app/app.component';
import { withInterceptorsFromDi, provideHttpClient } from '@angular/common/http';
import { MatToolbarModule } from '@angular/material/toolbar';
import { provideAnimations } from '@angular/platform-browser/animations';
import { BrowserModule, bootstrapApplication } from '@angular/platform-browser';
import { APP_ROUTES } from './app/app.route';
import { PreloadAllModules, provideRouter, withPreloading } from '@angular/router';


bootstrapApplication(AppComponent, {
    providers: [
        importProvidersFrom(BrowserModule, MatToolbarModule),
        provideAnimations(),
        provideHttpClient(withInterceptorsFromDi()),
        provideRouter(APP_ROUTES, withPreloading(PreloadAllModules))
    ]
})
  .catch(err => console.error(err));
