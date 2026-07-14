<template>
  <div class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-900 px-6 py-12 text-center text-white shadow-card sm:px-12 sm:py-16">
    <UiPatternDivider variant="texture" tone="white" :opacity="0.08" />

    <div class="relative mx-auto max-w-2xl">
      <h2 class="mb-4 text-2xl font-bold sm:text-3xl lg:text-4xl">
        <slot name="title">{{ title }}</slot>
      </h2>

      <p v-if="description || $slots.description" class="mb-8 text-base leading-relaxed text-white/90 sm:mb-10 sm:text-lg">
        <slot name="description">{{ description }}</slot>
      </p>

      <div class="flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
        <slot name="actions">
          <NuxtLink
            v-if="primaryText"
            :to="primaryLink"
            class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-400 px-8 py-4 text-base font-semibold text-accent-950 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-300 hover:shadow-xl sm:w-auto sm:text-lg"
          >
            {{ primaryText }}
          </NuxtLink>
          <NuxtLink
            v-if="secondaryText"
            :to="secondaryLink"
            class="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto sm:text-lg"
          >
            {{ secondaryText }}
          </NuxtLink>
        </slot>
      </div>

      <div v-if="$slots.footnote" class="mt-8 text-sm text-white/75">
        <slot name="footnote" />
      </div>
    </div>
  </div>
</template>

<script setup>
defineProps({
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  primaryText: {
    type: String,
    default: ''
  },
  primaryLink: {
    type: String,
    default: '/donate'
  },
  secondaryText: {
    type: String,
    default: ''
  },
  secondaryLink: {
    type: String,
    default: '/membership'
  }
});
</script>
