<template>
  <section ref="sectionRef" class="border-b border-primary-100 bg-primary-50/60">
    <div class="container mx-auto px-4 py-10 sm:px-6 sm:py-14">
      <div class="mb-8 text-center sm:mb-10">
        <h2 class="mb-2 text-xl font-bold text-gray-900 sm:text-2xl">{{ $t('home.stats.title') }}</h2>
        <p class="mx-auto max-w-xl text-sm text-gray-600 sm:text-base">{{ $t('home.stats.description') }}</p>
      </div>

      <dl class="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
        <div v-for="(stat, index) in stats" :key="stat.key" class="text-center">
          <dd class="font-heading text-3xl font-bold text-primary-800 sm:text-4xl lg:text-5xl">
            {{ formatNumber(displayValues[index]) }}
          </dd>
          <dt class="mt-1 text-sm font-medium text-gray-600 sm:mt-2 sm:text-base">
            {{ $t(`home.stats.${stat.key}`) }}
          </dt>
        </div>
      </dl>
    </div>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue';

const { locale } = useI18n();

// Projected targets for the first projects, not achieved results.
// TODO: Team must confirm these goal figures.
const stats = [
  { key: 'trees', value: 1000 },
  { key: 'children', value: 150 },
  { key: 'packages', value: 500 },
  { key: 'volunteers', value: 25 }
];

const sectionRef = ref(null);
const displayValues = ref(stats.map(() => 0));

const formatNumber = (value) => new Intl.NumberFormat(locale.value).format(value);

const animate = () => {
  const duration = 1600;
  const start = performance.now();
  const easeOut = (t) => 1 - Math.pow(1 - t, 3);

  const tick = (now) => {
    const progress = Math.min((now - start) / duration, 1);
    displayValues.value = stats.map((stat) => Math.round(stat.value * easeOut(progress)));
    if (progress < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
};

onMounted(() => {
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  if (reducedMotion || !('IntersectionObserver' in window)) {
    displayValues.value = stats.map((stat) => stat.value);
    return;
  }

  const observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        animate();
        observer.disconnect();
      }
    },
    { threshold: 0.3 }
  );
  observer.observe(sectionRef.value);
});
</script>
