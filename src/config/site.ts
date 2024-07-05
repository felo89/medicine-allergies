export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: 'Medicine allergies',
  description: 'Page to know if a medicine contains an specific alergen',
  navItems: [
    {
      label: 'Home',
      href: '/',
    },
  ],
  navMenuItems: [
    {
      label: 'Profile',
      href: '/profile',
    },
    {
      label: 'Dashboard',
      href: '/dashboard',
    },
    {
      label: 'Projects',
      href: '/projects',
    },
    {
      label: 'Team',
      href: '/team',
    },
    {
      label: 'Calendar',
      href: '/calendar',
    },
    {
      label: 'Settings',
      href: '/settings',
    },
    {
      label: 'Help & Feedback',
      href: '/help-feedback',
    },
    {
      label: 'Logout',
      href: '/logout',
    },
  ],
  links: {
    github: 'https://github.com/felo89/medicine-allergies',
    twitter: 'https://twitter.com/getnextui',
    docs: 'https://nextui.org',
    sponsor: 'https://patreon.com/jrgarciadev',
  },
};
