<template>
    <Section>
      <Container>
        <div class="max-w-2xl mx-auto">
          <h2 class="text-3xl font-bold text-center mb-8">Kontaktieren Sie uns</h2>
          
          <form @submit.prevent="handleSubmit" class="space-y-6">
            <div class="grid md:grid-cols-2 gap-6">
              <FormInput
                v-model="formValues.name"
                label="Vollname"
                placeholder="Ihr Name"
                required
                :error="errors.name"
              />
              
              <FormInput
                v-model="formValues.company"
                label="Firma"
                placeholder="Ihre Firma"
              />
            </div>
            
            <div class="grid md:grid-cols-2 gap-6">
              <FormInput
                v-model="formValues.email"
                type="email"
                label="E-Mail"
                placeholder="ihre@email.de"
                required
                :error="errors.email"
              />
              
              <FormInput
                v-model="formValues.phone"
                type="tel"
                label="Telefon"
                placeholder="+49 123 456789"
              />
            </div>
            
            <FormSelect
              v-model="formValues.service"
              label="Interessierte Dienstleistung"
              :options="serviceOptions"
              placeholder="Bitte wählen Sie"
            />
            
            <FormTextarea
              v-model="formValues.message"
              label="Ihre Nachricht"
              placeholder="Beschreiben Sie Ihr Anliegen..."
              rows="5"
              required
              :error="errors.message"
            />
            
            <FormCheckbox
              v-model="formValues.agree"
              :error="errors.agree"
            >
              Ich habe die <a href="/datenschutz" class="text-primary-600 hover:text-primary-700">Datenschutzerklärung</a> gelesen und stimme zu.
            </FormCheckbox>
            
            <Button
              type="submit"
              variant="primary"
              size="lg"
              class="w-full"
              :disabled="isSubmitting"
            >
              {{ isSubmitting ? 'Wird gesendet...' : 'Nachricht senden' }}
            </Button>
          </form>
        </div>
      </Container>
    </Section>
  </template>
  
  <script setup>
  const { values: formValues, errors, isSubmitting, handleSubmit } = useForm({
    name: '',
    company: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    agree: false
  })
  
  const serviceOptions = [
    { value: 'workflow', label: 'n8n Workflow Entwicklung' },
    { value: 'ai', label: 'KI Automatisierung' },
    { value: 'integration', label: 'Datenintegration' },
    { value: 'consulting', label: 'Beratung' },
    { value: 'other', label: 'Andere' }
  ]
  
  const submitForm = async (values) => {
    // Handle form submission logic here
    console.log('Form submitted:', values)
    // Typically you would call an API endpoint here
  }
  </script>