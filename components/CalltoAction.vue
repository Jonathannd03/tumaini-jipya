<template>
    <section class="relative py-12 sm:py-16 lg:py-20 bg-gradient-to-br from-teal-600 via-teal-700 to-emerald-700 text-white overflow-hidden">
      <!-- Decorative elements -->
      <div class="absolute top-0 left-0 w-64 h-64 bg-white/5 rounded-full blur-3xl"></div>
      <div class="absolute bottom-0 right-0 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
      <div class="absolute inset-0 opacity-10">
        <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
      </div>
      
      <div class="container mx-auto px-4 sm:px-6 text-center relative">
        <!-- Icon -->
        <div class="inline-flex items-center justify-center w-16 h-16 sm:w-20 sm:h-20 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 sm:mb-8">
          <svg class="w-8 h-8 sm:w-10 sm:h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
          </svg>
        </div>
        
        <h2 class="text-2xl sm:text-3xl lg:text-4xl font-bold mb-3 sm:mb-4 px-4">
          Werden Sie Teil unserer <span class="text-emerald-300">Gemeinschaft</span>
        </h2>
        
        <p class="text-base sm:text-lg lg:text-xl mb-8 sm:mb-10 max-w-2xl mx-auto leading-relaxed text-white/90 px-4">
          Unterstützen Sie unsere Arbeit als Mitglied, Förderer oder ehrenamtlicher Helfer.
        </p>
        
        <div class="flex flex-col sm:flex-row items-center justify-center gap-4 px-4">
          <button 
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white text-teal-700 hover:bg-emerald-50 font-semibold rounded-lg shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 text-base sm:text-lg"
            @click="navigateTo('/membership')"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18 9v3m0 0v3m0-3h3m-3 0h-3m-2-5a4 4 0 11-8 0 4 4 0 018 0zM3 20a6 6 0 0112 0v1H3v-1z"/>
            </svg>
            Jetzt Mitglied werden
          </button>
          
          <button 
            class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm font-semibold rounded-lg transition-all duration-300 text-base sm:text-lg"
            @click="navigateTo('/contact')"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
            </svg>
            Kontakt aufnehmen
          </button>
        </div>
        
        <!-- Trust indicators -->
        <div class="flex flex-wrap items-center justify-center gap-6 sm:gap-8 mt-10 sm:mt-12 pt-8 sm:pt-10 border-t border-white/20">
          <div class="flex items-center gap-2 text-sm sm:text-base text-white/90">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="font-medium">Steuerlich absetzbar</span>
          </div>
          
          <div class="flex items-center gap-2 text-sm sm:text-base text-white/90">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span class="font-medium">100% transparent</span>
          </div>
          
          <!-- <div class="flex items-center gap-2 text-sm sm:text-base text-white/90">
            <svg class="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z"/>
            </svg>
            <span class="font-medium">500+ Mitglieder</span>
          </div> -->
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  const navigateTo = (path) => {
    console.log('Navigate to:', path);
    // Add your navigation logic here
  };
  </script>