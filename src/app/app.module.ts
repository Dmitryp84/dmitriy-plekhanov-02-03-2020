import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { FavoriteComponent } from './pages/favorite/favorite.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CurrentWeatherComponent } from './commonComponents/current-weather/current-weather.component';
import { OneDayWeatherComponent } from './commonComponents/one-day-weather/one-day-weather.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FavoriteComponent,
    NotFoundComponent,
    CurrentWeatherComponent,
    OneDayWeatherComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
