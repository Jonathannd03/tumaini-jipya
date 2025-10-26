import { defineStore } from 'pinia'

export const useUIStore = defineStore('ui', {
  state: () => ({
    isMobileMenuOpen: false,
    currentModal: null,
    isLoading: false,
    notifications: []
  }),
  
  actions: {
    toggleMobileMenu() {
      this.isMobileMenuOpen = !this.isMobileMenuOpen
    },
    
    openModal(modalName) {
      this.currentModal = modalName
      document.body.style.overflow = 'hidden'
    },
    
    closeModal() {
      this.currentModal = null
      document.body.style.overflow = 'auto'
    },
    
    addNotification(notification) {
      this.notifications.push(notification)
      setTimeout(() => {
        this.removeNotification(notification.id)
      }, 5000)
    },
    
    removeNotification(id) {
      this.notifications = this.notifications.filter(n => n.id !== id)
    },
    
    setLoading(loading) {
      this.isLoading = loading
    }
  }
})