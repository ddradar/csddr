<script setup lang="ts">
import type { ContentNavigationItem } from '@nuxt/content'

const navigation = inject<Ref<ContentNavigationItem[]>>('navigation')

const { header } = useAppConfig()
</script>

<template>
  <UHeader :ui="{ center: 'flex-1' }">
    <UContentSearchButton label="Search..." variant="outline" class="w-full">
      <template #trailing>
        <div class="ms-auto flex items-center gap-0.5">
          <UKbd value="meta" />
          <UKbd value="k" />
        </div>
      </template>
    </UContentSearchButton>

    <template #title>Consumer DDR</template>

    <template #right>
      <UContentSearchButton class="lg:hidden" />

      <UColorModeButton />

      <template v-if="header?.links">
        <UButton
          v-for="(link, index) of header.links"
          :key="index"
          v-bind="{ color: 'neutral', variant: 'ghost', ...link }"
        />
      </template>
    </template>

    <template #content>
      <UContentNavigation highlight :navigation="navigation" />
    </template>
  </UHeader>
</template>
