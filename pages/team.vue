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
                <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
              </svg>
              <span class="text-sm font-medium">Unser Team</span>
            </div>
            
            <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
              Das Team von <span class="text-emerald-300">Tumaini Jipya e.V.</span>
            </h1>
            <p class="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
              Engagierte Menschen, die gemeinsam für eine bessere Zukunft arbeiten
            </p>
          </div>
        </div>
      </section>
  
      <!-- Vorstand Section -->
      <section class="py-12 sm:py-16 lg:py-20">
        <div class="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div class="text-center mb-10 sm:mb-12 lg:mb-16">
            <div class="inline-flex items-center gap-2 bg-teal-100 text-teal-700 rounded-full px-4 py-2 mb-4 text-sm font-medium">
              <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
              Gemäß § 8 der Vereinssatzung
            </div>
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Der Vorstand
            </h2>
            <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Der Vorstand führt die laufenden Geschäfte des Vereins und vertritt ihn nach außen
            </p>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 mb-12 sm:mb-16">
            <!-- Vorsitzende/r -->
            <div class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 hover:-translate-y-2">
              <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/>
                </svg>
              </div>
              <div class="text-center">
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  [Name]
                </h3>
                <p class="text-teal-600 font-semibold mb-3 text-sm sm:text-base">
                  Vorsitzende/r
                </p>
                <p class="text-sm sm:text-base text-gray-600">
                  Vertretungsberechtigt gemäß § 26 BGB
                </p>
              </div>
            </div>
  
            <!-- Stellvertreter/in -->
            <div class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 hover:-translate-y-2">
              <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
                </svg>
              </div>
              <div class="text-center">
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  [Name]
                </h3>
                <p class="text-teal-600 font-semibold mb-3 text-sm sm:text-base">
                  Stellvertreter/in
                </p>
                <p class="text-sm sm:text-base text-gray-600">
                  Vertretungsberechtigt gemäß § 26 BGB
                </p>
              </div>
            </div>
  
            <!-- Schatzmeister/in -->
            <div class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-teal-200 hover:-translate-y-2 md:col-span-3 lg:col-span-1">
              <div class="w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-5 sm:mb-6 mx-auto group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"/>
                </svg>
              </div>
              <div class="text-center">
                <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-2">
                  [Name]
                </h3>
                <p class="text-teal-600 font-semibold mb-3 text-sm sm:text-base">
                  Schatzmeister/in
                </p>
                <p class="text-sm sm:text-base text-gray-600">
                  Verwaltung des Vereinsvermögens
                </p>
              </div>
            </div>
          </div>
  
          <!-- Info Box -->
          <div class="bg-gradient-to-br from-teal-50 to-emerald-50 rounded-2xl p-6 sm:p-8 border border-teal-100">
            <div class="flex items-start gap-4">
              <div class="flex-shrink-0 w-10 h-10 sm:w-12 sm:h-12 bg-teal-600 rounded-xl flex items-center justify-center">
                <svg class="w-5 h-5 sm:w-6 sm:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
              </div>
              <div class="flex-1">
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">Amtszeit und Aufgaben</h3>
                <p class="text-sm sm:text-base text-gray-700 leading-relaxed mb-3">
                  Die Amtszeit des Vorstands beträgt drei Jahre, eine Wiederwahl ist zulässig. Der Vorstand führt die laufenden Geschäfte des Vereins, verwaltet das Vereinsvermögen und beruft die Mitgliederversammlung ein.
                </p>
                <p class="text-xs sm:text-sm text-gray-600 italic">
                  Gemäß § 8 Absatz 2 und 3 der Vereinssatzung
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Mitgliederversammlung Section -->
      <section class="py-12 sm:py-16 lg:py-20 bg-gray-50">
        <div class="container mx-auto px-4 sm:px-6 max-w-6xl">
          <div class="text-center mb-10 sm:mb-12">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Mitgliederversammlung
            </h2>
            <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Das höchste Organ des Vereins
            </p>
          </div>
  
          <div class="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            <!-- Ordentliche Versammlung -->
            <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <div class="flex items-start gap-4 mb-4">
                <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                  <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">Ordentliche Versammlung</h3>
                  <p class="text-sm sm:text-base text-gray-600">Findet einmal jährlich statt</p>
                </div>
              </div>
              <p class="text-sm sm:text-base text-gray-700 leading-relaxed">
                Die Einladung erfolgt spätestens zwei Monate vor dem Termin der Mitgliederversammlung, jeweils schriftlich.
              </p>
              <p class="text-xs sm:text-sm text-gray-500 mt-3 italic">§ 9 Absatz 1</p>
            </div>
  
            <!-- Beschlussfassung -->
            <div class="bg-white rounded-2xl p-6 sm:p-8 shadow-lg border border-gray-100">
              <div class="flex items-start gap-4 mb-4">
                <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center shadow-md">
                  <svg class="w-6 h-6 sm:w-7 sm:h-7 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-6 9l2 2 4-4"/>
                  </svg>
                </div>
                <div>
                  <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">Beschlussfassung</h3>
                  <p class="text-sm sm:text-base text-gray-600">Mehrheitsregeln</p>
                </div>
              </div>
              <ul class="space-y-2 text-sm sm:text-base text-gray-700">
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>Einfache Mehrheit für normale Beschlüsse</span>
                </li>
                <li class="flex items-start gap-2">
                  <svg class="w-5 h-5 text-teal-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>Zweidrittelmehrheit für Satzungsänderungen</span>
                </li>
              </ul>
              <p class="text-xs sm:text-sm text-gray-500 mt-3 italic">§ 9 Absatz 2</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- CTA Section -->
      <section class="py-12 sm:py-16 lg:py-20">
        <div class="container mx-auto px-4 sm:px-6 max-w-4xl text-center">
          <div class="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden">
            <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
            
            <div class="relative">
              <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-4 sm:mb-6">
                Werden Sie Teil unseres Teams
              </h2>
              <p class="text-base sm:text-lg lg:text-xl text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
                Wir suchen engagierte Menschen, die mit uns gemeinsam Gutes bewirken möchten.
              </p>
              <a 
                href="/membership" 
                class="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 hover:bg-emerald-50 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg"
              >
                <span>Jetzt Mitglied werden</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  </template>
  
  <script setup>
  // Page meta (for Nuxt)
  // useHead({
  //   title: 'Unser Team - Tumaini Jipya e.V.',
  //   meta: [
  //     { name: 'description', content: 'Lernen Sie den Vorstand und das Team von Tumaini Jipya e.V. kennen' }
  //   ]
  // });
  </script>