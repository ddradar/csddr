export default defineAppConfig({
  docus: {
    title: 'Consumer DDR',
    description: 'Consumer DDR Song List',
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
      showLinkIcon: true,
      exclude: [],
      fluid: true,
    },
  },
})
