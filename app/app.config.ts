export default defineAppConfig({
  ui: {
    colors: {
      primary: 'green',
      secondary: 'purple',
    },
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
    credits: 'Copyright © 2023-2026 DDRadar',
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
