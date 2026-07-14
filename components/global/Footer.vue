<template>
  <footer class="bg-gradient-to-br from-gray-900 via-gray-800 to-primary-950 text-white">
    <div class="container mx-auto px-4 py-10 sm:px-6 sm:py-14 lg:py-16">
      <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12">
        <!-- Column 1: Mission summary + social -->
        <div>
          <div class="mb-4 flex items-center gap-3">
            <img :src="ORGANIZATION.logoPath" :alt="`${ORGANIZATION.fullName} Logo`" class="h-10 w-10 object-contain sm:h-12 sm:w-12" width="48" height="48">
            <div class="flex flex-col">
              <span class="font-heading text-lg font-bold sm:text-xl">{{ ORGANIZATION.fullName }}</span>
              <span class="text-xs text-gray-400">e.V.</span>
            </div>
          </div>
          <p class="mb-6 text-sm leading-relaxed text-gray-300 sm:text-base">
            {{ $t('footer.missionSummary') }}
          </p>

          <!-- Social Icons -->
          <p class="mb-3 text-sm font-semibold text-primary-300">{{ $t('footer.followUs') }}</p>
          <div class="flex gap-3">
            <a
              v-for="social in activeSocialLinks"
              :key="social.name"
              :href="social.url"
              target="_blank"
              rel="noopener noreferrer"
              class="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10 transition-all duration-300 hover:scale-110 hover:bg-primary-600"
              :aria-label="social.ariaLabel"
            >
              <svg v-if="social.name === 'Instagram'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              <svg v-else-if="social.name === 'Facebook'" class="h-5 w-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
              </svg>
            </a>
          </div>
        </div>

        <!-- Column 2: Quick links -->
        <nav :aria-label="$t('a11y.footerNavigation')">
          <h3 class="mb-4 font-heading text-lg font-bold text-primary-300">{{ $t('footer.quickLinks') }}</h3>
          <ul class="grid grid-cols-1 gap-x-4 gap-y-3 sm:grid-cols-1 md:grid-cols-2">
            <li v-for="link in footerLinks" :key="link.href">
              <NuxtLink :to="link.href" class="group flex items-center gap-2 rounded-md text-sm text-gray-300 transition-colors hover:text-primary-300 sm:text-base">
                <span class="h-1.5 w-1.5 rounded-full bg-primary-400 transition-transform group-hover:scale-150" aria-hidden="true"></span>
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Column 3: Contact + Vereinsregister -->
        <div class="sm:col-span-2 lg:col-span-1">
          <h3 class="mb-4 font-heading text-lg font-bold text-primary-300">{{ $t('footer.contact') }}</h3>
          <ul class="space-y-3 text-sm sm:text-base">
            <li class="flex items-start gap-3 text-gray-300">
              <svg class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
              </svg>
              <a :href="`mailto:${CONTACT_INFO.email}`" class="break-all rounded-md transition-colors hover:text-primary-300">
                {{ CONTACT_INFO.email }}
              </a>
            </li>
            <li class="flex items-start gap-3 text-gray-300">
              <svg class="mt-0.5 h-5 w-5 flex-shrink-0 text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>
                {{ CONTACT_INFO.address.street }}<br />
                {{ CONTACT_INFO.address.city }}
              </span>
            </li>
          </ul>

          <h3 class="mb-3 mt-8 font-heading text-lg font-bold text-primary-300">{{ $t('footer.vereinsregister.title') }}</h3>
          <ul class="space-y-1 text-sm text-gray-300">
            <li>{{ $t('footer.vereinsregister.court') }}: {{ ORGANIZATION.register.court }}</li>
            <li>{{ $t('footer.vereinsregister.number') }}: {{ ORGANIZATION.register.number }}</li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-10 border-t border-gray-700/50 pt-6 sm:mt-12 sm:pt-8">
        <div class="flex flex-col items-center justify-between gap-4 text-sm text-gray-400 sm:flex-row">
          <p class="text-center sm:text-left">
            &copy; {{ new Date().getFullYear() }} {{ ORGANIZATION.name }} · {{ $t('footer.allRightsReserved') }}.
          </p>
          <div class="flex items-center gap-5">
            <NuxtLink to="/impressium" class="rounded-md transition-colors hover:text-primary-300">
              {{ $t('footer.impressum') }}
            </NuxtLink>
            <NuxtLink to="/datenschutz" class="rounded-md transition-colors hover:text-primary-300">
              {{ $t('footer.datenschutz') }}
            </NuxtLink>
            <span class="hidden items-center gap-2 sm:flex">
              <span class="text-xs">{{ $t('footer.nonprofitRecognized') }}</span>
              <svg class="h-4 w-4 text-primary-400" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clip-rule="evenodd"/>
              </svg>
            </span>
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
const { SOCIAL_LINKS, CONTACT_INFO, ORGANIZATION } = useConstants();

// Only render social profiles that actually exist
const activeSocialLinks = computed(() => SOCIAL_LINKS.filter((social) => social.url && social.url !== '#'));

const footerLinks = computed(() => [
  { label: t('nav.aboutUs'), href: '/about-us' },
  { label: t('nav.projects'), href: '/projects' },
  { label: t('nav.team'), href: '/team' },
  // TODO Phase 4: add { label: t('nav.blog'), href: '/blog' } once the blog page has content
  { label: t('nav.membership'), href: '/membership' },
  { label: t('nav.donate'), href: '/donate' },
  { label: t('nav.contact'), href: '/contact' }
]);
</script>
