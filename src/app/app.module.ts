import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CurrentWeatherComponent } from './commonComponents/current-weather/current-weather.component';
import { OneDayWeatherComponent } from './commonComponents/one-day-weather/one-day-weather.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatIconModule } from '@angular/material/icon';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

import { AutocompleteComponent } from './commonComponents/autocomplete/autocomplete.component';

import { WeatherService } from './services/weather.service';
import { StorageService } from './services/storage.service';

import { environment } from './../environments/environment';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { reducers, metaReducers } from './store/reducers';
import { LocationEffects } from './store/effects/location.effects';
import { FavoriteCityComponent } from './commonComponents/favorite-city/favorite-city.component';

import { ToastrModule } from 'ngx-toastr';
import { GlobalErrorHandler } from './global-error-handler';


@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FavoriteComponent,
    NotFoundComponent,
    CurrentWeatherComponent,
    OneDayWeatherComponent,
    AutocompleteComponent,
    FavoriteCityComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    FlexLayoutModule,
    MatButtonToggleModule,
    MatIconModule,
    MatAutocompleteModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([LocationEffects])
  ],
  providers: [
    WeatherService,
    StorageService,
    { provide: 'API_KEY', useValue: environment.apiKey },
    { provide: ErrorHandler, useClass: GlobalErrorHandler },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
