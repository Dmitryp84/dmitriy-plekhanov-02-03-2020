import { ILocation, ILocationEntities } from '@interfaces/weather.interface';
import { Action } from '@ngrx/store';

export enum ELocationActions {
  FetchFavorite = '[Location] Fetch favorite location',
  FetchFavoriteSuccess = '[Location] Fetch favorite Success',
  AddFavorite = '[Location] Add favorite location',
  AddFavoriteSuccess = '[Location] Add favorite Success',
  DelFavorite = '[Location] Del favorite location',
  DelFavoriteSuccess = '[Location] Del favorite Success',
  SetLocation = '[Location] Set location',
  SetDefaultLocation =  '[Location] Default location'
}

export class AddFavorite implements Action {
  public readonly type = ELocationActions.AddFavorite;
  constructor(public payload: ILocation) {}
}
export class AddFavoriteSuccess implements Action {
  public readonly type = ELocationActions.AddFavoriteSuccess;
  constructor(public payload: ILocationEntities) {}
}

export class FetchFavorite implements Action {
  public readonly type = ELocationActions.FetchFavorite;
}

export class FetchFavoriteSuccess implements Action {
  public readonly type = ELocationActions.FetchFavoriteSuccess;
  constructor(public payload: ILocationEntities) {}
}

export class DelFavorite implements Action {
  public readonly type = ELocationActions.DelFavorite;
  constructor(public payload: ILocation) {}
}

export class DelFavoriteSuccess implements Action {
  public readonly type = ELocationActions.DelFavoriteSuccess;
  constructor(public payload: ILocationEntities) {}
}

export class SetLocation implements Action {
  public readonly type = ELocationActions.SetLocation;
  constructor(public payload: ILocation) {}
}

export class SetDefaultLocation implements Action {
  public readonly type = ELocationActions.SetDefaultLocation;
}

export type LocationActions = 
    AddFavorite |
    AddFavoriteSuccess | 
    DelFavorite |
    DelFavoriteSuccess |
    FetchFavorite |
    FetchFavoriteSuccess |
    SetLocation |
    SetDefaultLocation;