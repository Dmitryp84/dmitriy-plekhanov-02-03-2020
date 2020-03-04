import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { State } from '../../store/reducers/index';
import { DelFavorite, SetLocation } from './../../store/actions/location.actions';
import { WeatherService } from './../../services/weather.service';
import { ILocation, ICurrentConditionShort } from '@interfaces/weather.interface';
import { selectFavorites} from './../../store/selectors/location.selector';
import { Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-favorite',
  templateUrl: './favorite.component.html',
  styleUrls: ['./favorite.component.scss']
})
export class FavoriteComponent implements OnInit {

  constructor(private store: Store<State>,
    private weatherService: WeatherService,
    private router: Router) { }

  favorites$: Observable<ILocation[]>;

  private unSubscribe: Subject<void> = new Subject<void>()

  ngOnInit(): void {
    this.favorites$ = this.store.pipe(
      select(selectFavorites),
      map(data => { if(data) return Object.values(data); return [] })
      );
  }

  getCurrentCondition(loc: ILocation): Observable<ICurrentConditionShort> {
    return this.weatherService.getCurrent(loc.Key);
  }

  setLocation(e) {
    this.store.dispatch(new SetLocation(e));
    this.router.navigate(['/']);
  }

  delFavorite(e) {
    this.store.dispatch(new DelFavorite(e));
  }

  public ngOnDestroy(): void {
    this.unSubscribe.next();
    this.unSubscribe.complete();
  }

}
