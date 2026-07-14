<template>
  <div class="flex min-h-screen flex-col">
    <a href="#main-content" class="skip-link">{{ $t('a11y.skipToContent') }}</a>
    <Header />
    <main id="main-content" class="flex-grow">
      <slot />
    </main>
    <Footer />
  </div>
</template>
