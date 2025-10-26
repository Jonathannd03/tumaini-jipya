<template>
  <header class="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-3 sm:py-4">
        <!-- Logo Section -->
        <NuxtLink to="/" class="flex items-center gap-2 sm:gap-3">
          <img src="/images/logo.png" alt="Tumaini Jipya Logo" class="h-50 w-10 sm:h-12 sm:w-12 object-contain">
          <div class="flex flex-col">
            <span class="text-lg sm:text-xl font-bold text-teal-700 leading-tight">Tumaini Jipya</span>
            <span class="text-xs text-gray-700 font-medium">e.V.</span>
          </div>
        </NuxtLink>
        
        <!-- Desktop Navigation -->
        <Navigation :links="navLinks" class="hidden lg:block" />
        
        <!-- Action Buttons -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Desktop Donate Button -->
          <NuxtLink to="/donate" 
            class="hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold rounded-lg transition-all duration-300 text-sm lg:text-base"
            @click="toggleDonateModal"
          >
            <svg class="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span class="hidden md:inline">Spenden</span>
          </NuxtLink>
          
          <!-- Mobile Donate Button (Icon only) -->
          <button 
            class="sm:hidden inline-flex items-center justify-center p-2 border-2 border-teal-600 text-teal-700 hover:bg-teal-50 rounded-lg transition-all duration-300"
            aria-label="Spenden"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
          </button>
          
          <!-- Mitmachen Button -->
          <NuxtLink to="/membership" 
            class="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 lg:px-5 py-2 lg:py-2.5 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-sm lg:text-base"
          >
            <svg class="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            <span class="hidden sm:inline">Mitmachen</span>
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button 
            class="lg:hidden p-2 text-gray-600 hover:text-teal-700 hover:bg-gray-100 rounded-lg transition-colors"
            @click="toggleMobileMenu"
            aria-label="Menu"
          >
            <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu -->
    <div 
      v-if="mobileMenuOpen" 
      class="lg:hidden border-t border-gray-100 bg-white"
    >
      <nav class="container mx-auto px-4 sm:px-6 py-4">
        <ul class="space-y-2">
          <li v-for="link in navLinks" :key="link.href">
            <a 
              :href="link.href" 
              class="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg font-medium transition-colors"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
            </a>
          </li>
        </ul>
        
        <!-- Mobile Menu Actions -->
        <div class="mt-4 pt-4 border-t border-gray-100 space-y-2">
          <button 
            class="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold rounded-lg transition-all duration-300"
            @click="toggleDonateModal(); mobileMenuOpen = false"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            Spenden
          </button>
          
          <button 
            class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            @click="navigateTo('/membership'); mobileMenuOpen = false"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            Mitmachen
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const mobileMenuOpen = ref(false);

const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Über uns', href: '/about-us' },
  { label: 'Projekte', href: '/projects' },
  { label: 'Mitgliedschaft', href: '/membership' },
  { label: 'Kontakt', href: '/contact' }
];

const navigateTo = (path) => {
  console.log('Navigate to:', path);
};

const toggleDonateModal = () => {
  console.log('Toggle donate modal');
};

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>