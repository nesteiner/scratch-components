<template>
  <span class="checkbox-button" :class="{'disabled': disabled, 'ischecked': ischecked}" @click="handleClick">
    <span class="inner">
      <slot/>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </span>
</template>

<script lang="ts" setup>
import {computed, inject, onMounted, WritableComputedRef} from "vue";

type valueType = number | string | boolean | object
const props = withDefaults(
    defineProps<{
      modelValue?: valueType[] | undefined,
      value: valueType,
      disabled?: boolean,
      label: string
    }>(),
    {
      modelValue: undefined,
      disabled: false
    }
)

const emits = defineEmits(["update:modelValue"])
const selected: WritableComputedRef<valueType[]> | undefined = props.modelValue !== undefined ? undefined : inject<WritableComputedRef<valueType[]>>("selected")
const ischecked = computed(() => {
  if(props.modelValue instanceof Array) {
    return props.modelValue.includes(props.value)
  } else {
    return selected?.value.includes(props.value) ?? false
  }
})

const handleClick = () => {
  if(props.disabled) {
    return
  }

  if(props.modelValue instanceof Array) {
    let newvalue = [...props.modelValue]
    if(ischecked.value) {
      newvalue.splice(newvalue.indexOf(props.value), 1)
    } else {
      newvalue.push(props.value)
    }

    emits("update:modelValue", newvalue)
  } else if (selected?.value instanceof Array) {
    let newvalue = [...selected.value]
    if(ischecked.value) {
      newvalue.splice(newvalue.indexOf(props.value), 1)
    } else {
      newvalue.push(props.value)
    }

    selected.value = newvalue
  }
}

onMounted(() => {
  if (props.modelValue == undefined && selected?.value == undefined) {
    throw "[error] you can't without v-model on CheckbogGroup while without v-model on CheckboxButton"
  }
})

</script>

<style lang="scss" scoped>
span.checkbox-button {
  display: inline-block;
  border: 1px solid rgba(0, 0, 0, 0.14);
  border-radius: 2px;
  padding: 12px 19px;
  cursor: pointer;
  &:hover {
    color: #409eff;
  }

  span.inner {

  }
}

span.checkbox-button.ischecked {
  color: white;
  background: #409eff;

  &.disabled {
    color: white;
  }
}

span.checkbox-button.disabled {
  cursor: not-allowed;
  color: rgba(0, 0, 0, 0.14);
}
</style>