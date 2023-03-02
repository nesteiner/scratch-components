<template>
  <label class="checkbox" :class="{'disabled': disabled}">
    <span class="input">
      <input type="checkbox" :checked="ischecked" :value="value"
             @change="updateInput($event)"
             :disabled="disabled"/>
    </span>

    <span class="label">
      <slot/>
      <template v-if="!$slots.default">{{label}}</template>
    </span>
  </label>
</template>

<script lang="ts" setup>
import {computed, inject, onMounted, WritableComputedRef} from "vue";
type valueType = number | string | boolean | object
const props = withDefaults(
    defineProps<{
      modelValue?: valueType[]
      disabled?: boolean,
      value: valueType,
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
  if(props.modelValue !== undefined) {
    return props.modelValue.includes(props.value)
  } else {
    return selected?.value.includes(props.value) ?? false
  }
})

const updateInput = (event: any) => {
  let checked = event.target.checked
  if(props.modelValue !== undefined) {
    let newvalue = [...props.modelValue]

    if(checked) {
      newvalue.push(props.value)
    } else {
      newvalue.splice(newvalue.indexOf(props.value), 1)
    }

    emits("update:modelValue", newvalue)
  } else if (selected?.value instanceof Array) {
    let newvalue = [...selected.value]
    if(checked) {
      newvalue.push(props.value)
    } else {
      newvalue.splice(newvalue.indexOf(props.value), 1)
    }

    selected.value = newvalue
  }
}

onMounted(() => {
  if (props.modelValue == undefined && selected?.value == undefined) {
    throw "[error] you can't without v-model on CheckbogGroup while without v-model on Checkbox"
  }
})
</script>

<style lang="scss" scoped>
label.checkbox {
  cursor: pointer;
  display: inline-flex;
  align-items: center;

  span.input {
    display: inline-flex;
    position: relative;
    cursor: pointer;

    input[type="checkbox"] {
      cursor: pointer;
    }
  }
}

label.checkbox.disabled {
  cursor: not-allowed;
  span.input {
    cursor: not-allowed;
    input[type="checkbox"] {
      cursor: not-allowed;
    }
  }

  span.label {
    cursor: not-allowed;
    color: rgba(0, 0, 0, 0.15);
  }
}
</style>