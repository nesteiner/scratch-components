<template>
  <Row class="message" :class="type" 
       cross-axis-aligment="center" 
       main-axis-aligment="center" 
       cross-axis-size="max"
       main-axis-size="min">

    <component :is="mappingIcon"/>
    <div class="content">{{ text }}</div>
  </Row>
</template>

<script lang="ts" setup>
import { Row } from '@/layouts';
import { computed } from 'vue';
import { SuccessIcon, ErrorIcon, WarningIcon, InfoIcon } from './icon';

import type {MessageType} from "."

const props = defineProps<{
  text: string,
  type: MessageType
}>()


const mappingIcon = computed(() => {
  if (props.type == "success") {
    return SuccessIcon
  } else if (props.type == "error") {
    return ErrorIcon
  } else if (props.type == "warn") {
    return WarningIcon
  } else {
    return InfoIcon
  }
})
</script>

<style lang="scss" scoped>
div.message {
  margin: 5px;
  z-index: 100;
  padding: 5px;
  &.success {
    background: #f0f9eb;
  }

  &.warn {
    background: #fdf6ec;
  }

  &.error {
    background: #fef0f0;
  }

  &.info {
    background: #f4f4f5;
  }

  div.content {
    margin-left: 10px;
  }
}
</style>