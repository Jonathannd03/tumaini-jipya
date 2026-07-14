<template>
  <div>
    <HomeHero />
    <HomeImpactStats />
    <HomeMissionCards />
    <HomeStorySection />
    <HomeNewsTeaser />
    <HomeContactStrip />
    <UiContentSection background="white" padding="tight" class="pb-14 sm:pb-20">
      <UiCtaBanner
        :title="$t('home.finalCta.title')"
        :description="$t('home.finalCta.description')"
        :primary-text="$t('home.finalCta.donate')"
        primary-link="/donate"
        :secondary-text="$t('home.finalCta.membership')"
        secondary-link="/membership"
      >
        <template #footnote>{{ $t('home.finalCta.footnote') }}</template>
      </UiCtaBanner>
    </UiContentSection>
  </div>
</template>

<script setup>
const { t } = useI18n();
const { ORGANIZATION, CONTACT_INFO, SOCIAL_LINKS } = useConstants();

// TODO: Confirm the canonical production domain
const siteUrl = 'https://www.tumaini-jipya.org';

useSeoMeta({
  title: () => t('home.seo.title'),
  description: () => t('home.seo.description'),
  ogTitle: () => t('home.seo.title'),
  ogDescription: () => t('home.seo.description'),
  ogType: 'website',
  ogUrl: siteUrl,
  ogImage: `${siteUrl}/images/logo.png`,
  twitterCard: 'summary'
});

useHead({
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'NGO',
        name: ORGANIZATION.name,
        alternateName: 'Tumaini Jipya',
        url: siteUrl,
        logo: `${siteUrl}/images/logo.png`,
        email: CONTACT_INFO.email,
        foundingLocation: 'Duisburg, Deutschland',
        address: {
          '@type': 'PostalAddress',
          streetAddress: CONTACT_INFO.address.street,
          addressLocality: 'Duisburg',
          postalCode: '47051',
          addressCountry: 'DE'
        },
        areaServed: ['DE', 'CD'],
        sameAs: SOCIAL_LINKS.filter((social) => social.url && social.url !== '#').map((social) => social.url)
      })
    }
  ]
});
</script>
