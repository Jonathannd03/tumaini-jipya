<template>
    <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <!-- Hero Section -->
      <section class="relative bg-gradient-to-br from-teal-700 via-teal-600 to-emerald-700 text-white overflow-hidden">
        <div class="absolute inset-0 opacity-10">
          <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
        </div>
        <div class="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
        <div class="absolute bottom-20 left-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
        
        <div class="container mx-auto px-4 sm:px-6 py-16 sm:py-20 lg:py-24 relative">
          <div class="max-w-3xl mx-auto text-center">
            <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-6 sm:mb-8">
              <svg class="w-4 h-4 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
              </svg>
              <span class="text-sm font-medium">{{ $t('donate.badge') }}</span>
            </div>

            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              {{ $t('donate.title') }} <span class="text-emerald-300">{{ $t('donate.titleHighlight') }}</span>
            </h1>
            <p class="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
              {{ $t('donate.description') }}
            </p>
          </div>
        </div>
      </section>
  
      <div class="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
        <div class="max-w-4xl mx-auto">
          <!-- Coming Soon Notice -->
          <div class="bg-gradient-to-br from-amber-50 to-orange-50 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-xl border-2 border-amber-200 mb-12 sm:mb-16 relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-amber-100/50 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-orange-100/50 rounded-full blur-3xl"></div>
            
            <div class="relative text-center">
              <div class="w-20 h-20 sm:w-24 sm:h-24 bg-gradient-to-br from-amber-500 to-orange-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-lg animate-pulse">
                <svg class="w-10 h-10 sm:w-12 sm:h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                {{ $t('donate.comingSoon.title') }}
              </h2>
              <p class="text-base sm:text-lg text-gray-700 mb-6 leading-relaxed max-w-2xl mx-auto">
                {{ $t('donate.comingSoon.description') }}
              </p>
              <div class="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-semibold text-gray-900">
                <svg class="w-5 h-5 text-amber-600" fill="currentColor" viewBox="0 0 20 20">
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
  
          <!-- Newsletter Signup -->
          <div class="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl text-center text-white relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
            
            <div class="relative">
              <div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
                <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"/>
                </svg>
              </div>
              
              <h2 class="text-2xl sm:text-3xl font-bold mb-4">{{ $t('donate.newsletter.title') }}</h2>
              <p class="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                {{ $t('donate.newsletter.description') }}
              </p>

              <NuxtLink
                to="/contact"
                class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 hover:bg-emerald-50 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg"
              >
                <span>{{ $t('donate.newsletter.contactUs') }}</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </NuxtLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>

  <script setup>
  const { ORGANIZATION } = useConstants();
  </script>