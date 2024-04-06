<template>
  <template v-if="unlocked">
    <del><slot /></del>
    <span>
      (<time>{{ dateTime.toLocaleString() }}</time
      >に通常解禁)
    </span>
  </template>
  <template v-else>
    <slot />
    <span>
      (<time>{{ dateTime.toLocaleString() }}</time
      >に通常解禁予定)
    </span>
  </template>
</template>

<script lang="ts" setup>
interface UnlockAtProps {
  date: string
}

const props = defineProps<UnlockAtProps>()

const dateTime = computed(() => new Date(props.date))
const unlocked = computed(() => dateTime.value <= new Date())
</script>
