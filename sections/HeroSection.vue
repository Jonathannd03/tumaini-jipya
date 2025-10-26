<template>
  <section class="pt-24 pb-16 bg-gradient-to-br from-primary-500 to-secondary-500 text-white overflow-hidden">
    <Container>
      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Left Content -->
        <div class="slide-in">
          <h1 class="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Intelligente
            <span class="block text-yellow-300">Automatisierung</span>
            für Ihr Unternehmen
          </h1>
          
          <p class="text-xl mb-8 text-gray-200 max-w-lg">
            Wir transformieren Ihre Geschäftsprozesse mit KI-gesteuerten Workflows und n8n-Automatisierung. 
            Steigern Sie Effizienz und reduzieren Sie manuelle Arbeit um bis zu 80%.
          </p>
          
          <div class="flex flex-col sm:flex-row gap-4 mb-12">
            <Button 
              variant="secondary" 
              size="lg"
              @click="scrollToContact"
            >
              Kostenlose Analyse starten
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              @click="openDemoModal"
            >
              <i class="fas fa-play mr-2"></i>
              Live Demo ansehen
            </Button>
          </div>
          
          <!-- Stats -->
          <div class="grid grid-cols-3 gap-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-yellow-300">{{ animatedStats.processes }}+</div>
              <div class="text-sm text-gray-300">Automatisierte Prozesse</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-yellow-300">{{ animatedStats.satisfaction }}%</div>
              <div class="text-sm text-gray-300">Kundenzufriedenheit</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-yellow-300">{{ animatedStats.clients }}+</div>
              <div class="text-sm text-gray-300">Zufriedene Kunden</div>
            </div>
          </div>
        </div>
        
        <!-- Right Content - Animated Dashboard -->
        <div class="relative">
          <div class="animate-float">
            <div class="glass-effect rounded-2xl p-8 shadow-2xl">
              <div class="flex items-center space-x-4 mb-6">
                <div class="w-12 h-12