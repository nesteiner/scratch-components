<template>
  <Row class="textfield" main-axis-size="max" cross-axis-aligment="center">
    <Expanded class="left">
      <input :type="type"
             :maxlength="maxlength"
             :value="modelValue"
             @input="updateInput($event)"
             :placeholder="placeholder"
             :disabled="disabled"/>

    </Expanded>

    <Row class="right" main-axis-size="min" cross-axis-aligment="center">
      <template v-if="clearable && modelValue.length > 0">
        <svg @click="clear" t="1676018443900" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2704"><path d="M923.2 803l-632.2-0.8L0.1 511.3l290.9-290h632.1c55.7 0 100.9 45.3 100.9 100.9v379.9c0.1 55.6-45.2 100.9-100.8 100.9z m-616-39.9l616 0.8c34.1 0 61.8-27.8 61.8-61.9V322.2c0-34.1-27.8-61.9-61.9-61.9h-616l-251.8 251 251.9 251.8z" fill="#303030" p-id="2705"></path><path d="M739.4 371.3l40.2 40.2-241.3 241.4-40.2-40.2 241.3-241.4z" fill="#303030" p-id="2706"></path><path d="M538.3 371.3l241.4 241.4-40.2 40.2-241.4-241.3 40.2-40.3z" fill="#303030" p-id="2707"></path></svg>
      </template>

      <template v-if="maxlength !== undefined && modelValue.length > 0">
        <span class="limit"> {{modelValue.length}}/{{maxlength}} </span>
      </template>
    </Row>
  </Row>
</template>

<script lang="ts" setup>
import {Expanded, Row} from "@/layouts"

type inputType = "text" | "password" | "email" | "tel"
const props = withDefaults(
    defineProps<{
      modelValue: string,
      type?: inputType,
      maxlength?: number,
      clearable?: boolean,
      placeholder?: string,
      disabled?: boolean
    }>(),
    {
      type: "text",
      maxlength: undefined,
      clearable: false,
      placeholder: undefined,
      disabled: false
    }
)
const emits = defineEmits(["update:modelValue"])
const clear = () => emits("update:modelValue", "")
// const updateInput = (value: string) => emits("update:modelValue", value)
const updateInput = (event: Event) => {
  let target = event.target as HTMLInputElement
  emits("update:modelValue", target.value)
}
</script>

<style lang="scss" scoped>
.textfield {
  display: flex;
  border: 1px solid rgba(0, 0, 0, 0.3);
  .left {
    input {
      width: 100%;
      border: 0;
      outline: none;
      padding: 0;
    }
  }

  .right {
    display: flex;
    width: fit-content;
    align-items: center;
    svg {
      width: 20px;
      height: 20px;
      cursor: pointer;
      margin-right: 5px;
    }

  }
}
</style>