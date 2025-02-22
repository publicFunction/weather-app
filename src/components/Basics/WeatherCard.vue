<script setup lang="ts">
import * as icons from 'lucide-vue-next'

defineProps<{
  icon: string
  dayOfWeek: string
  temperature: number
  degOrFar?: boolean
}>()
</script>
<template>
  <div class="weather-card">
    <div class="icon"><component :is="(icons as never)[icon]" /></div>
    <div class="line"></div>
    <div class="dow">{{ dayOfWeek }}</div>
    <div class="flex flex-row text-2xl font-bold">
      {{ temperature }}&deg;
      <span class="text-lg inline-flex justify-center items-start pl-2 font-bold">{{
        degOrFar ? 'c' : 'f'
      }}</span>
    </div>
  </div>
</template>
<style lang="scss">
.weather-card {
  display: flex;
  flex-direction: column;
  width: 8rem;
  border-radius: 0.5rem;
  padding: 0.5rem;
  background: #2c3e50;
  align-items: center;
  row-gap: 0.5rem;
  box-shadow: 0 0.5rem 1rem rgba(0, 0, 0, 0.3);
  user-select: none;
  .icon {
    display: inherit;
    flex-direction: row;
    svg {
      width: 100%;
      height: 4.25rem;
    }
  }
  .line {
    display: inherit;
    flex-direction: row;
    width: 100%;
    height: 0.125rem;
    background: #fff;
  }
  .dow {
    display: inherit;
    flex-direction: row;
    font-size: 1.25rem;
    font-weight: bold;
  }
  .temp {
    display: inherit;
    flex-direction: row;
    font-size: 1.75rem;
    font-weight: bold;
  }
}
</style>
