<template>
  <section
    class="py-12 sm:py-16 lg:py-20 relative overflow-hidden"
    :class="[variant === 'gradient' ? 'bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-700 text-white' : 'bg-white']"
  >
    <!-- Decorative elements for gradient variant -->
    <template v-if="variant === 'gradient'">
      <DecorativeBackground />
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
    </template>

    <div class="container mx-auto px-4 sm:px-6 text-center relative">
      <!-- Icon -->
      <div
        v-if="showIcon"
        class="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 rounded-2xl mb-6 sm:mb-8"
        :class="variant === 'gradient' ? 'bg-white/10 backdrop-blur-sm' : 'bg-gradient-to-br from-teal-500 to-emerald-600'"
      >
        <slot name="icon">
          <svg class="w-8 h-8 sm:w-10 sm:h-10" :class="variant === 'gradient' ? 'text-white' : 'text-white'" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" :d="iconPath"/>
          </svg>
        </slot>
      </div>

      <!-- Title -->
      <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4" :class="variant === 'gradient' ? 'text-white' : 'text-gray-900'">
        <slot name="title">{{ title }}</slot>
      </h2>

      <!-- Description -->
      <p class="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed px-4" :class="variant === 'gradient' ? 'text-white/90' : 'text-gray-600'">
        <slot name="description">{{ description }}</slot>
      </p>

      <!-- Actions -->
      <div class="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
        <slot name="actions">
          <!-- Default primary button -->
          <NuxtLink
            v-if="primaryButtonText"
            :to="primaryButtonLink"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg"
            :class="variant === 'gradient' ? 'bg-white text-teal-700 hover:bg-emerald-50' : 'bg-teal-600 text-white hover:bg-teal-700'"
          >
            <component v-if="primaryIcon" :is="primaryIcon" class="w-5 h-5" />
            <span>{{ primaryButtonText }}</span>
          </NuxtLink>

          <!-- Default secondary button -->
          <NuxtLink
            v-if="secondaryButtonText"
            :to="secondaryButtonLink"
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 font-semibold rounded-lg transition-all duration-300 text-base sm:text-lg"
            :class="variant === 'gradient' ? 'border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm' : 'border-2 border-teal-600 text-teal-700 hover:bg-teal-50'"
          >
            <component v-if="secondaryIcon" :is="secondaryIcon" class="w-5 h-5" />
            <span>{{ secondaryButtonText }}</span>
          </NuxtLink>
        </slot>
      </div>

      <!-- Trust indicators -->
      <div v-if="showTrustIndicators || $slots.trustIndicators" class="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-10 sm:mt-12 pt-8 sm:pt-10 border-t" :class="variant === 'gradient' ? 'border-white/20' : 'border-gray-200'">
        <slot name="trustIndicators"></slot>
      </div>
    </div>
  </section>
</template>

<script setup>
import DecorativeBackground from './DecorativeBackground.vue';

defineProps({
  variant: {
    type: String,
    default: 'gradient', // 'gradient' or 'white'
    validator: (value) => ['gradient', 'white'].includes(value)
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  iconPath: {
    type: String,
    default: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  },
  primaryButtonText: {
    type: String,
    default: ''
  },
  primaryButtonLink: {
    type: String,
    default: ''
  },
  primaryIcon: {
    type: Object,
    default: null
  },
  secondaryButtonText: {
    type: String,
    default: ''
  },
  secondaryButtonLink: {
    type: String,
    default: ''
  },
  secondaryIcon: {
    type: Object,
    default: null
  },
  showTrustIndicators: {
    type: Boolean,
    default: false
  }
});
</script>
