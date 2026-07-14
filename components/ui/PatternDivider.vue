<template>
  <!-- Decorative wax-print-inspired pattern (nsubra/target motif). Purely visual. -->
  <div v-if="variant === 'texture'" aria-hidden="true" class="pointer-events-none absolute inset-0 overflow-hidden">
    <svg class="h-full w-full" :style="{ opacity }" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern :id="patternId" width="96" height="96" patternUnits="userSpaceOnUse">
          <g :stroke="color" fill="none" stroke-width="2">
            <circle cx="24" cy="24" r="14" />
            <circle cx="24" cy="24" r="7" />
            <circle cx="72" cy="72" r="14" />
            <circle cx="72" cy="72" r="7" />
          </g>
          <g :fill="color">
            <circle cx="24" cy="24" r="2.5" />
            <circle cx="72" cy="72" r="2.5" />
            <circle cx="72" cy="24" r="3.5" />
            <circle cx="24" cy="72" r="3.5" />
            <path d="M72 12l3 6-3 6-3-6z" />
            <path d="M24 60l3 6-3 6-3-6z" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" :fill="`url(#${patternId})`" />
    </svg>
  </div>

  <div v-else aria-hidden="true" class="pointer-events-none relative h-10 overflow-hidden sm:h-14" :class="bandClass">
    <svg class="absolute inset-0 h-full w-full" :style="{ opacity }" xmlns="http://www.w3.org/2000/svg">
      <defs>
        <pattern :id="patternId" width="56" height="56" patternUnits="userSpaceOnUse">
          <g :stroke="color" fill="none" stroke-width="2">
            <circle cx="28" cy="28" r="12" />
            <circle cx="28" cy="28" r="5" />
          </g>
          <g :fill="color">
            <circle cx="28" cy="28" r="1.5" />
            <circle cx="0" cy="0" r="3" />
            <circle cx="56" cy="0" r="3" />
            <circle cx="0" cy="56" r="3" />
            <circle cx="56" cy="56" r="3" />
          </g>
        </pattern>
      </defs>
      <rect width="100%" height="100%" :fill="`url(#${patternId})`" />
    </svg>
  </div>
</template>

<script setup>
import { computed, useId } from 'vue';

const props = defineProps({
  // 'band' renders a horizontal divider strip; 'texture' fills the parent (parent needs `relative`)
  variant: {
    type: String,
    default: 'band',
    validator: (value) => ['band', 'texture'].includes(value)
  },
  // Pattern ink color
  tone: {
    type: String,
    default: 'teal',
    validator: (value) => ['teal', 'sand', 'white'].includes(value)
  },
  opacity: {
    type: [Number, String],
    default: 0.12
  },
  // Background of the band variant
  bandClass: {
    type: String,
    default: 'bg-primary-50'
  }
});

// Unique per instance so multiple dividers on one page don't collide
const patternId = `wax-pattern-${useId()}`;

const color = computed(() => {
  const tones = {
    teal: '#0f766e',
    sand: '#b45309',
    white: '#ffffff'
  };
  return tones[props.tone];
});
</script>
