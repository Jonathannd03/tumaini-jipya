export const useConstants = () => {
  const NAVIGATION_LINKS = [
    { label: 'Home', href: '/' },
    { label: 'Über uns', href: '/about-us' },
    { label: 'Projekte', href: '/projects' },
    { label: 'Mitgliedschaft', href: '/membership' },
    { label: 'Kontakt', href: '/contact' }
  ];

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
    tagline: 'Gemeinsam für humanitäre Hilfe, Klimaschutz und Bildung in Krisenregionen.',
    logoPath: '/images/logo.png'
  };

  const MISSION_AREAS = [
    {
      id: 'humanitarian',
      title: 'Humanitäre Hilfe',
      description: 'Bereitstellung von Nahrungsmitteln, Kleidung, Medikamenten und Unterkünften für Menschen in Krisenregionen.',
      gradient: 'from-red-500 to-pink-600',
      icon: 'heart'
    },
    {
      id: 'climate',
      title: 'Klimaschutz',
      description: 'Förderung klimafreundlicher Projekte und Unterstützung lokaler Initiativen für eine nachhaltige Zukunft.',
      gradient: 'from-green-500 to-emerald-600',
      icon: 'globe'
    },
    {
      id: 'education',
      title: 'Bildungsförderung',
      description: 'Durchführung von Bildungsprojekten, Sprachförderung und Freizeitgestaltung für geflüchtete Kinder.',
      gradient: 'from-blue-500 to-indigo-600',
      icon: 'education'
    }
  ];

  return {
    NAVIGATION_LINKS,
    SOCIAL_LINKS,
    CONTACT_INFO,
    ORGANIZATION,
    MISSION_AREAS
  };
};
