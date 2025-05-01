<script setup lang="ts">
import type { NuxtError } from '#app'

defineProps<{ error: NuxtError }>()

useHead({ htmlAttrs: { lang: 'en' } })

useSeoMeta({
  title: 'Page not found',
  description: 'We are sorry but this page could not be found.',
})

const { data: navigation } = await useAsyncData('navigation', () =>
  queryCollectionNavigation('docs').where('type', '=', 'series')
)
const { data: searchNavigation } = await useAsyncData('searchNavigation', () =>
  queryCollectionNavigation('docs')
)
const { data: files } = useLazyAsyncData(
  'search',
  () => queryCollectionSearchSections('docs'),
  { server: false }
)

provide('navigation', navigation)
</script>

<template>
  <div>
    <AppHeader />

    <UError :error="error" />

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch :files="files" :navigation="searchNavigation" />
    </ClientOnly>
  </div>
</template>
