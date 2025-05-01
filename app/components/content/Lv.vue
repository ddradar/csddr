<template>
  <NuxtLink v-for="(l, i) in links" :key="l" :to="l">
    <UBadge :color="color">{{ lv[i] ?? lv[0] }}</UBadge>
  </NuxtLink>
</template>

<script lang="ts" setup>
import type { BadgeProps } from '#ui/types'

interface LevelProps {
  links: string[]
  lv: (string | number)[]
  color: BadgeProps['color']
}

defineProps<LevelProps>()
</script>
