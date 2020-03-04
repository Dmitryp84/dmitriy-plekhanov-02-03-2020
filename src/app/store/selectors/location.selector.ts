import { ILocationState } from './../reducers/location.reducer';
import { State } from '../reducers/index';
import { createSelector } from '@ngrx/store';

const selectLocations = (state: State) => state.locations;

export const selectFavorites = createSelector(
    selectLocations,
    (state: ILocationState) => state.favorite 
);

export const selectSelectedLocation = createSelector(
    selectLocations,
    (state: ILocationState) => state.selectedLocation 
)