<template>
    <div class="flex flex-col min-h-screen">
      <Header/>
      <main class="flex-grow">
        <slot /> <!-- This is where page content is injected -->
      </main>
      <Footer />
    </div>
  </template>