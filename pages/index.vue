<script setup lang="ts">
const { data: page } = await useAsyncData('index', () =>
  queryContent('/').findOne()
)

useSeoMeta({
  title: page.value.title,
  ogTitle: page.value.title,
  description: page.value.description,
  ogDescription: page.value.description,
})
</script>

<template>
  <div>
    <ULandingSection
      v-for="feature in page.features"
      :key="feature.title"
      :title="feature.title"
      :ui="{
        wrapper: 'py-8 sm:py-12',
        container: 'gap-4 sm:gap-y-8',
        title: 'text-2xl sm:text-3xl lg:text-4xl',
      }"
    >
      <UPageGrid>
        <ULandingCard
          v-for="(item, index) of feature.items"
          :key="index"
          v-bind="item"
        >
          <template #description>
            <!-- eslint-disable-next-line vue/no-v-html -->
            <span v-html="item.description"></span>
            <time class="block text-right text-gray-600">{{ item.date }}</time>
          </template>
        </ULandingCard>
      </UPageGrid>
    </ULandingSection>
  </div>
</template>
