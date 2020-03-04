import { ILocation, ICurrentConditionShort, IForecastShort } from '@interfaces/weather.interface';
import { Observable, of } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';

@Injectable()
export class WeatherService {

private baseUrl = 'https://dataservice.accuweather.com';

constructor(private http: HttpClient,
    @Inject('API_KEY') private apiKey: string) { }

  getLocations(searchSting: string): Observable<ILocation[]> {
    const url = `${this.baseUrl}/locations/v1/cities/autocomplete?apikey=${this.apiKey}&q=${searchSting}`;
    return this.http.get<ILocation[]>(url).pipe();
  }

  getCurrent(key: string) : Observable<ICurrentConditionShort> {
    const url = `${this.baseUrl}/currentconditions/v1/${key}?apikey=${this.apiKey}`;
    return this.http.get<ICurrentConditionShort[]>(url).pipe(map(date => date[0]));
  }

  getForecasts(key: string) : Observable<IForecastShort> {
    const url = `${this.baseUrl}/forecasts/v1/daily/5day/${key}?apikey=${this.apiKey}`;
    return this.http.get<IForecastShort>(url);
  }

}