<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-teal-900 text-white">
    <div class="container mx-auto px-4 sm:px-6 py-8 sm:py-12 lg:py-16">
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
        <!-- Organization Info -->
        <div class="sm:col-span-2 lg:col-span-1">
          <div class="flex items-center gap-3 mb-4">
            <img :src="ORGANIZATION.logoPath" alt="Logo" class="h-10 w-10 sm:h-12 sm:w-12 object-contain">
            <div class="flex flex-col">
              <span class="text-lg sm:text-xl font-bold">{{ ORGANIZATION.fullName }}</span>
              <span class="text-xs text-gray-400">e.V.</span>
            </div>
          </div>
          <p class="text-gray-300 text-sm sm:text-base mb-6 leading-relaxed">
            {{ $t('hero.description') }}
          </p>
          
          <!-- Social Icons -->
          <div class="flex gap-3">
            <a 
              href="#" 
              class="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-teal-600 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Facebook"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
            <a 
              href="https://www.instagram.com/tumaini_jipya_e.v?igsh=N2hteDh1aXgxNGky&utm_source=qr" 
              class="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-teal-600 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Instagram"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a 
              href="#" 
              class="w-10 h-10 flex items-center justify-center bg-white/10 hover:bg-teal-600 rounded-lg transition-all duration-300 hover:scale-110"
              aria-label="Twitter"
            >
              <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
          </div>
        </div>
        
        <!-- Quick Links -->
        <div>
          <h3 class="font-bold text-lg mb-4 text-teal-300">{{ $t('footer.quickLinks') }}</h3>
          <ul class="space-y-3">
            <li v-for="link in footerLinks" :key="link.href">
              <NuxtLink :to="link.href" class="text-gray-300 hover:text-teal-300 transition-colors text-sm sm:text-base flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 bg-teal-400 rounded-full group-hover:scale-150 transition-transform"></span>
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Legal -->
        <div>
          <h3 class="font-bold text-lg mb-4 text-teal-300">{{ $t('footer.legal') }}</h3>
          <ul class="space-y-3">
            <li>
              <NuxtLink to="/impressium" class="text-gray-300 hover:text-teal-300 transition-colors text-sm sm:text-base flex items-center gap-2 group">
                <span class="w-1.5 h-1.5 bg-teal-400 rounded-full group-hover:scale-150 transition-transform"></span>
                {{ $t('footer.impressum') }}
              </NuxtLink>
            </li>

          </ul>
        </div>

        <!-- Contact Info -->
        <div>
          <h3 class="font-bold text-lg mb-4 text-teal-300">{{ $t('footer.contact') }}</h3>
          <ul class="space-y-3 text-sm sm:text-base">
            <li class="flex items-start gap-3 text-gray-300">
              <svg class="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a :href="`mailto:${CONTACT_INFO.email}`" class="hover:text-teal-300 transition-colors break-all">
                {{ CONTACT_INFO.email }}
              </a>
            </li>
            <li class="flex items-start gap-3 text-gray-300">
              <svg class="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>
                {{ CONTACT_INFO.address.street }}<br />
                {{ CONTACT_INFO.address.city }}
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Bottom Bar -->
      <div class="border-t border-gray-700/50 mt-8 sm:mt-12 pt-6 sm:pt-8">
        <div class="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <p class="text-center sm:text-left">
            &copy; {{ new Date().getFullYear() }} {{ ORGANIZATION.name }} · {{ $t('footer.allRightsReserved') }}.
          </p>
          <div class="flex items-center gap-2">
            <span class="text-xs">{{ $t('footer.nonprofitRecognized') }}</span>
            <svg class="w-4 h-4 text-teal-400" fill="currentColor" viewBox="0 0 20 20">
              <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
            </svg>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

const { t } = useI18n();
const { NAVIGATION_LINKS, SOCIAL_LINKS, CONTACT_INFO, ORGANIZATION } = useConstants();

// Footer navigation (subset of main navigation)
const footerLinks = computed(() => [
  { label: t('nav.aboutUs'), href: '/about-us' },
  { label: t('nav.projects'), href: '/projects' },
  { label: t('nav.membership'), href: '/membership' },
  { label: t('nav.contact'), href: '/contact' }
]);
</script>