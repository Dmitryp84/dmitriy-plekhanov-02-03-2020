import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { AutocompleteComponent } from './commonComponents/autocomplete/autocomplete.component';

import { WeatherService } from './services/weather.service';

import { environment } from './../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FavoriteComponent,
    NotFoundComponent,
    CurrentWeatherComponent,
    OneDayWeatherComponent,
    AutocompleteComponent
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
    HttpClientModule
  ],
  providers: [
    WeatherService,
    { provide: 'API_KEY', useValue: environment.apiKey }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
