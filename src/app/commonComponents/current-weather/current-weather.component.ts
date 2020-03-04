import { ICurrentConditionShort, ILocation } from '@interfaces/weather.interface';
import { Observable } from 'rxjs';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {

  @Input()
  condition: ICurrentConditionShort;

  @Input()
  location: ILocation;

  constructor() { }

  ngOnInit(): void {
  }

  // TODO Use local icons
  getIconLink(id) {
    id = (id<10)? '0'+id : id;
    return `http://developer.accuweather.com/sites/default/files/${id}-s.png`
  }

}
