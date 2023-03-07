<template>
  <div class="contraint-box" :style="style">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { computed, StyleValue } from 'vue';

const props = withDefaults(
  defineProps<{
    minWidth?: number | string,
    maxWidth?: number | string,
    minHeight?: number | string,
    maxHeight?: number | string
  }>(),

  {
    minWidth: undefined,
    maxWidth: undefined,
    minHeight: undefined,
    maxHeight: undefined
  }
)

const minWidth = computed(() => {
  if (typeof props.minWidth == 'number') {
    return `${props.minWidth}px`
  } else {
    return props.minWidth
  }
})

const maxWidth = computed(() => {
  if (typeof props.maxWidth == 'number') {
    return `${props.maxWidth}px`
  } else {
    return props.maxWidth
  }
})

const minHeight = computed(() => {
  if (typeof props.minHeight == 'number') {
    return `${props.minHeight}px`
  } else {
    return props.minHeight
  }
})

const maxHeight = computed(() => {
  if (typeof props.maxHeight == 'number') {
    return `${props.maxHeight}px`
  } else {
    return props.maxHeight
  }
})

const style = computed(() => {
  let _style: StyleValue = {}

  if (minWidth.value !== undefined) {
    _style.minWidth = minWidth.value
  }

  if (minHeight.value !== undefined) {
    _style.minHeight = minHeight.value
  }

  if (maxWidth.value !== undefined) {
    _style.maxWidth = maxWidth.value
  }

  if (maxHeight.value !== undefined) {
    _style.maxHeight = maxHeight.value
  }

  return _style
})
</script>