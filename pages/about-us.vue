<template>
  <div>
    <UiPageHero
      :badge="$t('aboutUs.badge')"
      :title="$t('aboutUs.title')"
      :highlighted-text="$t('aboutUs.titleHighlight')"
      :description="$t('aboutUs.intro1')"
    />

    <!-- Values -->
    <UiContentSection>
      <div class="mx-auto max-w-3xl text-center">
        <p class="text-base leading-relaxed text-gray-600 sm:text-lg">
          {{ $t('aboutUs.intro2') }}
        </p>
      </div>

      <div class="mt-12 grid grid-cols-1 gap-6 sm:mt-14 sm:gap-8 md:grid-cols-3">
        <UiReveal v-for="(value, index) in values" :key="value.key" :delay="index * 120">
          <article class="flex h-full flex-col items-center rounded-2xl border border-gray-100 bg-white p-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-8">
            <div class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary-600 shadow-md sm:h-16 sm:w-16">
              <svg class="h-7 w-7 text-white sm:h-8 sm:w-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" :d="value.icon" />
              </svg>
            </div>
            <h2 class="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">{{ $t(`aboutUs.${value.key}.title`) }}</h2>
            <p class="leading-relaxed text-gray-600">{{ $t(`aboutUs.${value.key}.description`) }}</p>
          </article>
        </UiReveal>
      </div>

      <div class="mt-10 text-center sm:mt-12">
        <NuxtLink
          to="/team"
          class="inline-flex items-center gap-2 rounded-xl border-2 border-primary-600 px-6 py-3.5 font-semibold text-primary-700 transition-all duration-300 hover:bg-primary-600 hover:text-white"
        >
          {{ $t('aboutUs.learnMore') }}
          <svg class="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </NuxtLink>
      </div>
    </UiContentSection>

    <!-- CTA -->
    <UiContentSection background="tinted" padding="tight">
      <UiCtaBanner
        :title="`${$t('cta.title')} ${$t('cta.titleHighlight')}`"
        :description="$t('cta.description')"
        :primary-text="$t('cta.becomeMember')"
        primary-link="/membership"
        :secondary-text="$t('cta.contactUs')"
        secondary-link="/contact"
      />
    </UiContentSection>
  </div>
</template>

<script setup>
const values = [
  {
    key: 'transparency',
    icon: 'M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z'
  },
  {
    key: 'sustainability',
    icon: 'M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15'
  },
  {
    key: 'tolerance',
    icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
  }
];
</script>
