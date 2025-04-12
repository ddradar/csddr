<script setup lang="ts">
const { seo } = useAppConfig()

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

useHead({
  meta: [{ name: 'viewport', content: 'width=device-width, initial-scale=1' }],
  link: [{ rel: 'icon', href: '/favicon.ico' }],
  htmlAttrs: { lang: 'en' },
})

useSeoMeta({
  ogSiteName: seo?.siteName,
  twitterCard: 'summary_large_image',
})

provide('navigation', navigation)
</script>

<template>
  <div>
    <NuxtLoadingIndicator />

    <AppHeader />

    <UMain>
      <NuxtLayout>
        <NuxtPage />
      </NuxtLayout>
    </UMain>

    <AppFooter />

    <ClientOnly>
      <LazyUContentSearch :files="files" :navigation="searchNavigation" />
    </ClientOnly>
  </div>
</template>
