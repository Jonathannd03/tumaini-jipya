import { useI18n } from 'vue-i18n';
import { computed } from 'vue';

export const useConstants = () => {
  const { t } = useI18n();

  const NAVIGATION_LINKS = computed(() => [
    { label: t('nav.home'), href: '/' },
    { label: t('nav.aboutUs'), href: '/about-us' },
    { label: t('nav.projects'), href: '/projects' },
    { label: t('nav.membership'), href: '/membership' },
    { label: t('nav.contact'), href: '/contact' }
  ]);

  const SOCIAL_LINKS = [
    {
      name: 'Facebook',
      url: '#',
      ariaLabel: 'Facebook'
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/tumaini_jipya_e.v?igsh=N2hteDh1aXgxNGky&utm_source=qr',
      ariaLabel: 'Instagram'
    },
    {
      name: 'Twitter',
      url: '#',
      ariaLabel: 'Twitter'
    }
  ];

  const CONTACT_INFO = {
    email: 'info@tumaini-jipya.org',
    address: {
      street: 'Kremerstraße 53',
      city: '47051 Duisburg',
      country: 'Deutschland'
    }
  };

  const ORGANIZATION = {
    name: 'Tumaini Jipya e.V.',
    fullName: 'Tumaini Jipya',
    logoPath: '/images/logo.png'
  };

  const MISSION_AREAS = computed(() => [
    {
      id: 'humanitarian',
      title: t('mission.humanitarian.title'),
      description: t('mission.humanitarian.description'),
      gradient: 'from-red-500 to-pink-600',
      icon: 'heart'
    },
    {
      id: 'climate',
      title: t('mission.climate.title'),
      description: t('mission.climate.description'),
      gradient: 'from-green-500 to-emerald-600',
      icon: 'globe'
    },
    {
      id: 'education',
      title: t('mission.education.title'),
      description: t('mission.education.description'),
      gradient: 'from-blue-500 to-indigo-600',
      icon: 'education'
    }
  ]);

  return {
    NAVIGATION_LINKS,
    SOCIAL_LINKS,
    CONTACT_INFO,
    ORGANIZATION,
    MISSION_AREAS
  };
};
