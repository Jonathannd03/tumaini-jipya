<template>
  <div class="mb-10 sm:mb-12 lg:mb-16" :class="align === 'center' ? 'text-center' : 'text-left'">
    <!-- Badge -->
    <div
      v-if="badge"
      class="mb-4 inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium sm:mb-6"
      :class="badgeTone === 'sand' ? 'bg-accent-100 text-accent-900' : 'bg-primary-100 text-primary-800'"
    >
      <component :is="badgeIcon" v-if="badgeIcon" class="h-4 w-4" />
      <span>{{ badge }}</span>
    </div>

    <!-- Title -->
    <h2
      class="mb-3 font-bold text-gray-900 sm:mb-4"
      :class="size === 'lg' ? 'text-display-sm sm:text-display lg:text-display-lg' : 'text-2xl sm:text-3xl lg:text-4xl'"
    >
      <slot name="title">
        <span v-html="formattedTitle"></span>
      </slot>
    </h2>

    <!-- Description -->
    <p
      v-if="description || $slots.description"
      class="max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg"
      :class="align === 'center' ? 'mx-auto' : ''"
    >
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
  },
  badgeTone: {
    type: String,
    default: 'teal',
    validator: (value) => ['teal', 'sand'].includes(value)
  },
  align: {
    type: String,
    default: 'center',
    validator: (value) => ['center', 'left'].includes(value)
  },
  size: {
    type: String,
    default: 'normal',
    validator: (value) => ['normal', 'lg'].includes(value)
  }
});

const formattedTitle = computed(() => {
  if (props.highlightedText && props.title.includes(props.highlightedText)) {
    return props.title.replace(
      props.highlightedText,
      `<span class="text-primary-600">${props.highlightedText}</span>`
    );
  }
  return props.title;
});
</script>
