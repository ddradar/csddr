export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      secondary: 'purple',
    },
  },
  uiPro: {
    footer: {
      slots: {
        root: 'border-t border-(--ui-border)',
        left: 'text-sm text-(--ui-text-muted)',
      },
    },
  },
  seo: {
    siteName: 'Consumer DDR',
  },
  header: {
    logo: {
      alt: '',
      light: '',
      dark: '',
    },
    search: true,
    colorMode: true,
    links: [
      {
        icon: 'i-simple-icons-github',
        'aria-label': 'GitHub Repository',
        to: 'https://github.com/ddradar/csddr',
        target: '_blank',
      },
    ],
  },
  footer: {
    credits: 'Copyright © 2023-2025 DDRadar',
    colorMode: false,
    links: [
      {
        icon: 'i-simple-icons-nuxtdotjs',
        to: 'https://nuxt.com',
        target: '_blank',
        'aria-label': 'Nuxt Website',
      },
      {
        icon: 'i-simple-icons-nuxtdotjs',
        to: 'https://content.nuxt.com',
        target: '_blank',
        'aria-label': 'Nuxt Content',
        color: 'primary',
      },
    ],
  },
  toc: {
    title: 'Table of Contents',
    bottom: {
      title: 'Community',
      edit: 'https://github.com/ddradar/csddr/edit/main/content',
      links: [],
    },
  },
} as const)
