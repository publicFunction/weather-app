<script setup lang="ts">
import { useCurrentLocationStore } from '@/store/currentLocation.ts'
import { useSearchLocationStore } from '@/store/searchLocation.ts'

import { computed } from 'vue'
import AppButton from '@/components/Basics/AppButton.vue'
import InputText from '@/components/Form/InputText.vue'
import { getAutoCompleteLocationSearch } from '@/services/actions/getAutoCompleteLocationSearch.ts'

const locationStore = useCurrentLocationStore()
const searchResults = useSearchLocationStore()

const showCurrentLocationGPS = computed(() => locationStore.location)
const showCurrentSearchLocation = computed(() => locationStore.locationName)
const displaySearchResults = computed(() => searchResults.locations)
</script>

<template>
  <div class="home-view">
    <div class="searchBar">
      <InputText
        v-model="showCurrentSearchLocation"
        :value="showCurrentSearchLocation"
        placeholderText="Search by location..."
        @keyup="($event) => getAutoCompleteLocationSearch($event.target.value)"
      />
      <AppButton
        button-text="Set Location"
        buttonType="button"
        @click="() => locationStore.updateCurrentLocationGPS(55.55, 45.12)"
      />
      <AppButton
        button-text="Reset Location"
        buttonType="button"
        @click="() => locationStore.updateCurrentLocationGPS(0.0, 0.0)"
      />
      <div class="searchResult">
        Current Location set to {{ showCurrentSearchLocation }}
        <i
          >Latitude: {{ showCurrentLocationGPS.lat }} Longitude: {{ showCurrentLocationGPS.lng }}</i
        >
      </div>
    </div>
    <div class="container">
      <h2>DATA FROM SEARCH</h2>
      <p>{{ displaySearchResults }}</p>
    </div>
  </div>
</template>

<style scoped lang="scss">
.home-view {
  display: flex;
  flex-direction: column;
  .searchBar {
    display: grid;
    grid-template-columns: 0.5fr 0.33fr 0.33fr 1fr;
    column-gap: 1rem;
    margin-bottom: 1rem;
    align-items: center;
  }
}
</style>
