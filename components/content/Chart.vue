<template>
  <UBadge
    v-for="(level, i) in levels"
    :key="i"
    :title="colors[charts[i]].name"
    :color="colors[charts[i]].color"
  >
    {{ level }}
  </UBadge>
</template>

<script lang="ts" setup>
interface ChartProps {
  colors?: Record<number, { name: string; color: string }>
  levels: (number | '?' | '10+')[]
  charts?: number[]
  dp?: boolean
}

withDefaults(defineProps<ChartProps>(), {
  colors: () => ({
    0: { name: 'BEGINNER', color: 'blue' },
    1: { name: 'BASIC', color: 'yellow' },
    2: { name: 'DIFFICULT', color: 'red' },
    3: { name: 'EXPERT', color: 'green' },
    4: { name: 'CHALLENGE', color: 'purple' },
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
</script>
