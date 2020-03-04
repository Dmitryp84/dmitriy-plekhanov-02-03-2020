import { WeatherService } from './../../services/weather.service';
import { switchMap } from 'rxjs/operators';
import { ICurrentConditionShort, IForecastShort, ILocation } from '@interfaces/weather.interface';
import { selectSelectedLocation, selectFavorites} from './../../store/selectors/location.selector';
import { DelFavorite, AddFavorite, SetLocation } from './../../store/actions/location.actions';
import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../store/reducers/index';
import { Observable, of, combineLatest, Subject } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  currentCondition$: Observable<ICurrentConditionShort>;
  currentLocation$: Observable<ILocation>;
  fiveDayForecast$: Observable<IForecastShort>;
  isFavorite$: Observable<boolean>;

  constructor(private store: Store<State>,
              private weatherService: WeatherService) { }

  ngOnInit(): void {
    this.currentLocation$ = this.store.pipe(select(selectSelectedLocation));

    this.currentCondition$ = this.currentLocation$.pipe(
      switchMap((location) => this.weatherService.getCurrent(location.Key))
    );

    this.fiveDayForecast$ = this.currentLocation$.pipe(
      switchMap((location) => this.weatherService.getForecasts(location.Key))
    );
    
    this.isFavorite$ = combineLatest(this.currentLocation$, this.store.pipe(select(selectFavorites))).pipe(
      switchMap(([location, favorites]) => {
        if (favorites && favorites.hasOwnProperty(location.Key)) {
          return of(true);
        }
        return of(false);
      }),
    )
  }

  onSelect(e) {
    this.store.dispatch(new SetLocation(e));
  }

  addFavorite(e) {
    this.store.dispatch(new AddFavorite(e));
  }

  delFavorite(e) {
    this.store.dispatch(new DelFavorite(e));
  }
}
