<template>
  <div>
    <UiPageHero
      :badge="$t('projects.badge')"
      :title="$t('projects.title')"
      :highlighted-text="$t('projects.titleHighlight')"
      :description="$t('projects.description')"
    />

    <UiContentSection>
      <!-- Projects Grid -->
      <div class="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">
        <UiReveal v-for="(project, index) in projects" :key="project.key" :delay="index * 120">
          <article class="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-card sm:p-8">
            <div class="mb-5 flex items-start justify-between">
              <div class="flex h-14 w-14 items-center justify-center rounded-2xl shadow-md sm:h-16 sm:w-16" :class="project.tile">
                <svg class="h-7 w-7 text-white sm:h-8 sm:w-8" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" aria-hidden="true">
                  <path stroke-linecap="round" stroke-linejoin="round" :d="project.icon" />
                </svg>
              </div>
              <span class="rounded-full bg-accent-100 px-3 py-1 text-xs font-semibold text-accent-900">
                {{ $t('projects.inPlanning') }}
              </span>
            </div>

            <h2 class="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
              {{ $t(`projects.${project.key}.title`) }}
            </h2>
            <p class="mb-6 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">
              {{ $t(`projects.${project.key}.description`) }}
            </p>

            <!-- Progress -->
            <div class="mb-4">
              <div class="mb-2 flex justify-between text-xs sm:text-sm">
                <span class="text-gray-600">{{ $t('projects.progress') }}</span>
                <span class="font-semibold text-gray-900">{{ project.progress }}%</span>
              </div>
              <div
                class="h-2 w-full overflow-hidden rounded-full bg-gray-100"
                role="progressbar"
                :aria-valuenow="project.progress"
                aria-valuemin="0"
                aria-valuemax="100"
                :aria-label="$t('projects.progress')"
              >
                <div class="h-full rounded-full bg-primary-600" :style="{ width: `${project.progress}%` }"></div>
              </div>
            </div>

            <div class="flex items-center justify-between border-t border-gray-100 pt-4">
              <div>
                <div class="mb-1 text-xs text-gray-500">{{ $t('projects.beneficiaries') }}</div>
                <div class="font-heading text-base font-bold text-gray-900 sm:text-lg">{{ project.beneficiaries }}+</div>
              </div>
              <span class="text-xs text-gray-500 sm:text-sm">{{ $t('projects.comingSoon') }}</span>
            </div>
          </article>
        </UiReveal>
      </div>
    </UiContentSection>

    <UiContentSection background="tinted" padding="tight">
      <UiCtaBanner
        :title="$t('projects.interestedText')"
        :primary-text="$t('projects.contactUs')"
        primary-link="/contact"
        :secondary-text="$t('nav.donate')"
        secondary-link="/donate"
      />
    </UiContentSection>
  </div>
</template>

<script setup>
const projects = [
  {
    key: 'educationCenter',
    progress: 25,
    beneficiaries: 150,
    tile: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    key: 'climateInitiative',
    progress: 25,
    beneficiaries: 500,
    tile: 'bg-gradient-to-br from-secondary-500 to-secondary-700',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    key: 'emergencyAid',
    progress: 25,
    beneficiaries: 300,
    tile: 'bg-gradient-to-br from-rose-500 to-rose-700',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  }
];
</script>
