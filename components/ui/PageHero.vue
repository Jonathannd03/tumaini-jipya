<template>
  <section class="border-b border-gray-100 bg-gradient-to-b from-primary-50/80 to-white">
    <div class="container mx-auto px-4 py-12 text-center sm:px-6 sm:py-16 lg:py-20">
      <div v-if="badge" class="mb-4 inline-flex items-center gap-2 rounded-full bg-primary-100 px-4 py-2 text-sm font-medium text-primary-800 sm:mb-6">
        {{ badge }}
      </div>

      <h1 class="mx-auto mb-4 max-w-3xl text-display-sm font-bold text-gray-900 sm:text-display">
        {{ title }}
        <template v-if="highlightedText">
          <span class="text-primary-600">{{ highlightedText }}</span>
        </template>
      </h1>

      <p v-if="description" class="mx-auto max-w-2xl text-base leading-relaxed text-gray-600 sm:text-lg">
        {{ description }}
      </p>

      <div v-if="$slots.default" class="mt-8">
        <slot />
      </div>
    </div>
  </section>
</template>

<script setup>
defineProps({
  badge: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  // Rendered after the title in brand color
  highlightedText: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  }
});
</script>
