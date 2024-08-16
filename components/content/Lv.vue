<template>
  <NuxtLink v-for="(l, i) in links" :key="l" :to="l">
    <UBadge :color="color">{{ lv[i] ?? lv[0] }}</UBadge>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { BadgeColor } from '#ui/types'

interface LevelProps {
  color?: BadgeColor
  links: string[]
  lv: (string | number)[]
}

defineProps<LevelProps>()
</script>
