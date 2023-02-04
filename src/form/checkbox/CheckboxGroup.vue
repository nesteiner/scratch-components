<template>
  <div class="checkbox-group">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import {computed, provide} from "vue";

const props = defineProps<{
  modelValue: any[]
}>()

const emits = defineEmits(["update:modelValue"])

const selected = computed({
  get: () => props.modelValue,
  set: (newvalue) => emits("update:modelValue", newvalue)
})

provide("selected", selected)
</script>