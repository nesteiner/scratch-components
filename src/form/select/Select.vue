<template>
  <div class="select" @blur="handleBlur" tabindex="0">
    <div class="selected" @click="handleClick">
      <Row main-axis-aligment="space-between" cross-axis-aligment="center">
        <input :value="selected"/>
        <svg :class="{'expand': open}" t="1676739105788" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2778"><path d="M736 480c-12.5-12.5-32.8-12.5-45.3 0L523.3 647.4c-6.2 6.2-16.4 6.2-22.6 0L333.3 480c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L466.7 704c25 25 65.5 25 90.5 0L736 525.3c12.5-12.5 12.5-32.8 0-45.3z" p-id="2779"></path></svg>
      </Row>
    </div>

    <div class="options" v-if="open">
      <slot/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {provide, ref, watch} from "vue";
import {Row} from "@/layouts"
type valueType = number | string | boolean | object
const props = defineProps<{
  modelValue: valueType
}>()

const emits = defineEmits(["update:modelValue"])
const open = ref(false)
const selected = ref<valueType>(props.modelValue)
const options = ref([] as valueType[])
const handleBlur = () => open.value = false
const handleClick = () => open.value = !open.value
const clickOption = (option: valueType) => {
  selected.value = option
  open.value = false
  emits("update:modelValue", option)
}

provide("open", open)
provide("selected", selected)

watch(selected, (newvalue, _) => {
  emits("update:modelValue", newvalue)
})
</script>

<style lang="scss" scoped>
div.select {
  position: relative;
  text-align: left;
  display: inline-block;
  width: 200px;

  div.selected {
    border: 1.5px solid rgba(0, 0, 0, 0.15);
    border-radius: 3px;
    height: 30px;
    line-height: 30px;
    width: 100%;
    cursor: pointer;

    input {
      padding: 0;
      outline: 0;
      background: 0 0;
      height: 30px;
      width: 100%;
      border: none;
      box-sizing: border-box;
      margin-left: 10px;
      cursor: pointer;
    }

    svg {
      width: 20px;
      height: 20px;
      fill: rgba(0, 0, 0, 0.2);
      transition: transform 0.4s;
      margin-right: 10px;

      &.expand {
        transform: rotate(180deg);
      }
    }
  }

  div.options {
    position: absolute;
    width: 100%;
    padding: 2px;
    box-shadow: 0 0 10px #888888;
    background: white;
    border-radius: 4px;
    top: 35px;
    z-index: 1;

  }
}
</style>