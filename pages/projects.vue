<template>
  <div>
    <UiPageHero
      :badge="$t('projects.badge')"
      :title="$t('projects.title')"
      :highlighted-text="$t('projects.titleHighlight')"
      :description="$t('projects.description')"
    />

    <UiContentSection>
      <!-- Active Project -->
      <div class="mb-16 sm:mb-20">
        <div class="mb-6 flex items-center gap-3">
          <span class="inline-flex items-center gap-2 rounded-full bg-green-100 px-4 py-1.5 text-sm font-semibold text-green-700">
            <span class="inline-block h-2 w-2 rounded-full bg-green-500"></span>
            {{ $t('projects.activeProject.badge') }}
          </span>
        </div>

        <div class="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-xl lg:flex">
          <!-- Image -->
          <div class="relative h-64 sm:h-80 lg:h-auto lg:w-5/12">
            <img
              src="/images/tumaini-jipya-projekt.jpg"
              :alt="$t('projects.activeProject.title')"
              class="h-full w-full object-cover"
            />
            <div class="absolute bottom-4 left-4">
              <span class="inline-flex items-center gap-1.5 rounded-full bg-black/60 px-3 py-1.5 text-xs font-medium text-white backdrop-blur-sm">
                <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                {{ $t('projects.activeProject.location') }}
              </span>
            </div>
          </div>

          <!-- Content -->
          <div class="flex flex-col p-6 sm:p-8 lg:w-7/12 lg:p-10">
            <h2 class="mb-3 text-xl font-bold text-gray-900 sm:text-2xl lg:text-3xl">
              {{ $t('projects.activeProject.title') }}
            </h2>
            <p class="mb-6 text-sm leading-relaxed text-gray-600 sm:text-base">
              {{ $t('projects.activeProject.intro') }}
            </p>

            <!-- Detail sections -->
            <div class="mb-6 flex-1 space-y-5">
              <!-- Problem -->
              <div class="flex gap-3">
                <div class="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-red-100">
                  <svg class="h-4 w-4 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 9v2m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-1 text-sm font-bold text-gray-900">{{ $t('projects.activeProject.problem.title') }}</h3>
                  <p class="text-sm leading-relaxed text-gray-600">{{ $t('projects.activeProject.problem.text') }}</p>
                </div>
              </div>

              <!-- Who we help -->
              <div class="flex gap-3">
                <div class="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-blue-100">
                  <svg class="h-4 w-4 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-1 text-sm font-bold text-gray-900">{{ $t('projects.activeProject.who.title') }}</h3>
                  <p class="text-sm leading-relaxed text-gray-600">{{ $t('projects.activeProject.who.text') }}</p>
                </div>
              </div>

              <!-- Approach -->
              <div class="flex gap-3">
                <div class="mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-teal-100">
                  <svg class="h-4 w-4 text-teal-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <h3 class="mb-2 text-sm font-bold text-gray-900">{{ $t('projects.activeProject.approach.title') }}</h3>
                  <ul class="space-y-1.5">
                    <li v-for="step in ['step1', 'step2', 'step3']" :key="step" class="flex items-start gap-2 text-sm text-gray-600">
                      <span class="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-teal-500"></span>
                      {{ $t(`projects.activeProject.approach.${step}`) }}
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <!-- Goal + CTA -->
            <div class="flex flex-col gap-4 border-t border-gray-100 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div class="text-xs font-medium uppercase tracking-wide text-gray-500">{{ $t('projects.activeProject.goalLabel') }}</div>
                <div class="text-2xl font-bold text-teal-600">{{ $t('projects.activeProject.goal') }}</div>
              </div>
              <a
                :href="DONATION_LINKS.betterplace"
                target="_blank"
                rel="noopener noreferrer"
                class="inline-flex items-center justify-center gap-2 rounded-xl bg-teal-600 px-6 py-3 text-sm font-semibold text-white shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:bg-teal-700 hover:shadow-lg sm:text-base"
              >
                <svg class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
                </svg>
                {{ $t('projects.activeProject.donateButton') }}
              </a>
            </div>
          </div>
        </div>
      </div>

      <!-- Planned Projects -->
      <div>
        <h2 class="mb-6 text-xl font-bold text-gray-900 sm:text-2xl">
          {{ $t('projects.plannedTitle') }}
        </h2>
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

              <h3 class="mb-3 text-lg font-bold text-gray-900 sm:text-xl">
                {{ $t(`projects.${project.key}.title`) }}
              </h3>
              <p class="mb-6 flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">
                {{ $t(`projects.${project.key}.description`) }}
              </p>

              <div class="flex items-center justify-between border-t border-gray-100 pt-4">
                <div>
                  <div class="mb-1 text-xs text-gray-500">{{ $t('projects.plannedBeneficiaries') }}</div>
                  <div class="font-heading text-base font-bold text-gray-900 sm:text-lg">{{ project.beneficiaries }}</div>
                </div>
                <span class="text-xs text-gray-500 sm:text-sm">{{ $t('projects.comingSoon') }}</span>
              </div>
            </article>
          </UiReveal>
        </div>
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
const { DONATION_LINKS } = useConstants();

const projects = [
  {
    key: 'educationCenter',
    beneficiaries: 150,
    tile: 'bg-gradient-to-br from-blue-500 to-indigo-600',
    icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253'
  },
  {
    key: 'climateInitiative',
    beneficiaries: 500,
    tile: 'bg-gradient-to-br from-secondary-500 to-secondary-700',
    icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
  },
  {
    key: 'emergencyAid',
    beneficiaries: 300,
    tile: 'bg-gradient-to-br from-rose-500 to-rose-700',
    icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z'
  }
];
</script>
