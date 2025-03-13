import { getFiveDayWeather } from '@/services/weather/search.ts'
import { useWeatherResultsStore } from '@/store/weatherResults.ts'

export const getFiveDayWeatherResults = async () => {
  const weatherResults = useWeatherResultsStore()

  const fiveDayWeather = await getFiveDayWeather()
  weatherResults.setFiveDayWeatherResults(fiveDayWeather)
}
