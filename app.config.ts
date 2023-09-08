export default defineAppConfig({
  docus: {
    title: 'Consumer DDR',
    description: 'Consumer DDR Song List',
    image:
      'https://user-images.githubusercontent.com/904724/185365452-87b7ca7b-6030-4813-a2db-5e65c785bf88.png',
    socials: { github: 'ddradar/csddr' },
    github: {
      dir: '/content',
      branch: 'main',
      repo: 'csddr',
      owner: 'ddradar',
      edit: true,
    },
    aside: {
      level: 0,
      collapsed: false,
      exclude: [],
    },
    main: {
      padded: true,
      fluid: true,
    },
    header: {
      logo: true,
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
  },
})
