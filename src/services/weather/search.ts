import { accuWeatherBaseURL, baseQueryParams } from '@/services/common.ts'
import { useSearchLocationStore } from '@/store/searchLocation.ts'

const getFiveDayWeather = async () => {
  const searchResults = useSearchLocationStore()

  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  const firstLocationKey = searchResults.getSearchResults().at(0).Key

  return fetch(
    `${accuWeatherBaseURL}/forecasts/v1/daily/5day/${firstLocationKey}?${baseQueryParams}&metric=true`,
    {
      method: 'GET',
    },
  )
    .then((response: Response) => {
      if (!response.ok) {
        console.error(response)
      }
      return response.json()
    })
    .then((data) => data)
    .catch((error: Error) => console.error(error))
}

export { getFiveDayWeather }
