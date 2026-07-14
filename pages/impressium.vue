<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <UiPageHero
        :badge="$t('impressum.badge')"
        :title="$t('impressum.title')"
        :description="$t('impressum.description')"
      />
  
      <!-- Main Content -->
      <div class="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div class="max-w-4xl mx-auto">
          <!-- Organization Info -->
          <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 border border-gray-100">
            <div class="flex items-start gap-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ $t('impressum.organization.title') }}</h2>
                <p class="text-sm sm:text-base text-gray-600">{{ $t('impressum.organization.description') }}</p>
              </div>
            </div>
  
            <div class="space-y-4 text-sm sm:text-base">
              <div>
                <div class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('impressum.organization.name') }}</div>
                <div class="text-gray-900 font-medium">{{ ORGANIZATION.name }}</div>
              </div>

              <div>
                <div class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('impressum.organization.address') }}</div>
                <div class="text-gray-900">
                  {{ CONTACT_INFO.address.street }}<br />
                  {{ CONTACT_INFO.address.city }}<br />
                  {{ CONTACT_INFO.address.country }}
                </div>
              </div>
  
              <div>
                <div class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('impressum.organization.registration') }}</div>
                <div class="text-gray-900">
                  {{ $t('impressum.organization.registrationDetail') }}<br />
                  {{ $t('impressum.organization.court') }}: {{ ORGANIZATION.register.court }}<br />
                  {{ $t('impressum.organization.number') }}: {{ ORGANIZATION.register.number }}
                </div>
              </div>

              <div>
                <div class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('impressum.organization.nonprofit') }}</div>
                <div class="text-gray-900">
                  {{ $t('impressum.organization.nonprofitDetail') }}
                </div>
              </div>
            </div>
          </div>
  
          <!-- Board/Representatives -->
          <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 border border-gray-100">
            <div class="flex items-start gap-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ $t('impressum.board.title') }}</h2>
                <p class="text-sm sm:text-base text-gray-600">{{ $t('impressum.board.description') }}</p>
              </div>
            </div>
  
            <div class="space-y-4 text-sm sm:text-base">
              <div>
                <div class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('impressum.board.chair') }}</div>
                <div class="text-gray-900">{{ BOARD_MEMBERS.chair }}</div>
              </div>

              <div>
                <div class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('impressum.board.viceChair') }}</div>
                <div class="text-gray-900">{{ BOARD_MEMBERS.viceChair }}</div>
              </div>

              <div>
                <div class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('impressum.board.treasurer') }}</div>
                <div class="text-gray-900">{{ BOARD_MEMBERS.treasurer }}</div>
              </div>
            </div>
          </div>
  
          <!-- Contact -->
          <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 border border-gray-100">
            <div class="flex items-start gap-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ $t('impressum.contact.title') }}</h2>
                <p class="text-sm sm:text-base text-gray-600">{{ $t('impressum.contact.description') }}</p>
              </div>
            </div>
  
            <div class="space-y-4 text-sm sm:text-base">
              <!-- TODO: Add a phone contact block here once the Verein has an official phone number -->
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <div>
                  <div class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('impressum.contact.email') }}</div>
                  <a :href="`mailto:${CONTACT_INFO.email}`" class="text-gray-900 hover:text-teal-600 transition-colors break-all">{{ CONTACT_INFO.email }}</a>
                </div>
              </div>

              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"/>
                </svg>
                <div>
                  <div class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('impressum.contact.website') }}</div>
                  <a href="https://www.tumaini-jipya.org" class="text-gray-900 hover:text-teal-600 transition-colors">www.tumaini-jipya.org</a>
                </div>
              </div>
            </div>
          </div>
  
          <!-- Disclaimer -->
          <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mb-8 border border-gray-100">
            <div class="flex items-start gap-4 mb-6">
              <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-amber-500 to-orange-600 rounded-xl flex items-center justify-center shadow-md">
                <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"/>
                </svg>
              </div>
              <div>
                <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-2">{{ $t('impressum.disclaimer.title') }}</h2>
                <p class="text-sm sm:text-base text-gray-600">{{ $t('impressum.disclaimer.description') }}</p>
              </div>
            </div>
  
            <div class="space-y-6 text-sm sm:text-base text-gray-700 leading-relaxed">
              <div>
                <h3 class="font-bold text-gray-900 mb-2">{{ $t('impressum.disclaimer.content.title') }}</h3>
                <p>
                  {{ $t('impressum.disclaimer.content.text') }}
                </p>
              </div>

              <div>
                <h3 class="font-bold text-gray-900 mb-2">{{ $t('impressum.disclaimer.links.title') }}</h3>
                <p>
                  {{ $t('impressum.disclaimer.links.text') }}
                </p>
              </div>

              <div>
                <h3 class="font-bold text-gray-900 mb-2">{{ $t('impressum.disclaimer.copyright.title') }}</h3>
                <p>
                  {{ $t('impressum.disclaimer.copyright.text') }}
                </p>
              </div>
            </div>
          </div>
  
          <!-- EU Dispute Resolution -->
          <div class="bg-gradient-to-br from-gray-50 to-gray-100 rounded-2xl p-6 sm:p-8 border border-gray-200">
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-3">{{ $t('impressum.euDispute.title') }}</h3>
            <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
              {{ $t('impressum.euDispute.description') }}
            </p>
            <a href="https://ec.europa.eu/consumers/odr" target="_blank" rel="noopener noreferrer" class="text-teal-600 hover:text-teal-700 font-semibold break-all text-sm sm:text-base">
              https://ec.europa.eu/consumers/odr
            </a>
            <p class="text-sm sm:text-base text-gray-700 leading-relaxed mt-3">
              {{ $t('impressum.euDispute.notParticipating') }}
            </p>
          </div>
  
          <!-- Back to Home CTA -->
          <div class="mt-10 sm:mt-12 text-center">
            <NuxtLink
              to="/"
              class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg"
            >
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18"/>
              </svg>
              <span>{{ $t('impressum.backToHome') }}</span>
            </NuxtLink>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  const { ORGANIZATION, CONTACT_INFO, BOARD_MEMBERS } = useConstants();
  </script>