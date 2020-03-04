import { ILocationState, initialLocationState, locationReducers } from './location.reducer';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';


export interface State {
  locations: ILocationState
}

export const reducers: ActionReducerMap<State> = {
  locations: locationReducers
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
