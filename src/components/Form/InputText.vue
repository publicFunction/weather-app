<script setup lang="ts">
import { Asterisk } from 'lucide-vue-next'
import { type InputErrorType } from '@/types/InputErrorType.ts'

defineProps<{
  useLabel?: boolean
  labelText?: string
  value: string
  placeholderText: string
  readOnly?: boolean
  required?: boolean
  handleOnBlur?: (event: KeyboardEvent) => void
  handleKeyUp?: (event: KeyboardEvent) => void
}>()

const error: InputErrorType = {
  hasError: false,
  message: '',
}
</script>

<template>
  <div class="input container">
    <label v-if="useLabel">
      {{ labelText }}
      <Asterisk v-if="required" class="required" />
    </label>
    <div class="input field">
      <input
        :value="value"
        type="text"
        class="text"
        :readonly="readOnly"
        @blur="handleOnBlur"
        @keyup="handleKeyUp"
        :required="required"
        autocomplete="off"
        :placeholder="placeholderText"
      />
    </div>
    <transition name="error-slide-fade">
      <div v-if="error.hasError" class="errors">
        <span>{{ error.message }}</span>
      </div>
    </transition>
  </div>
</template>

<style lang="scss">
input {
  padding: 0.5rem 1rem;
  border-radius: 0.25rem;
  width: 100%;
  &.container {
    .errors {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      color: var(--color-text);
    }
  }
}
</style>
