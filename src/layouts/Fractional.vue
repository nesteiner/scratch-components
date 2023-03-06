<template>
  <div class="fractional" :style="style">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { computed, StyleValue } from "vue"

const props = defineProps({
  widthFactor: {type: Number, default: 1.0},
  heightFactor: {type: Number, default: 1.0}
})

// 这边是比例，格式化一下
const widthFactor = computed(() => Number(props.widthFactor * 100).toFixed(0).toString() + '%')
const heightFactor = computed(() => Number(props.heightFactor * 100).toFixed(0).toString() + '%')

const style: StyleValue = {
  width: widthFactor.value,
  height: heightFactor.value
}
</script>