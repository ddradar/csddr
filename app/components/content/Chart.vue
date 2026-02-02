<template>
  <UBadge
    v-for="(level, i) in levels"
    :key="i"
    :title="filledColors[filledCharts[i]!].name"
    :color="filledColors[filledCharts[i]!].color"
    v-bind="rest"
  >
    {{ level }}
  </UBadge>
</template>

<script lang="ts" setup generic="T extends number = number">
import type { BadgeProps } from '#ui/types'

type ChartColor = { name: string; color: BadgeProps['color'] }

interface ChartProps {
  /**
   * Chart name/color mappings.
   * @default `BEGINNER` to `CHALLENGE`
   */
  colors?: Record<T, ChartColor>
  /** Levels per chart. Should be less than or equal to the length of `charts`. */
  levels: (number | '?' | '10+')[]
  /**
   * Chart type per chart level.
   * @default `[0, 1, 2, 3, 4]` if `dp` is `false`, `[1, 2, 3, 4]` if `dp` is `true`
   */
  charts?: T[]
  /**
   * Whether to skip the first chart (usually BEGINNER).
   * @default false
   */
  dp?: boolean
}

const {
  colors = undefined,
  levels,
  charts = undefined,
  dp,
  ...rest
} = defineProps<ChartProps & Omit<BadgeProps, 'color'>>()

const filledColors = computed<Record<T, ChartColor>>(
  () =>
    colors ??
    ({
      0: { name: 'BEGINNER', color: 'info' },
      1: { name: 'BASIC', color: 'warning' },
      2: { name: 'DIFFICULT', color: 'error' },
      3: { name: 'EXPERT', color: 'primary' },
      4: { name: 'CHALLENGE', color: 'secondary' },
    } as Record<T, ChartColor>)
)
const filledCharts = computed<T[]>(
  () =>
    charts ??
    (Object.entries(filledColors.value)
      .filter(([_, d]) => !!d)
      .map(([i]) => parseInt(i, 10))
      .slice(dp ? 1 : 0) as T[])
)
</script>
