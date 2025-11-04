<template>
  <header class="bg-white/95 backdrop-blur-md shadow-sm sticky top-0 z-50 border-b border-gray-100">
    <div class="container mx-auto px-4 sm:px-6">
      <div class="flex justify-between items-center py-3 sm:py-4">
        <!-- Logo Section -->
        <NuxtLink to="/" class="flex items-center gap-2 sm:gap-3 flex-shrink min-w-0">
          <img :src="ORGANIZATION.logoPath" :alt="`${ORGANIZATION.fullName} Logo`" class="h-8 w-8 sm:h-12 sm:w-12 object-contain flex-shrink-0">
          <div class="flex flex-col min-w-0">
            <span class="text-base sm:text-xl font-bold text-teal-700 leading-tight">{{ ORGANIZATION.fullName }}</span>
            <span class="text-xs text-gray-700 font-medium">e.V.</span>
          </div>
        </NuxtLink>
        
        <!-- Desktop Navigation - visible on tablets and up -->
        <nav class="hidden md:block">
          <ul class="flex items-center gap-4 md:gap-6 lg:gap-8">
            <li v-for="link in NAVIGATION_LINKS" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="text-gray-700 hover:text-teal-700 font-medium transition-colors text-sm lg:text-base"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>
        
        <!-- Action Buttons -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Language Switcher - hidden on mobile, visible on larger screens -->
          <div class="hidden md:block">
            <UiLanguageSwitcher />
          </div>

          <!-- Desktop Donate Button -->
          <NuxtLink to="/donate"
            class="hidden sm:inline-flex items-center gap-2 px-4 lg:px-5 py-2 lg:py-2.5 border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold rounded-lg transition-all duration-300 text-sm lg:text-base"
          >
            <svg class="w-4 h-4 lg:w-5 lg:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span class="hidden md:inline">{{ $t('nav.donate') }}</span>
          </NuxtLink>

          <!-- Mobile Donate Button (Icon only) -->
          <button
            class="sm:hidden inline-flex items-center justify-center p-2 border-2 border-teal-600 text-teal-700 hover:bg-teal-50 rounded-lg transition-all duration-300"
            :aria-label="$t('nav.donate')"
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
            <span class="hidden sm:inline">{{ $t('nav.participate') }}</span>
          </NuxtLink>

          <!-- Mobile Menu Button - only on mobile screens -->
          <button
            class="md:hidden p-2 text-gray-600 hover:text-teal-700 hover:bg-gray-100 rounded-lg transition-colors"
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

    <!-- Mobile Menu - only on mobile screens -->
    <div
      v-if="mobileMenuOpen"
      class="md:hidden border-t border-gray-100 bg-white"
    >
      <nav class="container mx-auto px-4 sm:px-6 py-4">
        <ul class="space-y-2">
          <li v-for="link in NAVIGATION_LINKS" :key="link.href">
            <NuxtLink
              :to="link.href"
              class="block px-4 py-3 text-gray-700 hover:bg-teal-50 hover:text-teal-700 rounded-lg font-medium transition-colors"
              @click="mobileMenuOpen = false"
            >
              {{ link.label }}
            </NuxtLink>
          </li>
        </ul>

        <!-- Mobile Menu Actions -->
        <div class="mt-4 pt-4 border-t border-gray-100 space-y-2">
          <NuxtLink to="/donate"
            class="w-full flex items-center justify-center gap-2 px-4 py-3 border-2 border-teal-600 text-teal-700 hover:bg-teal-50 font-semibold rounded-lg transition-all duration-300"
            @click="mobileMenuOpen = false"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            {{ $t('nav.donate') }}
          </NuxtLink>

          <NuxtLink to="/membership"
            class="w-full flex items-center justify-center gap-2 px-4 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
            @click="mobileMenuOpen = false"
          >
            <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/>
            </svg>
            {{ $t('nav.participate') }}
          </NuxtLink>

          <!-- Mobile Language Switcher -->
          <div class="flex justify-center pt-2">
            <UiLanguageSwitcher />
          </div>
        </div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue';

const { NAVIGATION_LINKS, ORGANIZATION } = useConstants();
const mobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  mobileMenuOpen.value = !mobileMenuOpen.value;
};
</script>