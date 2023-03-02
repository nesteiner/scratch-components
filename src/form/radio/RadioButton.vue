<template>
  <span class="radio-button" :class="{'active': selected === value && !disabled, 'disabled': disabled}" @click="handleClick">
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
      value: number | string | boolean | object,
      modelValue?: number | string | boolean | object,
      disabled?: boolean,
      label?: string
    }>(),
    {
      modelValue: undefined,
      disabled: false,
    }
)

const emits = defineEmits(["update:modelValue"])
const selected = props.modelValue !== undefined ? computed({
  get: () => props.modelValue,
  set: (newvalue) => emits("update:modelValue", newvalue)
}) : inject<WritableComputedRef<number | string | boolean | object>>("selected")

function handleClick() {
  if (!props.disabled && selected?.value !== undefined) {
    selected.value = props.value
  }
}

onMounted(() => {
  if (props.modelValue == undefined && selected?.value == undefined) {
    throw "[error] you must set v-model in `RadioGroup` in while don't set v-model in `RadioButton`"
  }
})
</script>

<style lang="scss" scoped>
span.radio-button {
  display: inline-block;
  padding: 12px 19px;
  border: 1px solid rgba(0, 0, 0, 0.15);
  border-radius: 5px;


  &.active {
    border: 1px solid rgba(0, 0, 255, 0.45);
  }

  &.disabled.active {
    border: 1px solid rgba(0, 0, 255, 0.45);
  }

  &.disabled {
    color: rgba(0, 0, 0, 0.2);
  }
}
</style>