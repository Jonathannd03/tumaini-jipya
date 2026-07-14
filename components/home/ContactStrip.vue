<template>
  <UiContentSection background="white" padding="tight">
    <div class="flex flex-col items-center justify-between gap-6 rounded-2xl border border-primary-100 bg-primary-50/60 p-6 sm:p-8 lg:flex-row lg:gap-10">
      <div class="text-center lg:text-left">
        <h2 class="mb-2 text-xl font-bold text-gray-900 sm:text-2xl">{{ $t('home.contactStrip.title') }}</h2>
        <p class="max-w-xl leading-relaxed text-gray-600">{{ $t('home.contactStrip.description') }}</p>
      </div>
      <NuxtLink
        to="/contact"
        class="inline-flex w-full items-center justify-center gap-2 whitespace-nowrap rounded-xl border-2 border-primary-600 px-6 py-3.5 font-semibold text-primary-700 transition-all duration-300 hover:bg-primary-600 hover:text-white sm:w-auto"
      >
        <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
        {{ $t('home.contactStrip.cta') }}
      </NuxtLink>
    </div>
  </UiContentSection>
</template>
