<template>
  <div class="relative" ref="dropdownRef">
    <!-- Mobile: Simple flag button that cycles through languages -->
    <button
      @click="cycleMobile"
      class="md:hidden flex items-center justify-center w-9 h-9 rounded-lg border border-gray-300 hover:border-teal-600 transition-colors duration-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
      :aria-label="`Current language: ${currentLanguage.name}`"
    >
      <span class="text-xl">{{ currentLanguage.flag }}</span>
    </button>

    <!-- Desktop: Full dropdown -->
    <button
      @click="toggleDropdown"
      class="hidden md:flex items-center gap-2 px-3 py-2 rounded-lg border border-gray-300 hover:border-teal-600 transition-colors duration-200 bg-white focus:outline-none focus:ring-2 focus:ring-teal-500"
      :aria-expanded="isOpen"
      aria-haspopup="true"
    >
      <span class="text-2xl">{{ currentLanguage.flag }}</span>
      <span class="text-sm font-medium text-gray-700">{{ currentLanguage.code.toUpperCase() }}</span>
      <svg
        class="w-4 h-4 text-gray-500 transition-transform duration-200"
        :class="{ 'rotate-180': isOpen }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <Transition
      enter-active-class="transition ease-out duration-100"
      enter-from-class="transform opacity-0 scale-95"
      enter-to-class="transform opacity-100 scale-100"
      leave-active-class="transition ease-in duration-75"
      leave-from-class="transform opacity-100 scale-100"
      leave-to-class="transform opacity-0 scale-95"
    >
      <div
        v-if="isOpen"
        class="absolute right-0 mt-2 w-48 rounded-lg shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50"
      >
        <div class="py-1" role="menu" aria-orientation="vertical">
          <button
            v-for="lang in languages"
            :key="lang.code"
            @click="switchLanguage(lang.code)"
            class="flex items-center gap-3 w-full px-4 py-2 text-sm text-gray-700 hover:bg-teal-50 hover:text-teal-600 transition-colors duration-150"
            :class="{ 'bg-teal-50 text-teal-600 font-medium': locale === lang.code }"
            role="menuitem"
          >
            <span class="text-2xl">{{ lang.flag }}</span>
            <span>{{ lang.name }}</span>
            <svg
              v-if="locale === lang.code"
              class="ml-auto w-5 h-5 text-teal-600"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path
                fill-rule="evenodd"
                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                clip-rule="evenodd"
              />
            </svg>
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';

const { locale, setLocale } = useI18n();
const isOpen = ref(false);
const dropdownRef = ref(null);

const languages = [
  { code: 'de', name: 'Deutsch', flag: '🇩🇪' },
  { code: 'en', name: 'English', flag: '🇬🇧' },
  { code: 'fr', name: 'Français', flag: '🇫🇷' }
];

const currentLanguage = computed(() => {
  return languages.find(lang => lang.code === locale.value) || languages[0];
});

const toggleDropdown = () => {
  isOpen.value = !isOpen.value;
};

const switchLanguage = async (code) => {
  await setLocale(code);
  isOpen.value = false;
};

// Mobile: cycle through languages on tap
const cycleMobile = async () => {
  const currentIndex = languages.findIndex(lang => lang.code === locale.value);
  const nextIndex = (currentIndex + 1) % languages.length;
  await setLocale(languages[nextIndex].code);
};

const handleClickOutside = (event) => {
  if (dropdownRef.value && !dropdownRef.value.contains(event.target)) {
    isOpen.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>
