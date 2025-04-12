import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    landing: defineCollection({
      type: 'page',
      source: 'index.md',
    }),
    docs: defineCollection({
      type: 'page',
      source: {
        include: '**',
        exclude: ['index.md', '**/.*-template.md'],
      },
      schema: z.object({
        visibleAside: z.boolean().optional(),
        links: z
          .array(
            z.object({
              label: z.string(),
              icon: z.string(),
              to: z.string(),
              target: z.string().optional(),
            })
          )
          .optional(),
        colors: z
          .record(
            z.number(),
            z.object({
              name: z.string(),
              color: z.string(),
            })
          )
          .optional(),
      }),
    }),
  },
})
