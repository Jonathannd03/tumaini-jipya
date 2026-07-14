<template>
  <header
    class="sticky top-0 z-50 transition-all duration-300"
    :class="isScrolled ? 'border-b border-gray-100 bg-white/95 shadow-soft backdrop-blur-md' : 'bg-white/80 backdrop-blur-md'"
  >
    <div class="container mx-auto px-4 sm:px-6">
      <div class="flex items-center justify-between py-3 sm:py-4">
        <!-- Logo Section -->
        <NuxtLink to="/" class="flex min-w-0 flex-shrink items-center gap-2 rounded-lg sm:gap-3">
          <img
            :src="ORGANIZATION.logoPath"
            :alt="`${ORGANIZATION.fullName} Logo`"
            class="h-8 w-8 flex-shrink-0 object-contain sm:h-12 sm:w-12"
            width="48"
            height="48"
          >
          <div class="flex min-w-0 flex-col">
            <span class="font-heading text-base font-bold leading-tight text-primary-800 sm:text-xl">{{ ORGANIZATION.fullName }}</span>
            <span class="text-xs font-medium text-gray-700">e.V.</span>
          </div>
        </NuxtLink>

        <!-- Desktop Navigation -->
        <nav class="hidden md:block" :aria-label="$t('a11y.mainNavigation')">
          <ul class="flex items-center gap-4 md:gap-6 lg:gap-8">
            <li v-for="link in NAVIGATION_LINKS" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="rounded-md text-sm font-medium text-gray-700 transition-colors hover:text-primary-700 lg:text-base"
                active-class="text-primary-700 font-semibold"
                :aria-current="route.path === link.href ? 'page' : undefined"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>
        </nav>

        <!-- Action Buttons -->
        <div class="flex items-center gap-2 sm:gap-3">
          <!-- Language Switcher - compact on mobile, full on desktop -->
          <UiLanguageSwitcher />

          <!-- Donate Button (warm accent) -->
          <NuxtLink
            to="/donate"
            class="inline-flex items-center gap-1.5 rounded-xl bg-accent-400 p-2 font-semibold text-accent-950 shadow-md transition-all duration-300 hover:bg-accent-300 hover:shadow-lg sm:gap-2 sm:px-4 sm:py-2 lg:px-5 lg:py-2.5"
            :aria-label="$t('nav.donate')"
          >
            <svg class="h-5 w-5 lg:h-5 lg:w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
            </svg>
            <span class="hidden text-sm sm:inline lg:text-base">{{ $t('nav.donate') }}</span>
          </NuxtLink>

          <!-- Membership Button (desktop only) -->
          <NuxtLink
            to="/membership"
            class="hidden items-center gap-2 rounded-xl border-2 border-primary-600 px-4 py-2 text-sm font-semibold text-primary-700 transition-all duration-300 hover:bg-primary-50 md:inline-flex lg:px-5 lg:py-2.5 lg:text-base"
          >
            {{ $t('nav.participate') }}
          </NuxtLink>

          <!-- Mobile Menu Button -->
          <button
            class="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-primary-700 md:hidden"
            :aria-label="$t('a11y.openMenu')"
            :aria-expanded="mobileMenuOpen"
            aria-controls="mobile-menu"
            @click="openMobileMenu"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Mobile Menu: full-screen overlay (teleported: the header's backdrop-blur
         creates a containing block that would trap position:fixed) -->
    <Teleport to="body">
    <Transition
      enter-active-class="transition ease-out duration-200"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition ease-in duration-150"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="mobileMenuOpen"
        id="mobile-menu"
        class="fixed inset-0 z-50 flex flex-col bg-white md:hidden"
        role="dialog"
        aria-modal="true"
        :aria-label="$t('a11y.mainNavigation')"
      >
        <!-- Overlay header: logo + close -->
        <div class="container mx-auto flex items-center justify-between px-4 py-3 sm:px-6">
          <NuxtLink to="/" class="flex items-center gap-2" @click="closeMobileMenu">
            <img :src="ORGANIZATION.logoPath" :alt="`${ORGANIZATION.fullName} Logo`" class="h-8 w-8 object-contain" width="32" height="32">
            <span class="font-heading text-base font-bold text-primary-800">{{ ORGANIZATION.fullName }}</span>
          </NuxtLink>
          <button
            ref="closeButtonRef"
            class="rounded-lg p-2 text-gray-600 transition-colors hover:bg-gray-100 hover:text-primary-700"
            :aria-label="$t('a11y.closeMenu')"
            @click="closeMobileMenu"
          >
            <svg class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
            </svg>
          </button>
        </div>

        <!-- Overlay nav: large tap targets -->
        <nav class="container mx-auto flex-1 overflow-y-auto px-4 py-6 sm:px-6" :aria-label="$t('a11y.mainNavigation')">
          <ul class="space-y-1">
            <li v-for="link in NAVIGATION_LINKS" :key="link.href">
              <NuxtLink
                :to="link.href"
                class="block rounded-xl px-4 py-4 text-lg font-medium text-gray-800 transition-colors hover:bg-primary-50 hover:text-primary-700"
                active-class="bg-primary-50 text-primary-700"
                :aria-current="route.path === link.href ? 'page' : undefined"
                @click="closeMobileMenu"
              >
                {{ link.label }}
              </NuxtLink>
            </li>
          </ul>

          <div class="mt-6 space-y-3 border-t border-gray-100 pt-6">
            <NuxtLink
              to="/donate"
              class="flex w-full items-center justify-center gap-2 rounded-xl bg-accent-400 px-4 py-4 text-lg font-semibold text-accent-950 shadow-md transition-all duration-300 hover:bg-accent-300"
              @click="closeMobileMenu"
            >
              <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
              </svg>
              {{ $t('nav.donate') }}
            </NuxtLink>

            <NuxtLink
              to="/membership"
              class="flex w-full items-center justify-center gap-2 rounded-xl border-2 border-primary-600 px-4 py-4 text-lg font-semibold text-primary-700 transition-all duration-300 hover:bg-primary-50"
              @click="closeMobileMenu"
            >
              {{ $t('nav.participate') }}
            </NuxtLink>
          </div>
        </nav>
      </div>
    </Transition>
    </Teleport>
  </header>
</template>

<script setup>
import { ref, watch, onMounted, onUnmounted, nextTick } from 'vue';

const { NAVIGATION_LINKS, ORGANIZATION } = useConstants();
const route = useRoute();

const mobileMenuOpen = ref(false);
const closeButtonRef = ref(null);
const isScrolled = ref(false);

const openMobileMenu = async () => {
  mobileMenuOpen.value = true;
  await nextTick();
  closeButtonRef.value?.focus();
};

const closeMobileMenu = () => {
  mobileMenuOpen.value = false;
};

// Lock body scroll while the overlay is open
watch(mobileMenuOpen, (open) => {
  document.body.style.overflow = open ? 'hidden' : '';
});

const onScroll = () => {
  isScrolled.value = window.scrollY > 8;
};

const onKeydown = (event) => {
  if (event.key === 'Escape' && mobileMenuOpen.value) {
    closeMobileMenu();
  }
};

onMounted(() => {
  onScroll();
  window.addEventListener('scroll', onScroll, { passive: true });
  document.addEventListener('keydown', onKeydown);
});

onUnmounted(() => {
  window.removeEventListener('scroll', onScroll);
  document.removeEventListener('keydown', onKeydown);
  document.body.style.overflow = '';
});
</script>
