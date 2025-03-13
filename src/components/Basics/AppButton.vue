<script setup lang="ts">
defineProps<{
  buttonText: string
  buttonType: 'button' | 'submit' | 'reset'
}>()
</script>
<template>
  <button
    :type="buttonType"
    class="py-2 px-4 bg-amber-50 text-black hover:cursor-pointer hover:bg-[#00dc82] rounded"
  >
    {{ buttonText }}
  </button>
</template>
