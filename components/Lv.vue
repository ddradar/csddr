<template>
  <NuxtLink v-for="(l, i) in links" :key="l" :to="l">
    <Badge :type="type">{{ lv[i] ?? lv[0] }}</Badge>
  </NuxtLink>
</template>

<script lang="ts" setup>
interface LevelProps {
  type?: string
  links: string[]
  lv: (string | number)[]
}

defineProps<LevelProps>()
</script>
