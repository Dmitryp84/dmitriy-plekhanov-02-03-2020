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

}
