import { takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { Component, OnInit, Input, Output, EventEmitter, OnDestroy } from '@angular/core';
import { ILocation, ICurrentConditionShort } from '@interfaces/weather.interface';
import { WeatherService } from './../../services/weather.service';

@Component({
  selector: 'app-favorite-city',
  templateUrl: './favorite-city.component.html',
  styleUrls: ['./favorite-city.component.scss']
})
export class FavoriteCityComponent implements OnInit, OnDestroy {

  @Input()
  location: ILocation;

  @Output()
  delete: EventEmitter<ILocation> = new EventEmitter();

  @Output()
  select: EventEmitter<ILocation> = new EventEmitter();

  public condition: ICurrentConditionShort;
  private unSubscribe: Subject<void> = new Subject<void>()

  constructor(private weatherService: WeatherService) { }

  ngOnInit(): void { 
    this.weatherService.getCurrent(this.location.Key).pipe(takeUntil(this.unSubscribe)).subscribe(data => this.condition = data);
  }

  onSelect() {
    this.select.emit(this.location);
  }

  onDelete() {
    this.delete.emit(this.location);
  }
    
  // TODO Use local icons
  getIconLink(id) {
    id = (id<10)? '0'+id : id;
    return `http://developer.accuweather.com/sites/default/files/${id}-s.png`
  }

  public ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }
}
