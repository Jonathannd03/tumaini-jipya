<template>
  <div class="min-h-screen bg-gradient-to-b from-gray-50 to-white">
    <UiPageHero
      :badge="$t('membership.badge')"
      :title="$t('membership.title')"
      :highlighted-text="$t('membership.titleHighlight')"
      :description="$t('membership.description')"
    />

    <div class="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <div class="max-w-6xl mx-auto">
        <!-- Membership Types -->
        <div class="mb-12 sm:mb-16 lg:mb-20">
          <div class="text-center mb-10 sm:mb-12">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              {{ $t('membership.types.title') }}
            </h2>
            <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              {{ $t('membership.types.description') }}
            </p>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            <!-- Ordentliches Mitglied -->
            <div class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-blue-100 hover:border-blue-300 hover:-translate-y-2">
              <div class="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {{ $t('membership.types.regular.title') }}
              </h3>

              <p class="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">
                {{ $t('membership.types.regular.description') }}
              </p>

              <ul class="space-y-3 mb-6">
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ $t('membership.types.regular.votingRight') }}</span>
                </li>
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ $t('membership.types.regular.activeWork') }}</span>
                </li>
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ $t('membership.types.regular.fullEngagement') }}</span>
                </li>
              </ul>
            </div>

            <!-- Fördermitglied -->
            <div class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-green-100 hover:border-green-300 hover:-translate-y-2">
              <div class="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
                </svg>
              </div>
              
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {{ $t('membership.types.supporting.title') }}
              </h3>

              <p class="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">
                {{ $t('membership.types.supporting.description') }}
              </p>

              <ul class="space-y-3 mb-6">
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ $t('membership.types.supporting.idealSupport') }}</span>
                </li>
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ $t('membership.types.supporting.materialSupport') }}</span>
                </li>
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ $t('membership.types.supporting.regularUpdates') }}</span>
                </li>
              </ul>
            </div>

            <!-- Ehrenmitglied -->
            <div class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 border-purple-100 hover:border-purple-300 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
              <div class="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
              
              <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3">
                {{ $t('membership.types.honorary.title') }}
              </h3>

              <p class="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">
                {{ $t('membership.types.honorary.description') }}
              </p>

              <ul class="space-y-3 mb-6">
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ $t('membership.types.honorary.contributionFree') }}</span>
                </li>
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ $t('membership.types.honorary.specialRecognition') }}</span>
                </li>
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>{{ $t('membership.types.honorary.volunteer') }}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Membership Process -->
        <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 border border-gray-100">
          <div class="text-center mb-8 sm:mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">{{ $t('membership.process.title') }}</h2>
            <p class="text-base sm:text-lg text-gray-600">
              {{ $t('membership.process.description') }}
            </p>
          </div>

          <div class="space-y-6 sm:space-y-8">
            <!-- Step 1 -->
            <div class="flex items-start gap-4 sm:gap-6 group">
              <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div class="flex-1 pt-1">
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">{{ $t('membership.process.step1.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {{ $t('membership.process.step1.description') }}
                </p>
              </div>
            </div>

            <!-- Connector Line -->
            <div class="ml-6 sm:ml-7 w-0.5 h-6 bg-gradient-to-b from-teal-300 to-emerald-300"></div>

            <!-- Step 2 -->
            <div class="flex items-start gap-4 sm:gap-6 group">
              <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                2
              </div>
              <div class="flex-1 pt-1">
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">{{ $t('membership.process.step2.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {{ $t('membership.process.step2.description') }}
                </p>
              </div>
            </div>

            <!-- Connector Line -->
            <div class="ml-6 sm:ml-7 w-0.5 h-6 bg-gradient-to-b from-teal-300 to-emerald-300"></div>

            <!-- Step 3 -->
            <div class="flex items-start gap-4 sm:gap-6 group">
              <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                3
              </div>
              <div class="flex-1 pt-1">
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">{{ $t('membership.process.step3.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {{ $t('membership.process.step3.description') }}
                </p>
              </div>
            </div>

            <!-- Connector Line -->
            <div class="ml-6 sm:ml-7 w-0.5 h-6 bg-gradient-to-b from-teal-300 to-emerald-300"></div>

            <!-- Step 4 -->
            <div class="flex items-start gap-4 sm:gap-6 group">
              <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                4
              </div>
              <div class="flex-1 pt-1">
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">{{ $t('membership.process.step4.title') }}</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  {{ $t('membership.process.step4.description') }}
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact CTA -->
        <UiCtaBanner
          :title="$t('membership.questions.title')"
          :description="$t('membership.questions.description')"
        >
          <template #actions>
            <NuxtLink
              to="/contact"
              class="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-accent-400 px-8 py-4 text-base font-semibold text-accent-950 shadow-lg transition-all duration-300 hover:-translate-y-0.5 hover:bg-accent-300 hover:shadow-xl sm:w-auto sm:text-lg"
            >
              {{ $t('membership.questions.contactUs') }}
            </NuxtLink>
            <a
              :href="`mailto:${CONTACT_INFO.email}`"
              class="inline-flex w-full items-center justify-center gap-2 rounded-xl border-2 border-white/40 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-white/10 sm:w-auto sm:text-lg"
            >
              {{ $t('membership.questions.sendEmail') }}
            </a>
          </template>
        </UiCtaBanner>
      </div>
    </div>
  </div>
</template>

<script setup>
const { ORGANIZATION, CONTACT_INFO } = useConstants();
</script>