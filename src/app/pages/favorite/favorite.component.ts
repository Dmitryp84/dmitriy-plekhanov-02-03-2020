import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../store/reducers/index';
import { DelFavorite, AddFavorite, SetLocation } from './../../store/actions/location.actions';
import { WeatherService } from './../../services/weather.service';
import { ILocation, ICurrentConditionShort } from '@interfaces/weather.interface';
import { selectSelectedLocation, selectFavorites} from './../../store/selectors/location.selector';
import { Observable, of, combineLatest } from 'rxjs';
import { map } from 'rxjs/operators';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor(private store: Store<State>,
    private weatherService: WeatherService) { }

  favorites$: Observable<ILocation[]>;

  ngOnInit(): void {
    this.favorites$ = this.store.pipe(
      select(selectFavorites),
      map(data => Object.values(data))
      );
  }

  getCurrentCondition(loc: ILocation): Observable<ICurrentConditionShort> {
    return this.weatherService.getCurrent(loc.Key);
  }

  setLocation(e) {
    this.store.dispatch(new SetLocation(e));
  }

  delFavorite(e) {
    this.store.dispatch(new DelFavorite(e));
  }

}
