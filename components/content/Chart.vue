<template>
  <Badge
    v-for="(level, i) in levels"
    :key="i"
    :title="types[charts[i]].name"
    :type="types[charts[i]].type"
  >
    {{ level }}
  </Badge>
</template>

<script lang="ts" setup>
interface ChartProps {
  types?: Record<number, { name: string; type: string }>
  levels: (number | '?' | '10+')[]
  charts?: number[]
}

withDefaults(defineProps<ChartProps>(), {
  types: () => ({
    0: { name: 'BEGINNER', type: 'info' },
    1: { name: 'BASIC', type: 'warning' },
    2: { name: 'DIFFICULT', type: 'danger' },
    3: { name: 'EXPERT', type: 'success' },
    4: { name: 'CHALLENGE', type: 'primary' },
  }),
  charts: p =>
    Object.keys(p.types ?? { 0: '', 1: '', 2: '', 3: '', 4: '' }).map(s =>
      parseInt(s, 10)
    ),
})
</script>
