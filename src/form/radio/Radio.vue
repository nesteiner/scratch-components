<template>
  <span class="radio">
    <input type="radio"
           :value="value"
           v-model="selected"
           :disabled="disabled"/>
    <span>
      <slot/>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </span>
</template>

<script lang="ts" setup>
import {computed, inject, onMounted, WritableComputedRef} from "vue";

const props = withDefaults(
    defineProps<{
      modelValue?: number | string | boolean | object | undefined,
      value: number | string | boolean | object,
      label: string,
      disabled?: boolean
    }>(),

    {
      modelValue: undefined,
      disabled: false
    }
)

const emits = defineEmits(["update:modelValue"])

const selected = props.modelValue !== undefined ? computed({
  get: () => props.modelValue,
  set: (newvalue) => emits("update:modelValue", newvalue)
}) : inject<WritableComputedRef<number | string | boolean | object>>("selected")

onMounted(() => {
  if (props.modelValue == undefined && selected?.value == undefined) {
    throw "[error] you must set v-model in `RadioGroup` in while don't set v-model in `Radio`"
  }
})
</script>