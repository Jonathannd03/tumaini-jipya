<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-br from-gray-800 via-gray-700 to-gray-900 text-white overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
        </div>
        <div class="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        
        <div class="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20 relative">
          <div class="max-w-4xl">
            <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-4 sm:mb-6">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-medium">{{ $t('impressum.badge') }}</span>
            </div>

            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 leading-tight">
              {{ $t('impressum.title') }}
            </h1>
            <p class="text-base sm:text-lg text-white/90 leading-relaxed">
              {{ $t('impressum.description') }}
            </p>
          </div>
        </div>
      </section>
  
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
                  Musterstraße 123<br />
                  12345 Musterstadt<br />
                  Deutschland
                </div>
              </div>
  
              <div>
                <div class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('impressum.organization.registration') }}</div>
                <div class="text-gray-900">
                  {{ $t('impressum.organization.registrationDetail') }}<br />
                  {{ $t('impressum.organization.court') }}: [Amtsgericht]<br />
                  {{ $t('impressum.organization.number') }}: VR [Nummer]
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
                <div class="text-gray-900">[Name des Vorsitzenden]</div>
              </div>

              <div>
                <div class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('impressum.board.viceChair') }}</div>
                <div class="text-gray-900">[Name des stellvertretenden Vorsitzenden]</div>
              </div>

              <div>
                <div class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('impressum.board.treasurer') }}</div>
                <div class="text-gray-900">[Name des Schatzmeisters]</div>
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
              <div class="flex items-start gap-3">
                <svg class="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <div>
                  <div class="text-xs sm:text-sm font-semibold text-gray-500 uppercase tracking-wide mb-1">{{ $t('impressum.contact.phone') }}</div>
                  <a href="tel:+49123456789" class="text-gray-900 hover:text-teal-600 transition-colors">+49 (0) 123 456789</a>
                </div>
              </div>

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
  const { ORGANIZATION, CONTACT_INFO } = useConstants();
  </script>