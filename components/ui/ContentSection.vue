<template>
  <section :id="id || undefined" :class="[paddingClass, backgroundClass]">
    <div class="container mx-auto px-4 sm:px-6">
      <slot />
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  id: {
    type: String,
    default: ''
  },
  background: {
    type: String,
    default: 'white',
    validator: (value) => ['white', 'tinted', 'sand', 'dark'].includes(value)
  },
  padding: {
    type: String,
    default: 'normal',
    validator: (value) => ['normal', 'tight', 'none'].includes(value)
  }
});

const backgroundClass = computed(() => {
  const backgrounds = {
    white: 'bg-white',
    tinted: 'bg-primary-50/60',
    sand: 'bg-accent-50/70',
    dark: 'bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-950 text-white'
  };
  return backgrounds[props.background];
});

const paddingClass = computed(() => {
  const paddings = {
    normal: 'py-14 sm:py-20 lg:py-24',
    tight: 'py-10 sm:py-12 lg:py-16',
    none: ''
  };
  return paddings[props.padding];
});
</script>
