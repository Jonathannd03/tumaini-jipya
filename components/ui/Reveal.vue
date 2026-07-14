<template>
  <div ref="el" class="reveal" :style="delay ? { transitionDelay: `${delay}ms` } : undefined">
    <slot />
  </div>
</template>

<script setup>
import { ref } from 'vue';

defineProps({
  // Stagger multiple reveals, e.g. cards in a grid
  delay: {
    type: Number,
    default: 0
  }
});

const el = ref(null);
useScrollReveal(el);
</script>
