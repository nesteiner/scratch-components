<template>
  <div class="fractional">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue"

const props = defineProps({
  widthFactor: {type: Number, default: 1.0},
  heightFactor: {type: Number, default: 1.0}
})

// 这边是比例，格式化一下
const widthFactor = computed(() => Number(props.widthFactor * 100).toFixed(0).toString() + '%')
const heightFactor = computed(() => Number(props.heightFactor * 100).toFixed(0).toString() + '%')
</script>

<style lang="scss" scoped>
div.fractional {
  width: v-bind(widthFactor);
  height: v-bind(heightFactor);
}
</style>