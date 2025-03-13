<script setup lang="ts">
import { useCurrentLocationStore } from '@/store/currentLocation.ts'
import { useSearchLocationStore } from '@/store/searchLocation.ts'

import { computed } from 'vue'
import AppButton from '@/components/Basics/AppButton.vue'
import InputText from '@/components/Form/InputText.vue'
import { getAutoCompleteLocationSearch } from '@/services/actions/getAutoCompleteLocationSearch.ts'
import WeatherCard from '@/components/Basics/WeatherCard.vue'
import { useWeatherResultsStore } from '@/store/weatherResults.ts'
import { type WeatherResults } from '@/types/Weather.ts'
import { getFiveDayWeatherResults } from '@/services/actions/getFiveDayWeatherResults.ts'

const locationStore = useCurrentLocationStore()
const searchResults = useSearchLocationStore()
const weatherData = useWeatherResultsStore()

const showCurrentLocationGPS = computed(() => locationStore.location)
const showCurrentSearchLocation = computed(() => locationStore.locationName)
const displaySearchResults = computed(() => searchResults.locations)
const theFiveDayWeather = computed(() => weatherData.fiveDayWeather as WeatherResults)
</script>

<template>
  <div class="flex flex-col">
    <div class="grid grid-cols-4 gap-x-4 mb-4 items-center">
      <InputText
        v-model="showCurrentSearchLocation"
        :value="showCurrentSearchLocation"
        placeholderText="Search by location..."
        @keyup="($event) => getAutoCompleteLocationSearch($event.target.value)"
      />
      <AppButton
        button-text="Set Location"
        buttonType="button"
        @click="() => locationStore.updateSearchLocation(showCurrentSearchLocation)"
      />
      <AppButton
        button-text="Reset Location"
        buttonType="button"
        @click="() => locationStore.updateCurrentLocationGPS(0.0, 0.0)"
      />
      <AppButton
        button-text="10 Day Weather"
        buttonType="button"
        @click="() => getFiveDayWeatherResults()"
      />
    </div>
    <div class="grid grid-cols-2 gap-x-4 mb-4 items-center">
      <div class="flex flex-col gap">
        Searching Location set to {{ showCurrentSearchLocation }}
        <i
          >Name: {{ showCurrentSearchLocation }}, Latitude:
          {{ showCurrentLocationGPS.lat }} Longitude: {{ showCurrentLocationGPS.lng }}</i
        >
      </div>
    </div>
    <div class="flex flex-col">
      <h2>DATA FROM SEARCH</h2>
      <p>{{ displaySearchResults }}</p>
      <div class="p-4 bg-gray-500 flex flex-row gap-6">
        <WeatherCard
          v-for="forecast in theFiveDayWeather.DailyForecasts"
          :key="forecast.EpochDate"
          :icon="forecast.Day.Icon"
          :dayOfWeek="forecast.EpochDate"
          :temperatureMax="forecast.Temperature.Maximum.Value"
          :temperatureMin="forecast.Temperature.Minimum.Value"
          :unit="forecast.Temperature.Maximum.Unit"
        />
      </div>
    </div>
  </div>
</template>
