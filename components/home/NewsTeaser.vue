<template>
  <UiContentSection background="tinted">
    <UiSectionHeader
      :badge="$t('home.news.badge')"
      :title="$t('home.news.title')"
      :description="$t('home.news.description')"
    />

    <!-- TODO Phase 4: replace these placeholder cards with the latest 3 real blog posts -->
    <div class="grid grid-cols-1 gap-6 sm:gap-8 md:grid-cols-3">
      <UiReveal v-for="(item, index) in items" :key="item.key" :delay="index * 120">
        <article class="flex h-full flex-col rounded-2xl border border-gray-100 bg-white p-6 shadow-soft sm:p-8">
          <div class="mb-4 flex items-center gap-3">
            <span class="rounded-full px-3 py-1 text-xs font-semibold" :class="item.badgeClass">
              {{ $t(item.tagKey) }}
            </span>
            <span class="text-xs font-medium uppercase tracking-wide text-accent-700">
              {{ $t('home.news.comingSoon') }}
            </span>
          </div>
          <h3 class="mb-3 text-lg font-bold text-gray-900 sm:text-xl">{{ $t(item.titleKey) }}</h3>
          <p class="flex-1 text-sm leading-relaxed text-gray-600 sm:text-base">{{ $t(item.descriptionKey) }}</p>
        </article>
      </UiReveal>
    </div>
  </UiContentSection>
</template>

<script setup>
const items = [
  {
    key: 'education',
    tagKey: 'mission.education.title',
    titleKey: 'projects.educationCenter.title',
    descriptionKey: 'projects.educationCenter.description',
    badgeClass: 'bg-blue-100 text-blue-800'
  },
  {
    key: 'climate',
    tagKey: 'mission.climate.title',
    titleKey: 'projects.climateInitiative.title',
    descriptionKey: 'projects.climateInitiative.description',
    badgeClass: 'bg-secondary-100 text-secondary-800'
  },
  {
    key: 'humanitarian',
    tagKey: 'mission.humanitarian.title',
    titleKey: 'projects.emergencyAid.title',
    descriptionKey: 'projects.emergencyAid.description',
    badgeClass: 'bg-rose-100 text-rose-800'
  }
];
</script>
