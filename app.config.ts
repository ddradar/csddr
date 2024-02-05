export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
  },
  seo: {
    siteName: 'Consumer DDR',
  },
  header: {
    links: [
      {
        icon: 'i-simple-icons-github',
        'aria-label': 'GitHub Repository',
        to: 'https://github.com/ddradar/csddr',
        target: '_blank',
      },
    ],
  },
  toc: {
    bottom: {
      edit: 'https://github.com/ddradar/csddr/edit/main/content',
    },
  },
  footer: {
    credits: 'Copyright © 2023-2024 DDRadar',
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
        color: 'green',
      },
      {
        icon: 'i-simple-icons-nuxtdotjs',
        to: 'https://nuxt.studio',
        target: '_blank',
        'aria-label': 'Nuxt Studio',
        color: 'blue',
      },
    ],
  },
})
