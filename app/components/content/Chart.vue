<template>
  <UBadge
    v-for="(level, i) in levels"
    :key="i"
    :title="colors[charts[i]!]!.name"
    :color="colors[charts[i]!]!.color"
    v-bind="rest"
  >
    {{ level }}
  </UBadge>
</template>

<script lang="ts" setup>
import type { BadgeProps } from '#ui/types'

interface ChartProps extends /* @vue-ignore */ Omit<BadgeProps, 'color'> {
  colors?: Record<number, { name: string; color: BadgeProps['color'] }>
  levels: (number | '?' | '10+')[]
  charts?: number[]
  dp?: boolean
}

const props = withDefaults(defineProps<ChartProps>(), {
  colors: () => ({
    0: { name: 'BEGINNER', color: 'info' },
    1: { name: 'BASIC', color: 'warning' },
    2: { name: 'DIFFICULT', color: 'error' },
    3: { name: 'EXPERT', color: 'primary' },
    4: { name: 'CHALLENGE', color: 'secondary' },
  }),
  charts: p =>
    p.colors
      ? Object.entries(p.colors)
          .filter(([_, d]) => !!d)
          .map(([i]) => parseInt(i, 10))
      : p.dp
        ? [0, 1, 2, 3, 4]
        : [1, 2, 3, 4],
})
const rest = computed(() => {
  const { colors: _1, levels: _2, charts: _3, dp: _4, ...rest } = props
  return rest
})
</script>
