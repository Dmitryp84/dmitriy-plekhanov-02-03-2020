import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import { ILocation, ICurrentConditionShort } from '@interfaces/weather.interface';

@Component({
  selector: 'app-favorite-city',
  templateUrl: './favorite-city.component.html',
  styleUrls: ['./favorite-city.component.scss']
})
export class FavoriteCityComponent implements OnInit {

  @Input()
  location: ILocation;

  @Input()
  currentCondition: ICurrentConditionShort;

  @Output()
  delete: EventEmitter<ILocation> = new EventEmitter();

  @Output()
  select: EventEmitter<ILocation> = new EventEmitter();

  constructor(private router: Router) { }

  ngOnInit(): void { }

  onSelect() {
    this.select.emit(this.location);
    this.router.navigate(['/']);
  }

  onDelete() {
    this.delete.emit(this.location);
  }
  
}
