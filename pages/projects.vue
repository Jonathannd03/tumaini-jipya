<template>
  <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-20 right-0 w-72 h-72 bg-teal-100/20 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-0 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <!-- Section Header -->
      <div class="text-center mb-12 sm:mb-14 lg:mb-16">
        <div class="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4 sm:mb-6">
          {{ $t('projects.badge') }}
        </div>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 sm:mb-4">
          {{ $t('projects.title') }} <span class="text-teal-600">{{ $t('projects.titleHighlight') }}</span>
        </h2>
        <p class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed px-4">
          {{ $t('projects.description') }}
        </p>
      </div>

      <!-- Projects Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        <!-- Project Card 1: Bildungszentrum -->
        <div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <!-- Project Image -->
          <div class="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-blue-500 to-indigo-600">
            <div class="absolute inset-0 flex items-center justify-center text-white">
              <svg class="w-16 h-16 sm:w-20 sm:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
              </svg>
            </div>
            <div class="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
              {{ $t('projects.inPlanning') }}
            </div>
          </div>

          <!-- Project Content -->
          <div class="p-5 sm:p-6">
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
              {{ $t('projects.educationCenter.title') }}
            </h3>
            <p class="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
              {{ $t('projects.educationCenter.description') }}
            </p>

            <!-- Progress Bar -->
            <div class="mb-4">
              <div class="flex justify-between text-xs sm:text-sm mb-2">
                <span class="text-gray-600">{{ $t('projects.progress') }}</span>
                <span class="font-semibold text-gray-900">25%</span>
              </div>
              <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500" style="width: 25%"></div>
              </div>
            </div>

            <!-- Project Stats -->
            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <div>
                <div class="text-xs text-gray-500 mb-1">{{ $t('projects.beneficiaries') }}</div>
                <div class="text-base sm:text-lg font-bold text-gray-900">150+</div>
              </div>
              <a href="/projekte" class="flex items-center gap-1 text-teal-600 hover:text-teal-700 font-semibold text-sm group-hover:gap-2 transition-all">
                <span>{{ $t('projects.details') }}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Project Card 2: Klimaschutz -->
        <div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
          <div class="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-green-500 to-emerald-600">
            <div class="absolute inset-0 flex items-center justify-center text-white">
              <svg class="w-16 h-16 sm:w-20 sm:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div class="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
              {{ $t('projects.inPlanning') }}
            </div>
          </div>

          <div class="p-5 sm:p-6">
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
              {{ $t('projects.climateInitiative.title') }}
            </h3>
            <p class="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
              {{ $t('projects.climateInitiative.description') }}
            </p>

            <div class="mb-4">
              <div class="flex justify-between text-xs sm:text-sm mb-2">
                <span class="text-gray-600">{{ $t('projects.progress') }}</span>
                <span class="font-semibold text-gray-900">25%</span>
              </div>
              <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-green-500 to-emerald-600 transition-all duration-500" style="width: 25%"></div>
              </div>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <div>
                <div class="text-xs text-gray-500 mb-1">{{ $t('projects.beneficiaries') }}</div>
                <div class="text-base sm:text-lg font-bold text-gray-900">500+</div>
              </div>
              <a href="/projekte" class="flex items-center gap-1 text-teal-600 hover:text-teal-700 font-semibold text-sm group-hover:gap-2 transition-all">
                <span>{{ $t('projects.details') }}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <!-- Project Card 3: Notfall-Hilfspaket -->
        <div class="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 md:col-span-2 lg:col-span-1">
          <div class="relative h-48 sm:h-56 overflow-hidden bg-gradient-to-br from-red-500 to-pink-600">
            <div class="absolute inset-0 flex items-center justify-center text-white">
              <svg class="w-16 h-16 sm:w-20 sm:h-20" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <div class="absolute top-3 right-3 sm:top-4 sm:right-4 px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-semibold text-gray-900">
              {{ $t('projects.inPlanning') }}
            </div>
          </div>

          <div class="p-5 sm:p-6">
            <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2 sm:mb-3 group-hover:text-teal-600 transition-colors">
              {{ $t('projects.emergencyAid.title') }}
            </h3>
            <p class="text-sm sm:text-base text-gray-600 mb-4 leading-relaxed">
              {{ $t('projects.emergencyAid.description') }}
            </p>

            <div class="mb-4">
              <div class="flex justify-between text-xs sm:text-sm mb-2">
                <span class="text-gray-600">{{ $t('projects.progress') }}</span>
                <span class="font-semibold text-gray-900">25%</span>
              </div>
              <div class="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-red-500 to-pink-600 transition-all duration-500" style="width: 25%"></div>
              </div>
            </div>

            <div class="flex items-center justify-between pt-4 border-t border-gray-100">
              <div>
                <div class="text-xs text-gray-500 mb-1">{{ $t('projects.beneficiaries') }}</div>
                <div class="text-base sm:text-lg font-bold text-gray-900">300+</div>
              </div>
              <a href="/projekte" class="flex items-center gap-1 text-teal-600 hover:text-teal-700 font-semibold text-sm group-hover:gap-2 transition-all">
                <span>{{ $t('projects.details') }}</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- View All CTA -->
      <div class="mt-12 sm:mt-14 lg:mt-16 text-center">
        <a href="/projekte" class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gray-900 text-white rounded-full font-semibold text-base sm:text-lg shadow-lg hover:bg-gray-800 transform hover:-translate-y-1 transition-all duration-300">
          <span>{{ $t('projects.viewAll') }}</span>
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
          </svg>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional script needed - all content is inline
</script>