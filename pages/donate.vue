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
          <!-- Coming Soon Notice -->
          <div class="bg-accent-50 rounded-2xl p-8 sm:p-12 lg:p-16 shadow-soft border border-accent-200 mb-12 sm:mb-16">
            <div class="text-center">
              <div class="w-20 h-20 sm:w-24 sm:h-24 bg-accent-400 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                <svg class="w-10 h-10 sm:w-12 sm:h-12 text-accent-950" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {{ $t('donate.comingSoon.title') }}
              </h2>
              <p class="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
                {{ $t('donate.comingSoon.description') }}
              </p>
              <div class="inline-flex items-center gap-2 bg-white rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-gray-900">
                <svg class="w-5 h-5 text-accent-700" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd"/>
                </svg>
                <span>{{ $t('donate.comingSoon.availableSoon') }}</span>
              </div>
            </div>
          </div>

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
              <!-- Impact 1 -->
              <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">{{ $t('mission.humanitarian.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-600">
                  {{ $t('donate.impact.humanitarian') }}
                </p>
              </div>
  
              <!-- Impact 2 -->
              <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center">
                <div class="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
                  </svg>
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">{{ $t('mission.climate.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-600">
                  {{ $t('donate.impact.climate') }}
                </p>
              </div>
  
              <!-- Impact 3 -->
              <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100 text-center sm:col-span-3 lg:col-span-1">
                <div class="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                  <svg class="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
                  </svg>
                </div>
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">{{ $t('mission.education.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-600">
                  {{ $t('donate.impact.education') }}
                </p>
              </div>
            </div>
          </div>
  
          <!-- Stay informed CTA -->
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
  const { ORGANIZATION } = useConstants();
  </script>