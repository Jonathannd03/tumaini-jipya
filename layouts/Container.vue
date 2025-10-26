<template>
    <div :class="['mx-auto px-4 sm:px-6 lg:px-8', { 'max-w-7xl': !fluid }]">
      <slot />
    </div>
  </template>
  
  <script setup>
  defineProps({
    fluid: {
      type: Boolean,
      default: false
    }
  })
  </script>