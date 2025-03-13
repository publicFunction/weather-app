export type DailyForecastDay = {
  Icon: number
  IconPhrase: string
  HasPrecipitation: boolean
  PrecipitationType: string
  PrecipitationIntensity: string
}

export type DailyForecastTemperatureTypes = {
  Unit: string
  UnitType: number
  Value: number
}

export type DailyForecastTemperature = {
  Maximum: DailyForecastTemperatureTypes
  Minimum: DailyForecastTemperatureTypes
}

export type DailyForecast = {
  Date: string
  Day: DailyForecastDay
  EpochDate: number
  Link: string
  MobileLink: string
  Night: object
  Sources: Array<string>
  Temperature: DailyForecastTemperature
}

export type WeatherResults = {
  DailyForecasts: Array<DailyForecast>
  Headline: object
}
