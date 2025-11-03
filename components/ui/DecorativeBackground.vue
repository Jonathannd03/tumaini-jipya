<template>
  <div>
    <!-- Top right decorative circle -->
    <div
      class="absolute rounded-full blur-3xl"
      :class="[
        topRightSize,
        topRightPosition,
        topRightColor
      ]"
    ></div>

    <!-- Bottom left decorative circle -->
    <div
      class="absolute rounded-full blur-3xl"
      :class="[
        bottomLeftSize,
        bottomLeftPosition,
        bottomLeftColor
      ]"
    ></div>
  </div>
</template>

<script setup>
const props = defineProps({
  topRightSize: {
    type: String,
    default: 'w-72 h-72'
  },
  topRightPosition: {
    type: String,
    default: 'top-20 right-20'
  },
  topRightColor: {
    type: String,
    default: 'bg-white/5'
  },
  bottomLeftSize: {
    type: String,
    default: 'w-96 h-96'
  },
  bottomLeftPosition: {
    type: String,
    default: 'bottom-20 left-20'
  },
  bottomLeftColor: {
    type: String,
    default: 'bg-emerald-400/10'
  }
});
</script>
