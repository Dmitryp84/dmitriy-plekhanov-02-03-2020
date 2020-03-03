import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable} from 'rxjs';
import { 
  filter,
  debounceTime,
  distinctUntilChanged,
  startWith,
  switchMap,
 } from 'rxjs/operators';
 import { WeatherService } from './../../services/weather.service';
 import { ILocation } from '@interfaces/weather.interface';

@Component({
  selector: 'app-autocomplete',
  templateUrl: './autocomplete.component.html',
  styleUrls: ['./autocomplete.component.scss']
})
export class AutocompleteComponent implements OnInit {
 
  @Output()
  onSelect: EventEmitter<ILocation> = new EventEmitter(); 

  items: Observable<ILocation[]>;
  inputControl = new FormControl();

  constructor(private weatherService: WeatherService) {
    this.items = this.inputControl.valueChanges.pipe(
      startWith(''),
      filter( (s) => (s.length > 2)),
      debounceTime(800),
      distinctUntilChanged(),
      switchMap((s: string) => {
        return this.weatherService.getLocations(s)
        }
      )
    )
  }

  ngOnInit(): void {
  }

  displayFn(item: ILocation) {
    if (item) { return item.LocalizedName; }
  }

}
