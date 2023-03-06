<template>
  <div class="padding" :style="style">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { StyleValue } from "vue";

const padding = defineProps({
  left: {type: Number, default: 0},
  right: {type: Number, default: 0},
  top: {type: Number, default: 0},
  bottom: {type: Number, default: 0}
})

const style: StyleValue = {
  paddingLeft: `${padding.left}px`,
  paddingRight: `${padding.right}px`,
  paddingTop: `${padding.top}px`,
  paddingBottom: `${padding.bottom}px`
}
</script>
