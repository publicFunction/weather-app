<script setup lang="ts">
import * as icons from 'lucide-vue-next'
import { weatherNumbersToIcons } from '@/utils'
import { DateTime } from 'luxon'

defineProps<{
  icon: number
  dayOfWeek: number
  temperatureMax: number
  temperatureMin: number
  unit: string
}>()

const convertEpochDateToDayOfWeek = (date: number) => {
  const dateObject = DateTime.fromSeconds(date)
  return dateObject.toFormat('ccc')
}

const roundOrFloorTemperature = (temperature: number) => {
  if (Math.abs(temperature) % 1 >= 0.5) {
    return Math.ceil(temperature)
  }
  return Math.floor(temperature)
}
</script>

<template>
  <div
    class="flex flex-col w-32 rounded p-2 bg-[#2C3E50] items-center gap-2 shadow shadow-black select-none"
  >
    <div class="flex flex-row">
      <component
        class="w-full h-14 text-white"
        :is="(icons as never)[weatherNumbersToIcons(icon)]"
      />
    </div>
    <div class="flex flex-row w-full h-[0.125rem] bg-white opacity-50"></div>
    <div class="flex flex-row text-xl text-white font-bold">
      {{ convertEpochDateToDayOfWeek(dayOfWeek) }}
    </div>
    <div class="flex justify-evenly gap-2 items-center">
      <div class="flex flex-row text-2xl text-white font-bold items-center text-center">
        {{ roundOrFloorTemperature(temperatureMax) }}&deg;
        <span class="text-sm inline-flex justify-center items-start pl-2 font-bold">{{
          unit
        }}</span>
      </div>
      <div class="flex flex-row text-lg text-gray-400 font-bold items-center">
        {{ roundOrFloorTemperature(temperatureMin) }}&deg;
        <span class="text-sm inline-flex justify-center items-start pl-2 font-bold">{{
          unit
        }}</span>
      </div>
    </div>
  </div>
</template>
