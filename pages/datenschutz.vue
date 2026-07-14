<template>
  <div>
    <UiContentSection background="tinted" pattern padding="tight">
      <UiSectionHeader
        :badge="$t('datenschutz.badge')"
        :title="$t('datenschutz.title')"
        :description="$t('datenschutz.description')"
      />
    </UiContentSection>

    <UiContentSection>
      <!-- TODO: Have this privacy policy reviewed by a legal professional before launch -->
      <div class="mx-auto max-w-prose space-y-10">
        <section v-for="section in sections" :key="section.key">
          <h2 class="mb-3 text-xl font-bold text-gray-900 sm:text-2xl">
            {{ $t(`datenschutz.${section.key}.title`) }}
          </h2>
          <p class="leading-relaxed text-gray-600">
            {{ $t(`datenschutz.${section.key}.text`) }}
          </p>
        </section>

        <p class="border-t border-gray-100 pt-8 text-gray-600">
          {{ $t('datenschutz.questions') }}
          <a :href="`mailto:${CONTACT_INFO.email}`" class="font-semibold text-primary-700 underline-offset-2 hover:underline">
            {{ CONTACT_INFO.email }}
          </a>
        </p>
      </div>
    </UiContentSection>
  </div>
</template>

<script setup>
const { CONTACT_INFO } = useConstants();

const sections = [
  { key: 'responsible' },
  { key: 'hosting' },
  { key: 'contactForm' },
  { key: 'cookies' },
  { key: 'rights' }
];
</script>
