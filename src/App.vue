<script setup lang="ts">
import { RouterView } from 'vue-router'
import MainTemplate from '@/MainTemplate.vue'
import SideBar from '@/components/Basics/SideBar.vue'
</script>
<template>
  <MainTemplate>
    <template #sideBar>
      <SideBar />
    </template>
    <template #contentHolder>
      <RouterView />
    </template>
  </MainTemplate>
</template>

<style lang="scss">
@use '@/styles/_main.scss';
</style>
