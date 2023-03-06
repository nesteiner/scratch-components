<template>
  <div class="expanded" :style="style">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import {computed, StyleValue} from "vue";

const props = defineProps({
  flex: {type: Number, default: 1}
})

const flex = computed(() => props.flex)
const style: StyleValue = {
  flexGrow: flex.value,
  flexShrink: 1,
  flexBasis: "auto"
}
</script>