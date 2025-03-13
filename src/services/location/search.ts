import { accuWeatherBaseURL, baseQueryParams } from '@/services/common.ts'
import { useCurrentLocationStore } from '@/store/currentLocation.ts'
const locationStore = useCurrentLocationStore()

const searchLocationList = async () => {
  return fetch(
    `${accuWeatherBaseURL}/locations/v1/cities/autocomplete?${baseQueryParams}&q=${locationStore.locationName}`,
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
    .then((data) => {
      return data.filter((location: any) => {
        return location.Country.ID === 'GB'
      })
    })
    .catch((error: Error) => console.error(error))
}

export { searchLocationList }
