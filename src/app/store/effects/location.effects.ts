import { Injectable } from '@angular/core';
import { Effect, ofType, Actions } from '@ngrx/effects';
import { switchMap, map, withLatestFrom } from 'rxjs/operators';
import { of } from 'rxjs';
import { ILocationEntities } from '@interfaces/weather.interface';
import { StorageService } from './../../services/storage.service';
import { Store, select } from '@ngrx/store';
import { State } from '../reducers/index';
import { 
    ELocationActions, 
    AddFavorite, 
    AddFavoriteSuccess,
    FetchFavorite,
    FetchFavoriteSuccess,
    DelFavorite,
    SetDefaultLocation,
    SetLocation } from './../actions/location.actions';
import {selectFavorites} from '../selectors/location.selector';

    @Injectable()
    export class LocationEffects {
        @Effect()
        addFavorite$ = this.actions$.pipe(
            ofType<AddFavorite>(ELocationActions.AddFavorite),
            map(action => action.payload),
            withLatestFrom(this.store.pipe(select(selectFavorites))),
            switchMap( ([location, favorites]) => {
                console.log('favorite');
                favorites = Object.assign({}, favorites, {[location.Key]: location})
                if(this.storageService.set('favorites', favorites))
                    return of (new AddFavoriteSuccess(favorites))
            }),
           
        );

        @Effect()
        delFavorite$ = this.actions$.pipe(
            ofType<DelFavorite>(ELocationActions.DelFavorite),
            map(action => action.payload),
            withLatestFrom(this.store.pipe(select(selectFavorites))),
            switchMap( ([location, favorites]) => {
                const { [location.Key]: value, ...newFavorites } = favorites;
                if(this.storageService.set('favorites', newFavorites))
                    return of (new AddFavoriteSuccess(newFavorites))
            }),
        );

        @Effect()
        fetchFavorite$ = this.actions$.pipe(
            ofType<FetchFavorite>(ELocationActions.FetchFavorite),
            switchMap( () => {
                return of (new FetchFavoriteSuccess(
                    this.storageService.get<ILocationEntities>('favorites')
                    ))
            }),
           
        );
    
        @Effect()
        setDefaultLocation$ = this.actions$.pipe(
            ofType<SetDefaultLocation>(ELocationActions.SetDefaultLocation),
            switchMap( () => {
                return of (new SetLocation({
                    Version: 1,
                    Key: "323903",
                    Type: "City",
                    Rank: 21,
                    LocalizedName: "Kharkiv",
                    Country: {
                      ID: "UA",
                      LocalizedName: "Ukraine"
                    },
                    AdministrativeArea: {
                      ID: "63",
                      LocalizedName: "Kharkiv"
                    }
                  }))
            })
        );

        constructor (
            private storageService: StorageService,
            private actions$: Actions,
            private store: Store<State>
        ) {}

    }