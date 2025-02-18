import { defineStore } from 'pinia'

export const useCurrentLocationStore = defineStore('currentLocation', {
  state: () => ({ location: { lat: 0.0, lng: 0.0 }, locationName: '' }),
  getters: {
    userLocation: (state) => state.location,
    searchLocation: (state) => state.locationName,
  },
  actions: {
    updateCurrentLocationGPS(lat: number, lng: number) {
      this.location = { lat: lat, lng: lng }
    },
    updateSearchLocation(locationName: string) {
      this.locationName = locationName
    },
  },
})
