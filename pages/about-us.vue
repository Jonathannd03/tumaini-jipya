<template>
  <section class="py-12 sm:py-16 lg:py-20 bg-white relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-96 h-96 bg-teal-50 rounded-full blur-3xl opacity-50"></div>
    <div class="absolute bottom-0 left-0 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50"></div>
    
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 lg:gap-16 items-center">
        <!-- Left Content -->
        <div class="order-2 lg:order-1">
          <div class="inline-block px-4 py-2 bg-teal-100 text-teal-700 rounded-full text-sm font-semibold mb-4 sm:mb-6">
            {{ $t('aboutUs.badge') }}
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6 leading-tight">
            {{ $t('aboutUs.title') }} <span class="text-teal-600">{{ $t('aboutUs.titleHighlight') }}</span>
          </h2>

          <p class="text-base sm:text-lg text-gray-600 mb-4 sm:mb-6 leading-relaxed">
            {{ $t('aboutUs.intro1') }}
          </p>

          <p class="text-base sm:text-lg text-gray-600 mb-6 sm:mb-8 leading-relaxed">
            {{ $t('aboutUs.intro2') }}
          </p>

          <!-- Values -->
          <div class="space-y-4 sm:space-y-5">
            <!-- Transparenz -->
            <div class="flex items-start gap-3 sm:gap-4 group">
              <div class="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-1">{{ $t('aboutUs.transparency.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ $t('aboutUs.transparency.description') }}</p>
              </div>
            </div>

            <!-- Nachhaltigkeit -->
            <div class="flex items-start gap-3 sm:gap-4 group">
              <div class="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-1">{{ $t('aboutUs.sustainability.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ $t('aboutUs.sustainability.description') }}</p>
              </div>
            </div>

            <!-- Toleranz & Respekt -->
            <div class="flex items-start gap-3 sm:gap-4 group">
              <div class="flex-shrink-0 w-11 h-11 sm:w-12 sm:h-12 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-md">
                <svg class="w-5 h-5 sm:w-6 sm:h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-base sm:text-lg font-bold text-gray-900 mb-1">{{ $t('aboutUs.tolerance.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">{{ $t('aboutUs.tolerance.description') }}</p>
              </div>
            </div>
          </div>

          <div class="mt-8 sm:mt-10">
            <a
              href="/team"
              class="inline-flex items-center gap-2 text-teal-600 hover:text-teal-700 font-semibold text-sm sm:text-base group"
            >
              <span>{{ $t('aboutUs.learnMore') }}</span>
              <svg class="w-4 h-4 sm:w-5 sm:h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </a>
          </div>
        </div>

        <!-- Right Image/Illustration -->
        <div class="relative order-1 lg:order-2">
          <div class="relative rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl">
            <!-- Gradient Background with Logo -->
            <div class="aspect-square bg-gradient-to-br from-teal-600 via-emerald-600 to-teal-800 flex items-center justify-center p-8 sm:p-12">
              <div class="text-center text-white">
                <img :src="ORGANIZATION.logoPath" :alt="`${ORGANIZATION.fullName} Logo`" class="w-32 h-32 sm:w-48 sm:h-48 lg:w-64 lg:h-64 mx-auto object-contain">
              </div>
            </div>
          </div>

          <!-- Floating Stats Card -->
          <div class="absolute -bottom-4 sm:-bottom-6 lg:-bottom-8 -right-4 sm:-right-6 lg:-right-8 bg-white rounded-xl sm:rounded-2xl shadow-2xl p-4 sm:p-6 border border-gray-100">
            <div class="flex items-center gap-3 sm:gap-4">
              <div class="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-lg sm:rounded-xl flex items-center justify-center text-white shadow-lg">
                <svg class="w-6 h-6 sm:w-7 sm:h-7 lg:w-8 lg:h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <div>
                <div class="text-2xl sm:text-3xl font-bold text-gray-900">100%</div>
                <div class="text-xs sm:text-sm text-gray-600 font-medium">{{ $t('aboutUs.fullyTransparent') }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const { ORGANIZATION } = useConstants();
</script>