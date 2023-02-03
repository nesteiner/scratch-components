<template>
  <div class="padding" :style="styleMap">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "@vue/reactivity"

const padding = defineProps({
  left: {type: Number, default: 0},
  right: {type: Number, default: 0},
  top: {type: Number, default: 0},
  bottom: {type: Number, default: 0}
})

const styleMap = ref({
  paddingLeft: `${padding.left}px`,
  paddingRight: `${padding.right}px`,
  paddingTop: `${padding.top}px`,
  paddingBottom: `${padding.bottom}px`
})
</script>
