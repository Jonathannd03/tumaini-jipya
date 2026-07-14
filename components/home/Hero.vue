<template>
  <section class="bg-gradient-to-br from-primary-800 via-primary-900 to-secondary-950 text-white">
    <div class="container mx-auto px-4 py-16 sm:px-6 sm:py-24 lg:py-32">
      <div class="max-w-3xl">
        <!-- Badge -->
        <div class="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm sm:mb-8">
          <span class="h-2 w-2 rounded-full bg-accent-400" aria-hidden="true"></span>
          <span class="text-sm font-medium">{{ $t('home.hero.badge') }}</span>
        </div>

        <h1 class="mb-5 text-display-sm font-bold sm:mb-6 sm:text-display lg:text-display-xl">
          {{ $t('home.hero.title') }}
        </h1>

        <p class="mb-8 max-w-2xl text-base leading-relaxed text-white/90 sm:mb-10 sm:text-lg lg:text-xl">
          {{ $t('home.hero.subline') }}
        </p>

        <div class="flex flex-col gap-3 sm:flex-row sm:gap-4">
          <NuxtLink
            to="/donate"
            class="inline-flex items-center justify-center gap-2 rounded-xl bg-accent-400 px-8 py-4 text-base font-semibold text-accent-950 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-300 hover:shadow-xl sm:text-lg"
          >
            <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            {{ $t('home.hero.donateNow') }}
          </NuxtLink>

          <NuxtLink
            to="/membership"
            class="inline-flex items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 text-base font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/10 sm:text-lg"
          >
            {{ $t('home.hero.becomeMember') }}
          </NuxtLink>
        </div>

        <!-- Trust indicators -->
        <div class="mt-10 flex flex-wrap items-center gap-x-6 gap-y-3 border-t border-white/20 pt-8 sm:mt-12 sm:pt-10">
          <div v-for="key in ['trust1', 'trust2']" :key="key" class="flex items-center gap-2 text-sm text-white/80">
            <svg class="h-5 w-5 text-accent-300" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>{{ $t(`home.hero.${key}`) }}</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
