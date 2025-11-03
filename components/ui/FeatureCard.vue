<template>
  <div
    class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:-translate-y-2"
    :class="[borderColor ? `hover:border-${borderColor}-200` : 'hover:border-teal-200']"
  >
    <!-- Icon -->
    <div
      class="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg bg-gradient-to-br"
      :class="gradient"
    >
      <slot name="icon">
        <svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
          <path :d="iconPath" />
        </svg>
      </slot>
    </div>

    <!-- Title -->
    <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
      <slot name="title">{{ title }}</slot>
    </h3>

    <!-- Description -->
    <p class="text-sm sm:text-base text-gray-600 leading-relaxed" :class="{ 'mb-5 sm:mb-6': hasLink }">
      <slot>{{ description }}</slot>
    </p>

    <!-- Link -->
    <div v-if="hasLink" class="mt-5 sm:mt-6 flex items-center font-semibold text-sm group-hover:gap-2 transition-all" :class="`text-${linkColor || 'teal'}-600`">
      <span>{{ linkText || 'Mehr erfahren' }}</span>
      <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
      </svg>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  gradient: {
    type: String,
    default: 'from-teal-500 to-emerald-600'
  },
  iconPath: {
    type: String,
    default: ''
  },
  borderColor: {
    type: String,
    default: ''
  },
  linkText: {
    type: String,
    default: 'Mehr erfahren'
  },
  linkColor: {
    type: String,
    default: 'teal'
  },
  hasLink: {
    type: Boolean,
    default: false
  }
});
</script>
