import { ILocation } from '@interfaces/weather.interface';

export interface ILocationEntities {
    [key: string] : ILocation;
  }

export interface IWeatherState {
    favorite: ILocationEntities,
    selectedLocation: ILocation
}
  
export const initialWeatherState: IWeatherState = {
    favorite: null,
    selectedLocation: null
};