<template>
  <section :id="id || undefined" class="relative overflow-hidden" :class="[paddingClass, backgroundClass]">
    <UiPatternDivider v-if="pattern" variant="texture" :tone="patternTone" :opacity="patternOpacity" />
    <div class="container relative mx-auto px-4 sm:px-6">
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
  // Overlay the wax-print texture on the section background
  pattern: {
    type: Boolean,
    default: false
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

const patternTone = computed(() => (props.background === 'dark' ? 'white' : props.background === 'sand' ? 'sand' : 'teal'));
const patternOpacity = computed(() => (props.background === 'dark' ? 0.08 : 0.06));
</script>
