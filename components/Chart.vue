<template>
  <Badge
    v-for="(level, i) in levels"
    :key="i"
    :title="chartTypes[charts[i]].name"
    :type="chartTypes[charts[i]].type"
  >
    {{ level }}
  </Badge>
</template>

<script lang="ts" setup>
interface Props {
  chartTypes?: Record<number, { name: string; type: string }>
  levels: (number | '?' | '10+')[]
  charts?: number[]
}
const _defaultTypes = {
  0: { name: 'BEGINNER', type: 'info' },
  1: { name: 'BASIC', type: 'warning' },
  2: { name: 'DIFFICULT', type: 'danger' },
  3: { name: 'EXPERT', type: 'success' },
  4: { name: 'CHALLENGE', type: 'primary' },
}

withDefaults(defineProps<Props>(), {
  chartTypes: () => _defaultTypes,
  charts: p =>
    Object.keys(p.chartTypes ?? _defaultTypes).map(s => parseInt(s, 10)),
})
</script>
