<template>
  <Column class="message-container" cross-axis-aligment="end" main-axis-size="min" cross-axis-size="min">
    <template v-for="(message, index) in Message.messages" :key="index">
      <MessageComponent :type="message.type" :text="message.text"/>
    </template>
  </Column>
</template>

<script lang="ts" setup>
import useMessageStore from '@/store/message';
import { Column } from '@/layouts';
import MessageComponent from "./Message.vue"
const Message = useMessageStore()

</script>

<style lang="scss" scoped>
.message-container {
  position: absolute;
  top: 20px;
  right: 20px;
  z-index: 100;
}
</style>