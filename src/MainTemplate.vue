<script setup lang="ts">
import { SunSnowIcon } from 'lucide-vue-next'
</script>
<template>
  <header class="homeHeader">
    <span><SunSnowIcon :size="45" /></span>
    <h1 class="homeHeaderTitle">My Good Old Weather App</h1>
  </header>
  <main class="main">
    <aside class="aside">
      <slot name="sideBar"></slot>
    </aside>
    <div class="content">
      <slot name="contentHolder"></slot>
    </div>
  </main>
</template>
