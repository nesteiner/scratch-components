<template>
  <span class="radio-group">
    <slot/>
  </span>
</template>

<script lang="ts" setup>
import {computed, provide} from "vue";

const props = defineProps<{
  modelValue: number | string | boolean | object
}>()

const emits = defineEmits(["update:modelValue"])
const selected = computed({
  get: () => props.modelValue,
  set: (newvalue) => emits("update:modelValue", newvalue)
})

provide("selected", selected)
</script>