<template>
  <section class="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
    <!-- Decorative elements -->
    <div class="absolute top-0 right-0 w-64 h-64 bg-teal-100/30 rounded-full blur-3xl"></div>
    <div class="absolute bottom-0 left-0 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-4 sm:px-6 relative">
      <!-- Header -->
      <div class="text-center mb-10 sm:mb-12 lg:mb-16">
        <div class="inline-flex items-center gap-2 bg-teal-100 text-teal-700 rounded-full px-4 py-2 mb-4 text-sm font-medium">
          <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
          </svg>
          Gemeinnützig anerkannt
        </div>
        
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
          Unsere <span class="text-teal-600">Mission</span>
        </h2>
        <p class="text-base sm:text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Gemäß unserer Satzung verfolgen wir ausschließlich gemeinnützige Zwecke im Sinne der Abgabenordnung.
        </p>
      </div>
      
      <!-- Mission Cards Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        <!-- Humanitäre Hilfe -->
        <div class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-red-200 hover:-translate-y-2">
          <div class="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-red-500 to-pink-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clip-rule="evenodd"/>
            </svg>
          </div>
          
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            Humanitäre Hilfe
          </h3>
          
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
            Bereitstellung von Nahrungsmitteln, Kleidung, Medikamenten und Unterkünften für Menschen in Krisenregionen.
          </p>
          
          <div class="mt-5 sm:mt-6 flex items-center text-red-600 font-semibold text-sm group-hover:gap-2 transition-all">
            <span>Mehr erfahren</span>
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>

        <!-- Klimaschutz -->
        <div class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-green-200 hover:-translate-y-2">
          <div class="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clip-rule="evenodd"/>
            </svg>
          </div>
          
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            Klimaschutz
          </h3>
          
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
            Förderung klimafreundlicher Projekte und Unterstützung lokaler Initiativen für eine nachhaltige Zukunft.
          </p>
          
          <div class="mt-5 sm:mt-6 flex items-center text-green-600 font-semibold text-sm group-hover:gap-2 transition-all">
            <span>Mehr erfahren</span>
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>

        <!-- Bildungsförderung -->
        <div class="group bg-white rounded-2xl p-6 sm:p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 hover:border-blue-200 hover:-translate-y-2 md:col-span-2 lg:col-span-1">
          <div class="w-14 h-14 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-indigo-600 rounded-xl flex items-center justify-center mb-5 sm:mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
            <svg class="w-7 h-7 sm:w-8 sm:h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"/>
            </svg>
          </div>
          
          <h3 class="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4">
            Bildungsförderung
          </h3>
          
          <p class="text-sm sm:text-base text-gray-600 leading-relaxed">
            Durchführung von Bildungsprojekten, Sprachförderung und Freizeitgestaltung für geflüchtete Kinder.
          </p>
          
          <div class="mt-5 sm:mt-6 flex items-center text-blue-600 font-semibold text-sm group-hover:gap-2 transition-all">
            <span>Mehr erfahren</span>
            <svg class="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
// No additional script needed - all content is inline
</script>