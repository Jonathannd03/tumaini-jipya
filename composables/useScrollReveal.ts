import { onMounted, type Ref } from 'vue';

/**
 * Reveals an element once it scrolls into view by adding `is-revealed`
 * to its `reveal` base class. Respects prefers-reduced-motion: the
 * element is shown immediately without animation.
 */
export const useScrollReveal = (
  target: Ref<HTMLElement | null>,
  options: IntersectionObserverInit = {}
) => {
  onMounted(() => {
    const el = target.value;
    if (!el) return;

    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (reducedMotion || !('IntersectionObserver' in window)) {
      el.classList.add('is-revealed');
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('is-revealed');
          observer.disconnect();
        }
      },
      { threshold: 0.15, rootMargin: '0px 0px -40px 0px', ...options }
    );
    observer.observe(el);
  });
};
