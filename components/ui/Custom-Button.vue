<template>
    <button
      :class="buttonClasses"
      @click="$emit('click')"
    >
      <slot />
    </button>
  </template>
  
  <script setup>
  const props = defineProps({
    variant: {
      type: String,
      default: 'primary',
      validator: (value) => ['primary', 'outline', 'secondary'].includes(value)
    },
    size: {
      type: String,
      default: 'medium',
      validator: (value) => ['small', 'medium', 'large'].includes(value)
    }
  });
  
  const buttonClasses = computed(() => {
    const base = 'font-semibold rounded-lg transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2';
    
    const variants = {
      primary: 'bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500',
      outline: 'border border-blue-600 text-blue-600 hover:bg-blue-50 focus:ring-blue-500',
      secondary: 'bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-500'
    };
    
    const sizes = {
      small: 'px-3 py-2 text-sm',
      medium: 'px-4 py-2 text-base',
      large: 'px-6 py-3 text-lg'
    };
    
    return `${base} ${variants[props.variant]} ${sizes[props.size]}`;
  });
  </script>