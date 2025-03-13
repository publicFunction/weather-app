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
  console.log(dateObject)
  return dateObject.toFormat('ccc')
}
</script>

<template>
  <div
    class="flex flex-col w-32 rounded p-2 bg-[#2C3E50] items-center gap-2 shadow shadow-black select-none"
  >
    <div class="flex flex-row">
      <component class="w-full h-14" :is="(icons as never)[weatherNumbersToIcons(icon)]" />
      {{ icon }}
    </div>
    <div class="flex flex-row w-full h-[0.125rem] bg-white opacity-50"></div>
    <div class="flex flex-row text-xl font-bold">{{ convertEpochDateToDayOfWeek(dayOfWeek) }}</div>
    <div class="flex flex-row text-lg font-bold">
      Min: {{ temperatureMin }}&deg;
      <span class="text-sm inline-flex justify-center items-start pl-2 font-bold">{{ unit }}</span>
    </div>
    <span> - </span>
    <div class="flex flex-row text-lg font-bold">
      Max: {{ temperatureMax }}&deg;
      <span class="text-sm inline-flex justify-center items-start pl-2 font-bold">{{ unit }}</span>
    </div>
  </div>
</template>
