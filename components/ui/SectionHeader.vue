<template>
  <div class="text-center mb-10 sm:mb-12 lg:mb-16">
    <!-- Badge -->
    <div v-if="badge" class="inline-flex items-center gap-2 bg-teal-100 text-teal-700 rounded-full px-4 py-2 mb-4 sm:mb-6 text-sm font-medium">
      <component v-if="badgeIcon" :is="badgeIcon" class="w-4 h-4" />
      <span>{{ badge }}</span>
    </div>

    <!-- Title -->
    <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
      <slot name="title">
        <span v-html="formattedTitle"></span>
      </slot>
    </h2>

    <!-- Description -->
    <p v-if="description || $slots.description" class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
      <slot name="description">{{ description }}</slot>
    </p>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  highlightedText: {
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

const formattedTitle = computed(() => {
  if (props.highlightedText && props.title.includes(props.highlightedText)) {
    return props.title.replace(
      props.highlightedText,
      `<span class="text-teal-600">${props.highlightedText}</span>`
    );
  }
  return props.title;
});
</script>
