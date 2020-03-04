import { LocationActions, ELocationActions } from './../actions/location.actions';
import { ILocation, ILocationEntities } from '@interfaces/weather.interface';

export interface ILocationState {
    favorite: ILocationEntities,
    selectedLocation: ILocation
}
  
export const initialLocationState: ILocationState = {
    favorite: null,
    selectedLocation: null
};

export const locationReducers = (
    state = initialLocationState,
    action: LocationActions
  ): ILocationState => {
    switch (action.type) {
      case ELocationActions.SetLocation: {
        return {
          ...state,
          selectedLocation: action.payload
        };
      }
      case ELocationActions.FetchFavoriteSuccess: {
        return {
            ...state,
            favorite: action.payload
          };
      }
      case ELocationActions.AddFavoriteSuccess: {
        return {
            ...state,
            favorite: action.payload
          };
      }
      case ELocationActions.DelFavoriteSuccess: {
        return {
            ...state,
            favorite: action.payload
          };
      }
  
      default:
        return state;
    }
  };