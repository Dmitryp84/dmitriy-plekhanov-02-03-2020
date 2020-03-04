import { IDayForecast } from './../../interfaces/weather.interface';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-one-day-weather',
  templateUrl: './one-day-weather.component.html',
  styleUrls: ['./one-day-weather.component.scss']
})
export class OneDayWeatherComponent implements OnInit {

  @Input()
  forecast: IDayForecast;

  constructor() { }

  ngOnInit(): void {
  }

  getWeekDay(date) {
    date = new Date(date);
    const weekdays = new Array(
      "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"
    );
    
    return weekdays[date.getDay()];
  }

  // TODO Use local icons
  getIconLink(id) {
    id = (id<10)? '0'+id : id;
    return `http://developer.accuweather.com/sites/default/files/${id}-s.png`
  }
}
