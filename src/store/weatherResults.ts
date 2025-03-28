import { defineStore } from 'pinia'
import { type WeatherResults } from '@/types/Weather.ts'

export const useWeatherResultsStore = defineStore('weatherResults', {
  state: () => ({ fiveDayWeather: {} }),
  getters: {
    fiveDayWeatherData: (state) => state.fiveDayWeather,
  },
  actions: {
    setFiveDayWeatherResults(weatherResults: WeatherResults) {
      this.fiveDayWeather = weatherResults
    },
  },
})
