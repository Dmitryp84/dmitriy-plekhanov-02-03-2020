import { ILocation, ICurrentConditionShort, IForecastShort } from '@interfaces/weather.interface';
import { Observable, of } from 'rxjs';
import { Injectable, Inject } from '@angular/core';
import { HttpClient ,HttpHeaders } from '@angular/common/http';
import { map, shareReplay } from 'rxjs/operators';

@Injectable()
export class WeatherService {

locations: ILocation[] = [{"Version":1,"Key":"308406","Type":"City","Rank":20,"LocalizedName":"Khartoum","Country":{"ID":"SD","LocalizedName":"Sudan"},"AdministrativeArea":{"ID":"KH","LocalizedName":"Khartoum"}},{"Version":1,"Key":"323903","Type":"City","Rank":21,"LocalizedName":"Kharkiv","Country":{"ID":"UA","LocalizedName":"Ukraine"},"AdministrativeArea":{"ID":"63","LocalizedName":"Kharkiv"}},{"Version":1,"Key":"2773473","Type":"City","Rank":45,"LocalizedName":"Kharghar","Country":{"ID":"IN","LocalizedName":"India"},"AdministrativeArea":{"ID":"MH","LocalizedName":"Maharashtra"}},{"Version":1,"Key":"189101","Type":"City","Rank":45,"LocalizedName":"Khargone","Country":{"ID":"IN","LocalizedName":"India"},"AdministrativeArea":{"ID":"MP","LocalizedName":"Madhya Pradesh"}},{"Version":1,"Key":"191582","Type":"City","Rank":45,"LocalizedName":"Kharagpur","Country":{"ID":"IN","LocalizedName":"India"},"AdministrativeArea":{"ID":"WB","LocalizedName":"West Bengal"}},{"Version":1,"Key":"2879567","Type":"City","Rank":45,"LocalizedName":"Kharagpur Railway Settlement","Country":{"ID":"IN","LocalizedName":"India"},"AdministrativeArea":{"ID":"WB","LocalizedName":"West Bengal"}},{"Version":1,"Key":"191530","Type":"City","Rank":45,"LocalizedName":"Khardaha","Country":{"ID":"IN","LocalizedName":"India"},"AdministrativeArea":{"ID":"WB","LocalizedName":"West Bengal"}},{"Version":1,"Key":"187303","Type":"City","Rank":55,"LocalizedName":"Kharagpur","Country":{"ID":"IN","LocalizedName":"India"},"AdministrativeArea":{"ID":"BR","LocalizedName":"Bihar"}},{"Version":1,"Key":"190121","Type":"City","Rank":55,"LocalizedName":"Kharar","Country":{"ID":"IN","LocalizedName":"India"},"AdministrativeArea":{"ID":"PB","LocalizedName":"Punjab"}},{"Version":1,"Key":"257209","Type":"City","Rank":55,"LocalizedName":"Kharan","Country":{"ID":"PK","LocalizedName":"Pakistan"},"AdministrativeArea":{"ID":"BA","LocalizedName":"Balochistan"}}];
currentWeather: ICurrentConditionShort[] = [
    {
      "LocalObservationDateTime": "2020-03-02T18:26:00+02:00",
      "EpochTime": 1583166360,
      "WeatherText": "Clear",
      "WeatherIcon": 33,
      "HasPrecipitation": false,
      "PrecipitationType": null,
      "IsDayTime": false,
      "Temperature": {
        "Metric": {
          "Value": 7.2,
          "Unit": "C",
          "UnitType": 17
        },
        "Imperial": {
          "Value": 45,
          "Unit": "F",
          "UnitType": 18
        }
      },
      "MobileLink": "http://m.accuweather.com/en/ua/kharkiv/323903/current-weather/323903?lang=en-us",
      "Link": "http://www.accuweather.com/en/ua/kharkiv/323903/current-weather/323903?lang=en-us"
    }
  ];
forecast: IForecastShort = {
    "Headline": {
      "EffectiveDate": "2020-03-02T19:00:00+02:00",
      "EffectiveEpochDate": 1583168400,
      "Severity": 5,
      "Text": "Expect showers Monday night",
      "Category": "rain",
      "EndDate": "2020-03-03T07:00:00+02:00",
      "EndEpochDate": 1583211600,
      "MobileLink": "http://m.accuweather.com/en/ua/kharkiv/323903/extended-weather-forecast/323903?lang=en-us",
      "Link": "http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?lang=en-us"
    },
    "DailyForecasts": [
      {
        "Date": "2020-03-02T07:00:00+02:00",
        "EpochDate": 1583125200,
        "Temperature": {
          "Minimum": {
            "Value": 39,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 48,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 6,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 12,
          "IconPhrase": "Showers",
          "HasPrecipitation": true,
          "PrecipitationType": "Rain",
          "PrecipitationIntensity": "Light"
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=1&lang=en-us",
        "Link": "http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=1&lang=en-us"
      },
      {
        "Date": "2020-03-03T07:00:00+02:00",
        "EpochDate": 1583211600,
        "Temperature": {
          "Minimum": {
            "Value": 40,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 50,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 6,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 36,
          "IconPhrase": "Intermittent clouds",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=2&lang=en-us",
        "Link": "http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=2&lang=en-us"
      },
      {
        "Date": "2020-03-04T07:00:00+02:00",
        "EpochDate": 1583298000,
        "Temperature": {
          "Minimum": {
            "Value": 44,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 61,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 4,
          "IconPhrase": "Intermittent clouds",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 36,
          "IconPhrase": "Intermittent clouds",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=3&lang=en-us",
        "Link": "http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=3&lang=en-us"
      },
      {
        "Date": "2020-03-05T07:00:00+02:00",
        "EpochDate": 1583384400,
        "Temperature": {
          "Minimum": {
            "Value": 46,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 63,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 7,
          "IconPhrase": "Cloudy",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 7,
          "IconPhrase": "Cloudy",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=4&lang=en-us",
        "Link": "http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=4&lang=en-us"
      },
      {
        "Date": "2020-03-06T07:00:00+02:00",
        "EpochDate": 1583470800,
        "Temperature": {
          "Minimum": {
            "Value": 44,
            "Unit": "F",
            "UnitType": 18
          },
          "Maximum": {
            "Value": 57,
            "Unit": "F",
            "UnitType": 18
          }
        },
        "Day": {
          "Icon": 6,
          "IconPhrase": "Mostly cloudy",
          "HasPrecipitation": false
        },
        "Night": {
          "Icon": 36,
          "IconPhrase": "Intermittent clouds",
          "HasPrecipitation": false
        },
        "Sources": [
          "AccuWeather"
        ],
        "MobileLink": "http://m.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=5&lang=en-us",
        "Link": "http://www.accuweather.com/en/ua/kharkiv/323903/daily-weather-forecast/323903?day=5&lang=en-us"
      }
    ]
  };

private baseUrl = 'http://dataservice.accuweather.com';

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