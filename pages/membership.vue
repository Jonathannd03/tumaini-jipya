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
            <span class="text-sm font-medium">Werden Sie Teil der Gemeinschaft</span>
          </div>
          
          <h1 class="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6 leading-tight">
            Mitgliedschaft bei <span class="text-emerald-300">Tumaini Jipya e.V.</span>
          </h1>
          <p class="text-base sm:text-lg lg:text-xl text-white/90 leading-relaxed">
            Unterstützen Sie unsere Mission und werden Sie Teil einer Bewegung für positive Veränderung
          </p>
        </div>
      </div>
    </section>

    <div class="container mx-auto px-4 sm:px-6 py-12 sm:py-16 lg:py-20">
      <div class="max-w-6xl mx-auto">
        <!-- Membership Types -->
        <div class="mb-12 sm:mb-16 lg:mb-20">
          <div class="text-center mb-10 sm:mb-12">
            <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Arten der Mitgliedschaft
            </h2>
            <p class="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto">
              Wählen Sie die Form der Mitgliedschaft, die am besten zu Ihnen passt
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
                Ordentliches Mitglied
              </h3>
              
              <p class="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">
                Aktive Mitarbeit mit Stimmrecht in der Mitgliederversammlung
              </p>
              
              <ul class="space-y-3 mb-6">
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>Stimmrecht</span>
                </li>
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>Aktive Mitarbeit</span>
                </li>
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>Volles Engagement</span>
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
                Fördermitglied
              </h3>
              
              <p class="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">
                Unterstützung des Vereins ideell oder materiell
              </p>
              
              <ul class="space-y-3 mb-6">
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>Ideelle Unterstützung</span>
                </li>
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>Materielle Förderung</span>
                </li>
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>Regelmäßige Updates</span>
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
                Ehrenmitglied
              </h3>
              
              <p class="text-sm sm:text-base text-gray-600 mb-5 sm:mb-6 leading-relaxed">
                Für verdiente Personen durch Beschluss der Mitgliederversammlung
              </p>
              
              <ul class="space-y-3 mb-6">
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>Beitragsfrei</span>
                </li>
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>Besondere Anerkennung</span>
                </li>
                <li class="flex items-start gap-2 text-sm sm:text-base text-gray-700">
                  <svg class="w-5 h-5 text-purple-600 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
                  </svg>
                  <span>Ehrenamt</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <!-- Membership Process -->
        <div class="bg-white rounded-2xl shadow-lg p-6 sm:p-8 lg:p-10 mb-12 sm:mb-16 border border-gray-100">
          <div class="text-center mb-8 sm:mb-10">
            <h2 class="text-2xl sm:text-3xl font-bold text-gray-900 mb-3">Mitglied werden</h2>
            <p class="text-base sm:text-lg text-gray-600">
              In vier einfachen Schritten zur Mitgliedschaft
            </p>
          </div>

          <div class="space-y-6 sm:space-y-8">
            <!-- Step 1 -->
            <div class="flex items-start gap-4 sm:gap-6 group">
              <div class="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-teal-500 to-emerald-600 rounded-xl flex items-center justify-center text-white font-bold text-lg sm:text-xl shadow-lg group-hover:scale-110 transition-transform duration-300">
                1
              </div>
              <div class="flex-1 pt-1">
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">Antrag stellen</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Schriftlicher Aufnahmeantrag an den Vorstand
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
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">Vorstandsentscheidung</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Beschluss über die Aufnahme durch den Vorstand
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
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">Probezeit</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Sechsmonatige Probezeit ohne Beitragspflicht
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
                <h3 class="text-lg sm:text-xl font-bold text-gray-900 mb-2">Vollmitgliedschaft</h3>
                <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
                  Nach erfolgreicher Probezeit volle Mitgliederrechte
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Contact CTA -->
        <div class="bg-gradient-to-br from-teal-600 to-emerald-700 rounded-2xl sm:rounded-3xl p-8 sm:p-10 lg:p-12 shadow-2xl text-center text-white relative overflow-hidden">
          <div class="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
          <div class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
          
          <div class="relative">
            <div class="w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
            </div>
            
            <h2 class="text-2xl sm:text-3xl font-bold mb-4">Haben Sie Fragen?</h2>
            <p class="text-base sm:text-lg text-white/90 mb-6 sm:mb-8 max-w-2xl mx-auto">
              Kontaktieren Sie uns für weitere Informationen zur Mitgliedschaft
            </p>
            
            <div class="flex flex-col sm:flex-row items-center justify-center gap-4">
              <NuxtLink
                to="/contact"
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 hover:bg-emerald-50 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg"
              >
                <span>Kontakt aufnehmen</span>
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 7l5 5m0 0l-5 5m5-5H6"/>
                </svg>
              </NuxtLink>
              
              <a 
                href="mailto:info@tumaini-jipya.org" 
                class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm font-semibold rounded-lg transition-all duration-300 text-base sm:text-lg"
              >
                <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                </svg>
                <span>E-Mail senden</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
// No additional script needed
</script>