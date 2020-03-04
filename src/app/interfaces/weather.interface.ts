export interface ICountry {
    ID: string,
    LocalizedName: string
}

export interface IAdministrativeArea {
    ID: string,
    LocalizedName: string
}

export interface ILocation {
    Version: number,
    Key: string,
    Type: string,
    Rank: number,
    LocalizedName: string,
    Country: ICountry,
    AdministrativeArea: IAdministrativeArea
}

export interface IDataObj {
    Value: number,
    Unit: string,
    UnitType: number
}

export interface ICurrentConditionShort {
    LocalObservationDateTime: string,
    EpochTime: number,
    WeatherText: string,
    WeatherIcon: number,
    HasPrecipitation: boolean,
    PrecipitationType: null,
    IsDayTime: boolean,
    Temperature: {
        Metric: IDataObj,
        Imperial: IDataObj
    },
    MobileLink: string,
    Link: string
}

export interface IPrecipitation {
    Icon: number,
    IconPhrase: string,
    HasPrecipitation: boolean,
    PrecipitationType?: string,
    PrecipitationIntensity?: string
}

export interface IDayForecast {
    Date: string,
    EpochDate: number,
    Temperature: {
        Minimum: IDataObj,
        Maximum: IDataObj
    },
    Day: IPrecipitation,
    Night: IPrecipitation,
    Sources: string[],
    MobileLink: string,
    Link: string
      
}

export interface IForecastShort {
    Headline: {
      EffectiveDate: string,
      EffectiveEpochDate: number,
      Severity: number,
      Text: string,
      Category: string,
      EndDate: string,
      EndEpochDate: number,
      MobileLink: string,
      Link: string
    },
    DailyForecasts: IDayForecast[]
}

export interface ILocationEntities {
    [key: string] : ILocation;
  }