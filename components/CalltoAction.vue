<template>
  <CTASection
    variant="gradient"
    :show-trust-indicators="true"
  >
    <template #title>
      {{ $t('cta.title') }} <span class="text-emerald-300">{{ $t('cta.titleHighlight') }}</span>
    </template>

    <template #description>
      {{ $t('cta.description') }}
    </template>

    <template #actions>
      <NuxtLink
        to="/membership"
        class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 hover:bg-emerald-50 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
        </svg>
        {{ $t('cta.becomeMember') }}
      </NuxtLink>

      <NuxtLink
        to="/contact"
        class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm font-semibold rounded-lg transition-all duration-300 text-base sm:text-lg"
      >
        <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
        {{ $t('cta.contactUs') }}
      </NuxtLink>
    </template>

    <template #trustIndicators>
      <div class="flex items-center gap-2 text-sm sm:text-base text-white/90">
        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="font-medium">{{ $t('cta.taxDeductible') }}</span>
      </div>

      <div class="flex items-center gap-2 text-sm sm:text-base text-white/90">
        <svg class="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
          <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
        </svg>
        <span class="font-medium">{{ $t('cta.transparent') }}</span>
      </div>
    </template>
  </CTASection>
</template>

<script setup>
// Component now uses CTASection for better maintainability
</script>
