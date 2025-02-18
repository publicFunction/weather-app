<script setup lang="ts">
defineProps<{
  buttonText: string
  buttonType: 'button' | 'submit' | 'reset'
}>()
</script>
<template>
  <button :type="buttonType">
    {{ buttonText }}
  </button>
</template>
<style lang="scss">
button {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
}
</style>
