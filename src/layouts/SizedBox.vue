<template>
  <div class="sizedbox" :style="style">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { computed, ref, StyleValue } from "vue"

const props = defineProps({
  width: {
    type: Number,
    default: -1,
  },

  height: {
    type: Number,
    default: -1,
  }
})

const width = computed(() => props.width >= 0 ? props.width.toString() + 'px' : 'fit-content')
const height = computed(() => props.height >= 0 ? props.height.toString() + 'px' : 'fit-content')

const style: StyleValue = {
  width: width.value,
  height: height.value
}
</script>