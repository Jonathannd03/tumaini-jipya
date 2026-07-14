<template>
  <section ref="sectionRef" class="border-b border-primary-100 bg-primary-50/60" :aria-label="$t('home.stats.title')">
    <div class="container mx-auto px-4 py-10 sm:px-6 sm:py-14">
      <h2 class="sr-only">{{ $t('home.stats.title') }}</h2>
      <dl class="grid grid-cols-2 gap-6 sm:gap-8 lg:grid-cols-4">
        <div v-for="(stat, index) in stats" :key="stat.key" class="text-center">
          <dd class="font-heading text-3xl font-bold text-primary-800 sm:text-4xl lg:text-5xl">
            {{ formatNumber(displayValues[index]) }}<span class="text-accent-500">+</span>
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

// TODO: Team must replace these placeholder impact numbers with real figures
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
