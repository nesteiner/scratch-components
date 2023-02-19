<template>
  <div class="option" @click="handleClick">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import {inject, Ref} from "vue";

const props = defineProps<{
  value: valueType
}>()

type valueType = number | string | boolean | object
const open = inject<Ref<boolean>>("open")
const selected = inject<Ref<valueType | null>>("selected")
const handleClick = () => {
  selected!.value = props.value
  open!.value = false
}
</script>

<style lang="scss" scoped>
div.option {
  cursor: pointer;
  padding: 0 10px;
  &:hover {
    background: rgba(0, 0, 0, 0.12);
  }
}
</style>