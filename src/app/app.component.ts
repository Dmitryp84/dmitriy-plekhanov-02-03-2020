import { Component, OnInit } from '@angular/core';
import { Store} from '@ngrx/store';
import { State } from './store/reducers/index';
import { SetDefaultLocation, FetchFavorite } from './store/actions/location.actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'sevenpro';

  constructor(private store: Store<State>) { }

  ngOnInit() {
    this.store.dispatch(new SetDefaultLocation());
    this.store.dispatch(new FetchFavorite());
  }
}
