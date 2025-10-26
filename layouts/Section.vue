<template>
    <section :class="['py-12 md:py-20', background]">
      <slot />
    </section>
  </template>
  
  <script setup>
  defineProps({
    background: {
      type: String,
      default: 'bg-white'
    }
  })
  </script>