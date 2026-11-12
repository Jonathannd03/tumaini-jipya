<template>
  <UiContentSection background="white">
    <UiSectionHeader
      :badge="$t('home.project.badge')"
      :title="$t('home.project.title')"
      :description="$t('home.project.description')"
    />

    <UiReveal>
      <NuxtLink to="/projects" class="group grid gap-8 lg:grid-cols-2 lg:gap-16">
        <!-- Image -->
        <div class="overflow-hidden rounded-2xl shadow-md">
          <img
            src="/images/tumaini-jipya-projekt.jpg"
            :alt="$t('projects.activeProject.title')"
            class="h-72 w-full object-cover transition-transform duration-500 group-hover:scale-105 sm:h-96 lg:h-full"
          />
        </div>

        <!-- Content -->
        <div class="flex flex-col justify-center">
          <div class="mb-3 flex flex-wrap items-center gap-3">
            <span class="inline-flex items-center gap-1.5 rounded-full bg-green-100 px-3 py-1 text-xs font-semibold text-green-700">
              <span class="h-1.5 w-1.5 rounded-full bg-green-500"></span>
              {{ $t('projects.activeProject.badge') }}
            </span>
            <span class="flex items-center gap-1 text-sm text-gray-400">
              <svg class="h-3.5 w-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              {{ $t('projects.activeProject.location') }}
            </span>
          </div>

          <h3 class="mb-4 text-2xl font-bold text-gray-900 sm:text-3xl">
            {{ $t('projects.activeProject.title') }}
          </h3>

          <p class="mb-8 text-base leading-relaxed text-gray-600">
            {{ $t('projects.activeProject.intro') }}
          </p>

          <div class="mb-8 border-t border-gray-100 pt-6">
            <p class="text-xs font-semibold uppercase tracking-wide text-gray-400">
              {{ $t('projects.activeProject.goalLabel') }}
            </p>
            <p class="mt-1 text-2xl font-bold text-teal-600">
              {{ $t('projects.activeProject.goal') }}
            </p>
          </div>

          <span class="inline-flex items-center gap-2 font-semibold text-primary-700 transition-colors group-hover:text-primary-800">
            {{ $t('home.project.viewDetails') }}
            <svg class="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
            </svg>
          </span>
        </div>
      </NuxtLink>
    </UiReveal>
  </UiContentSection>
</template>
