<template>
  <section class="relative bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-700 text-white overflow-hidden">
    <!-- Pattern overlay -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>

    <!-- Decorative elements -->
    <DecorativeBackground />

    <div class="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 relative">
      <div class="max-w-3xl mx-auto text-center">
        <!-- Badge -->
        <div v-if="badge" class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 sm:mb-8">
          <component v-if="badgeIcon" :is="badgeIcon" class="w-4 h-4 text-emerald-300" />
          <span class="text-sm font-medium">{{ badge }}</span>
        </div>

        <!-- Title -->
        <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
          <slot name="title">{{ title }}</slot>
        </h1>

        <!-- Description -->
        <p v-if="description || $slots.description" class="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
          <slot name="description">{{ description }}</slot>
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import DecorativeBackground from './DecorativeBackground.vue';

defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  badge: {
    type: String,
    default: ''
  },
  badgeIcon: {
    type: Object,
    default: null
  }
});
</script>
