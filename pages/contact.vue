<template>
    <section class="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div class="max-w-7xl mx-auto px-6 lg:px-8">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <!-- Left Side - Contact Info -->
          <div>
            <div class="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-semibold mb-6">
              {{ $t('contact.badge') }}
            </div>

            <h2 class="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-tight">
              {{ $t('contact.title') }}
            </h2>

            <p class="text-lg text-gray-600 mb-8 leading-relaxed">
              {{ $t('contact.description') }}
            </p>
  
            <!-- Contact Methods -->
            <div class="space-y-6 mb-8">
              <div 
                v-for="(contact, idx) in contactMethods" 
                :key="idx"
                class="flex items-start gap-4 group"
              >
                <div :class="`flex-shrink-0 w-14 h-14 bg-gradient-to-br ${contact.color} rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300`">
                  <component :is="contact.icon" />
                </div>
                <div>
                  <h3 class="text-lg font-bold text-gray-900 mb-1">{{ $t(contact.titleKey) }}</h3>
                  <a
                    :href="contact.link"
                    class="text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    {{ contact.value }}
                  </a>
                  <p v-if="contact.subtextKey" class="text-sm text-gray-500 mt-1">{{ $t(contact.subtextKey) }}</p>
                </div>
              </div>
            </div>
  
            <!-- Social Media -->
            <div>
              <h3 class="text-lg font-bold text-gray-900 mb-4">{{ $t('contact.social') }}</h3>
              <div class="flex gap-3">
                <a 
                  v-for="(social, idx) in socialLinks" 
                  :key="idx"
                  :href="social.url" 
                  :aria-label="social.name"
                  :class="`w-12 h-12 bg-gradient-to-br ${social.color} rounded-lg flex items-center justify-center text-white hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl`"
                >
                  <component :is="social.icon" />
                </a>
              </div>
            </div>
          </div>
  
          <!-- Right Side - Contact Form -->
          <div class="bg-white rounded-3xl shadow-2xl p-8 lg:p-10 border border-gray-100">
            <h3 class="text-2xl font-bold text-gray-900 mb-6">{{ $t('contact.form.send') }}</h3>
            
            <form @submit.prevent="handleSubmit" class="space-y-6">
              <!-- Name -->
              <div>
                <label for="name" class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.name') }} *
                </label>
                <input 
                  type="text" 
                  id="name"
                  v-model="formData.name"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="Ihr vollständiger Name"
                />
              </div>
  
              <!-- Email -->
              <div>
                <label for="email" class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.email') }} *
                </label>
                <input 
                  type="email" 
                  id="email"
                  v-model="formData.email"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="ihre@email.de"
                />
              </div>
  
              <!-- Phone -->
              <div>
                <label for="phone" class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.phone') }}
                </label>
                <input 
                  type="tel" 
                  id="phone"
                  v-model="formData.phone"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                  placeholder="+49 123 456 789"
                />
              </div>
  
              <!-- Subject -->
              <div>
                <label for="subject" class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.subject') }} *
                </label>
                <select
                  id="subject"
                  v-model="formData.subject"
                  required
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                >
                  <option value="">{{ $t('contact.form.subjects.select') }}</option>
                  <option value="spende">{{ $t('contact.form.subjects.donation') }}</option>
                  <option value="mitgliedschaft">{{ $t('contact.form.subjects.membership') }}</option>
                  <option value="ehrenamt">{{ $t('contact.form.subjects.volunteer') }}</option>
                  <option value="partnerschaft">{{ $t('contact.form.subjects.partnership') }}</option>
                  <option value="allgemein">{{ $t('contact.form.subjects.general') }}</option>
                  <option value="sonstiges">{{ $t('contact.form.subjects.other') }}</option>
                </select>
              </div>
  
              <!-- Message -->
              <div>
                <label for="message" class="block text-sm font-semibold text-gray-700 mb-2">
                  {{ $t('contact.form.message') }} *
                </label>
                <textarea 
                  id="message"
                  v-model="formData.message"
                  required
                  rows="5"
                  class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all resize-none"
                  placeholder="Ihre Nachricht an uns..."
                ></textarea>
              </div>
  
              <!-- Privacy Checkbox -->
              <div class="flex items-start gap-3">
                <input 
                  type="checkbox" 
                  id="privacy"
                  v-model="formData.privacy"
                  required
                  class="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                />
                <label for="privacy" class="text-sm text-gray-600">
                  {{ $t('contact.form.privacy') }}
                </label>
              </div>
  
              <!-- Submit Button -->
              <button 
                type="submit"
                :disabled="isSubmitting"
                class="w-full px-8 py-4 bg-gradient-to-r from-blue-600 to-green-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                <span v-if="!isSubmitting">{{ $t('contact.form.send') }}</span>
                <span v-else class="flex items-center justify-center gap-2">
                  <svg class="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                    <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
                    <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  {{ $t('contact.form.sending') }}
                </span>
              </button>
  
              <!-- Success Message -->
              <div v-if="submitSuccess" class="p-4 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm">
                ✓ {{ $t('contact.form.success') }}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </template>
  
  <script setup>
  import { h, ref, reactive } from 'vue';

  const { CONTACT_INFO, ORGANIZATION } = useConstants();
  const isSubmitting = ref(false);
  const submitSuccess = ref(false);
  
  const formData = reactive({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    privacy: false
  });
  
  const contactMethods = [
    {
      titleKey: 'contact.info.email',
      value: CONTACT_INFO.email,
      link: `mailto:${CONTACT_INFO.email}`,
      subtextKey: 'contact.info.emailResponse',
      color: 'from-blue-500 to-blue-600',
      icon: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z' })
      ])
    },
    {
      titleKey: 'contact.info.phone',
      value: '+49 (0) 123 456 789',
      link: 'tel:+49123456789',
      subtextKey: 'contact.info.phoneHours',
      color: 'from-green-500 to-green-600',
      icon: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z' })
      ])
    },
    {
      titleKey: 'contact.info.address',
      value: `${ORGANIZATION.name}, ${CONTACT_INFO.address.city}`,
      link: '#',
      subtextKey: 'contact.info.visitByAppointment',
      color: 'from-purple-500 to-purple-600',
      icon: () => h('svg', { class: 'w-6 h-6', fill: 'none', stroke: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z' }),
        h('path', { 'stroke-linecap': 'round', 'stroke-linejoin': 'round', 'stroke-width': '2', d: 'M15 11a3 3 0 11-6 0 3 3 0 016 0z' })
      ])
    }
  ];
  
  const socialLinks = [
    {
      name: 'Facebook',
      url: 'https://facebook.com/tumainijipya',
      color: 'from-blue-600 to-blue-700',
      icon: () => h('svg', { class: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z' })
      ])
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tumaini_jipya_e.v?igsh=N2hteDh1aXgxNGky&utm_source=qr',
      color: 'from-pink-500 to-purple-600',
      icon: () => h('svg', { class: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z' })
      ])
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/tumainijipya',
      color: 'from-blue-400 to-blue-600',
      icon: () => h('svg', { class: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z' })
      ])
    },
    {
      name: 'LinkedIn',
      url: 'https://linkedin.com/company/tumainijipya',
      color: 'from-blue-700 to-blue-800',
      icon: () => h('svg', { class: 'w-5 h-5', fill: 'currentColor', viewBox: '0 0 24 24' }, [
        h('path', { d: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z' })
      ])
    }
  ];
  
  const handleSubmit = async () => {
    isSubmitting.value = true;
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    // Reset form
    Object.keys(formData).forEach(key => {
      if (typeof formData[key] === 'boolean') {
        formData[key] = false;
      } else {
        formData[key] = '';
      }
    });
    
    isSubmitting.value = false;
    submitSuccess.value = true;
    
    // Hide success message after 5 seconds
    setTimeout(() => {
      submitSuccess.value = false;
    }, 5000);
  };
  </script>