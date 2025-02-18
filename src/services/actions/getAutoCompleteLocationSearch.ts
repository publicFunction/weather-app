import { searchLocationList } from '@/services/location/search.ts'
import { useCurrentLocationStore } from '@/store/currentLocation.ts'
import { useSearchLocationStore } from '@/store/searchLocation.ts'

export const getAutoCompleteLocationSearch = async (data: string) => {
  const locationStore = useCurrentLocationStore()
  const searchLocations = useSearchLocationStore()

  if (data.length > 3) {
    locationStore.updateSearchLocation(data)
    const locationResults = await searchLocationList()
    searchLocations.setSearchResults(locationResults)
  } else {
    searchLocations.setSearchResults([])
  }
}
