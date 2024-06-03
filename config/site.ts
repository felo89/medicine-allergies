export type SiteConfig = typeof siteConfig;

export const siteConfig = {
  name: "Medicine Allergies",
  description: "Make beautiful websites regardless of your design experience.",
  navItems: [
    {
      label: "home",
      href: "/",
    },
    {
      label: "about",
      href: "/about",
    },
  ],
  navMenuItems: [
    {
      label: "Profile",
      href: "/profile",
    },
    {
      label: "Help & Feedback",
      href: "/help-feedback",
    },
  ],
  links: {
    github: "https://github.com/felo89/medicine-allergies",
    docs: "https://nextui.org",
    sponsor: "https://patreon.com/jrgarciadev",
  },
};
