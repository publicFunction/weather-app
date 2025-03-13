import { defineStore } from 'pinia'

export const useSearchLocationStore = defineStore('searchLocation', {
  state: () => ({ locations: [] }),
  getters: {
    searchResults: (state) => state.locations,
  },
  actions: {
    setSearchResults(locationResults: []) {
      this.locations = locationResults
    },
    getSearchResults() {
      return this.locations
    },
  },
})
