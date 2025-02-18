import { baseQueryParams } from './common.ts'
import { useCurrentLocationStore } from '@/store/currentLocation.ts'
const locationStore = useCurrentLocationStore()

const searchLocationList = () => {
  return fetch(
    `http://dataservice.accuweather.com/locations/v1/cities/autocomplete?${baseQueryParams}&q=${locationStore.locationName}`,
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

export { searchLocationList }
