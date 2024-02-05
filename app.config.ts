export default defineAppConfig({
  ui: {
    primary: 'green',
    gray: 'slate',
    footer: {
      bottom: {
        left: 'text-sm text-gray-500 dark:text-gray-400',
        wrapper: 'border-t border-gray-200 dark:border-gray-800',
      },
    },
  },
  seo: {
    siteName: 'Consumer DDR',
  },
  header: {
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
  toc: {
    bottom: {
      edit: 'https://github.com/ddradar/csddr/edit/main/content',
    },
  },
  footer: {
    credits: 'Copyright © 2023-2024 DDRadar',
    colorMode: false,
  },
})
