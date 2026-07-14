<template>
  <UiContentSection background="white">
    <UiSectionHeader
      :badge="$t('home.missionIntro.badge')"
      :title="$t('home.missionIntro.title')"
      :description="$t('home.missionIntro.description')"
    />

    <div class="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
      <UiReveal v-for="(area, index) in MISSION_AREAS" :key="area.id" :delay="index * 120">
        <article class="group flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-2 hover:shadow-card sm:p-8">
          <div
            class="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br shadow-md transition-transform duration-300 group-hover:scale-110 sm:mb-6 sm:h-16 sm:w-16"
            :class="area.gradient"
          >
            <svg class="h-7 w-7 text-white sm:h-8 sm:w-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" :d="iconPaths[area.icon]" />
            </svg>
          </div>

          <h3 class="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">{{ area.title }}</h3>
          <p class="mb-6 flex-1 leading-relaxed text-gray-600">{{ area.description }}</p>

          <NuxtLink to="/projects" class="inline-flex items-center gap-2 font-semibold text-primary-700 transition-colors hover:text-primary-800">
            {{ $t('mission.learnMore') }}
            <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
            <span class="sr-only">: {{ area.title }}</span>
          </NuxtLink>
        </article>
      </UiReveal>
    </div>
  </UiContentSection>
</template>

<script setup>
const { MISSION_AREAS } = useConstants();

const iconPaths = {
  heart: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z',
  globe: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z',
  education: 'M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222'
};
</script>
