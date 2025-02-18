<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { Home, MessageCircleQuestion } from 'lucide-vue-next'
</script>

<template>
  <header>
    <nav>
      <RouterLink to="/">
        <span><Home /></span>
        <span>Home</span>
      </RouterLink>
      <RouterLink to="/about">
        <span><MessageCircleQuestion /></span>
        <span>About</span>
      </RouterLink>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
header {
  display: flex;
  flex-direction: column;
  nav {
    display: grid;
    grid-template-rows: 1fr 1fr;
    width: 100%;
    a {
      display: grid;
      width: 100%;
      grid-template-columns: 0.2fr 1fr;
      color: var(--color-text);
    }
  }
}
</style>
