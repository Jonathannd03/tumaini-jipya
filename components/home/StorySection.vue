<template>
  <UiContentSection background="sand" pattern>
    <div class="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
      <!-- Story text -->
      <UiReveal>
        <UiSectionHeader
          :badge="$t('home.story.badge')"
          :title="$t('home.story.title')"
          badge-tone="sand"
          align="left"
          class="!mb-6"
        />
        <div class="space-y-4 leading-relaxed text-gray-700">
          <p>{{ $t('home.story.p1') }}</p>
          <p>{{ $t('home.story.p2') }}</p>
        </div>
        <NuxtLink
          to="/about-us"
          class="mt-8 inline-flex items-center gap-2 rounded-xl bg-primary-700 px-6 py-3.5 font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-primary-800 hover:shadow-lg"
        >
          {{ $t('home.story.learnMore') }}
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
          </svg>
        </NuxtLink>
      </UiReveal>

      <!-- Founder quote card -->
      <UiReveal :delay="150">
        <figure class="relative overflow-hidden rounded-2xl bg-gradient-to-br from-primary-700 via-primary-800 to-secondary-900 p-8 text-white shadow-card sm:p-10">
          <UiPatternDivider variant="texture" tone="white" :opacity="0.08" />
          <svg class="relative mb-4 h-10 w-10 text-accent-300" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
          </svg>
          <!-- TODO: Replace with a real founder quote approved by Jonathan Ndinga -->
          <blockquote class="relative text-lg font-medium leading-relaxed sm:text-xl">
            „{{ $t('home.story.quote') }}“
          </blockquote>
          <figcaption class="relative mt-6 border-t border-white/20 pt-4">
            <div class="font-heading font-bold">{{ BOARD_MEMBERS.chair }}</div>
            <div class="text-sm text-white/75">{{ $t('home.story.quoteRole') }}</div>
          </figcaption>
        </figure>
      </UiReveal>
    </div>
  </UiContentSection>
</template>

<script setup>
const { BOARD_MEMBERS } = useConstants();
</script>
