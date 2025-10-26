<template>
  <section class="relative bg-gradient-to-br from-emerald-700 via-teal-600 to-blue-700 text-white overflow-hidden">
    <!-- Subtle pattern overlay -->
    <div class="absolute inset-0 opacity-10">
      <div class="absolute inset-0" style="background-image: radial-gradient(circle at 2px 2px, white 1px, transparent 0); background-size: 40px 40px;"></div>
    </div>
    
    <!-- Gradient overlay for depth -->
    <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent"></div>
    
    <!-- Decorative elements -->
    <div class="absolute top-20 right-20 w-72 h-72 bg-white/5 rounded-full blur-3xl"></div>
    <div class="absolute bottom-20 left-20 w-96 h-96 bg-emerald-400/10 rounded-full blur-3xl"></div>
    
    <div class="container mx-auto px-6 py-20 md:py-32 relative">
      <div class="max-w-3xl">
        <!-- Subtle badge -->
        <div class="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8">
          <span class="w-2 h-2 bg-emerald-400 rounded-full animate-pulse"></span>
          <span class="text-sm font-medium">Gemeinsam für eine bessere Zukunft</span>
        </div>
        
        <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          Neue Hoffnung<br />
          <span class="text-emerald-300">schaffen</span>
        </h1>
        
        <p class="text-lg md:text-xl text-white/90 mb-10 leading-relaxed max-w-2xl">
          Tumaini Jipya e.V. setzt sich ein für humanitäre Hilfe, Klimaschutz und Bildungsförderung in Krisenregionen weltweit.
        </p>
        
        <div class="flex flex-col sm:flex-row gap-4">
          <NuxtLink to="/projects" 
            class="px-8 py-4 bg-white text-teal-700 hover:bg-emerald-50 font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 text-lg"
            
          >
            Unsere Projekte entdecken
          </NuxtLink>
          
          <NuxtLink to="/donate" 
            class="px-8 py-4 border-2 border-white/30 hover:bg-white/10 backdrop-blur-sm font-semibold rounded-lg transition-all duration-300 text-lg"
            @click="navigateTo('/membership')"
          >
            Jetzt unterstützen
          </NuxtLink>
        </div>
        
        <!-- Trust indicators -->
        <div class="flex flex-wrap items-center gap-6 mt-12 pt-12 border-t border-white/20">
          <div class="flex items-center gap-2 text-sm text-white/80">
            <svg class="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Gemeinnützig anerkannt</span>
          </div>
          <div class="flex items-center gap-2 text-sm text-white/80">
            <svg class="w-5 h-5 text-emerald-300" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
            <span>Transparente Mittelverwendung</span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
const navigateTo = (path) => {
  // Your navigation logic here
  console.log('Navigate to:', path);
};
</script>