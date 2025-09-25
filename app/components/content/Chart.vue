<script lang="ts" setup>
import type { BadgeProps } from '#ui/types'

interface ChartProps extends Omit<BadgeProps, 'color'> {
  colors?: Record<number, { name: string; color: BadgeProps['color'] }>
  levels: (number | '?' | '10+')[]
  charts?: number[]
  dp?: boolean
}

const {
  colors = {
    0: { name: 'BEGINNER', color: 'info' },
    1: { name: 'BASIC', color: 'warning' },
    2: { name: 'DIFFICULT', color: 'error' },
    3: { name: 'EXPERT', color: 'primary' },
    4: { name: 'CHALLENGE', color: 'secondary' },
  },
  levels,
  charts: _charts = undefined,
  dp = false,
  ...rest
} = defineProps<ChartProps>()

const charts =
  _charts ||
  Object.entries(colors)
    .filter(([_, d]) => !!d)
    .map(([i]) => parseInt(i, 10))
if (dp) charts.shift()
</script>

<template>
  <UBadge
    v-for="(level, i) in levels"
    :key="i"
    :title="charts[i] !== undefined ? colors[charts[i]]?.name : undefined"
    :color="charts[i] !== undefined ? colors[charts[i]]?.color : undefined"
    v-bind="rest"
  >
    {{ level }}
  </UBadge>
</template>
