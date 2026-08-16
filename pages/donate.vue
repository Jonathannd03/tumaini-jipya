<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <UiPageHero
      :badge="$t('donate.badge')"
      :title="$t('donate.title')"
      :highlighted-text="$t('donate.titleHighlight')"
      :description="$t('donate.description')"
    />

    <div class="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <div class="max-w-4xl mx-auto">

        <!-- Donation Methods -->
        <div class="mb-12 sm:mb-16">
          <div class="text-center mb-10 sm:mb-12">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {{ $t('donate.methods.title') }}
            </h2>
            <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {{ $t('donate.methods.description') }}
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <!-- betterplace.org -->
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                  </svg>
                </div>
                <span class="px-3 py-1 bg-teal-100 text-teal-700 text-xs font-semibold rounded-full">
                  {{ $t('donate.methods.betterplace.badge') }}
                </span>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {{ $t('donate.methods.betterplace.title') }}
              </h3>
              <p class="text-sm sm:text-base text-gray-600 mb-6 flex-grow">
                {{ $t('donate.methods.betterplace.description') }}
              </p>
              <div class="w-full flex flex-col items-center gap-2">
                <button
                  disabled
                  class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-400 font-semibold rounded-lg cursor-not-allowed text-sm sm:text-base"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"/>
                  </svg>
                  {{ $t('donate.methods.betterplace.button') }}
                </button>
                <span class="inline-flex items-center gap-1.5 text-xs text-gray-400">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ $t('donate.methods.betterplace.comingSoon') }}
                </span>
              </div>
            </div>

            <!-- PayPal -->
            <div class="bg-white rounded-2xl shadow-lg border border-gray-100 p-6 sm:p-8 flex flex-col">
              <div class="flex items-center justify-between mb-4">
                <div class="w-12 h-12 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md flex-shrink-0">
                  <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M7.076 21.337H2.47a.641.641 0 0 1-.633-.74L4.944 3.217a.773.773 0 0 1 .762-.654h7.322c2.394 0 4.217.626 5.252 1.812.978 1.12 1.261 2.66.84 4.583-.016.075-.032.15-.05.226C17.84 12.82 15.35 14.5 11.9 14.5H9.525a.773.773 0 0 0-.762.654l-.917 5.64a.641.641 0 0 1-.633.543h-.137zm9.307-13.27c-.018.11-.038.22-.06.33-1.06 5.435-4.688 7.108-9.32 7.108H4.827l-1.4 8.882h2.56l.904-5.64a.773.773 0 0 1 .762-.654h2.375c4.384 0 7.457-1.782 8.41-6.938.388-2.054.154-3.74-.855-4.988-.053-.066-.108-.13-.166-.192.058.03.114.062.17.092z"/>
                  </svg>
                </div>
                <span class="px-3 py-1 bg-blue-100 text-blue-700 text-xs font-semibold rounded-full">
                  {{ $t('donate.methods.paypal.badge') }}
                </span>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">
                {{ $t('donate.methods.paypal.title') }}
              </h3>
              <p class="text-sm sm:text-base text-gray-600 mb-6 flex-grow">
                {{ $t('donate.methods.paypal.description') }}
              </p>
              <div class="w-full flex flex-col items-center gap-2">
                <button
                  disabled
                  class="w-full inline-flex items-center justify-center gap-2 px-6 py-3 bg-gray-200 text-gray-400 font-semibold rounded-lg cursor-not-allowed text-sm sm:text-base"
                >
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"/>
                  </svg>
                  {{ $t('donate.methods.paypal.button') }}
                </button>
                <span class="inline-flex items-center gap-1.5 text-xs text-gray-400">
                  <svg class="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                  {{ $t('donate.methods.paypal.comingSoon') }}
                </span>
              </div>
            </div>
          </div>
        </div>

        <!-- Tax Receipt Notice -->
        <div class="bg-amber-50 border border-amber-200 rounded-2xl p-6 sm:p-8 mb-12 sm:mb-16 flex gap-4">
          <div class="flex-shrink-0 mt-0.5">
            <svg class="w-6 h-6 text-amber-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
            </svg>
          </div>
          <div>
            <h3 class="text-sm sm:text-base font-bold text-amber-900 mb-1">
              {{ $t('donate.taxNotice.title') }}
            </h3>
            <p class="text-sm text-amber-800 leading-relaxed">
              {{ $t('donate.taxNotice.text') }}
            </p>
          </div>
        </div>

        <!-- Impact Section -->
        <div class="mb-12 sm:mb-16">
          <div class="text-center mb-10 sm:mb-12">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {{ $t('donate.impact.title') }}
            </h2>
            <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {{ $t('donate.impact.description') }}
            </p>
          </div>

          <div class="grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-8">
            <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">{{ $t('mission.humanitarian.title') }}</h3>
              <p class="text-sm sm:text-base text-gray-600">{{ $t('donate.impact.humanitarian') }}</p>
            </div>

            <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
              <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">{{ $t('mission.climate.title') }}</h3>
              <p class="text-sm sm:text-base text-gray-600">{{ $t('donate.impact.climate') }}</p>
            </div>

            <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center sm:col-span-3 lg:col-span-1">
              <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                </svg>
              </div>
              <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">{{ $t('mission.education.title') }}</h3>
              <p class="text-sm sm:text-base text-gray-600">{{ $t('donate.impact.education') }}</p>
            </div>
          </div>
        </div>

        <!-- CTA -->
        <UiCtaBanner
          :title="$t('donate.newsletter.title')"
          :description="$t('donate.newsletter.description')"
          :primary-text="$t('donate.newsletter.contactUs')"
          primary-link="/contact"
          :secondary-text="$t('nav.participate')"
          secondary-link="/membership"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
</script>
