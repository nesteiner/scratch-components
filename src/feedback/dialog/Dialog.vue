<template>
  <Center class="dialog" v-if="show">
    <Column class="container" v-on-click-outside="onblur">
      <Row class="close" main-axis-aligment="end" cross-axis-aligment="center" cross-axis-size="min">
        <CloseIcon @click="onblur"/>
      </Row>

      <Column class="content" cross-axis-size="max" cross-axis-aligment="center" main-axis-aligment="space-between">
        <div>
          <slot/>
        </div>

        <Row class="footer" main-axis-aligment="end" cross-axis-size="min">
          <slot name="footer"/>
        </Row>
      </Column>
    </Column>
  </Center>
</template>

<script lang="ts" setup>
import {Row, Column, Center} from "@/layouts"
import { SizedBox } from "@/container";
import CloseIcon from "./CloseIcon.vue"
import {vOnClickOutside} from "@vueuse/components"
const props = defineProps<{
  show: boolean
}>()

const emits = defineEmits(["update:show"])

const onblur = () => {
  emits("update:show", false)
}

</script>

<style lang="scss" scoped>
.dialog {
  position: absolute;
  z-index: 100;
  background: rgba(0, 0, 0, 0.12);

  top: 0;
  left: 0;
  right: 0;
  bottom: 0;

  .container {
    background: white;
    min-width: 40%;
    min-height: 40%;

    max-width: 60%;
    max-height: 70%;

    .content {
      overflow: scroll;
      position: relative;
      .close {
        position: fixed;
      }
    }

    .footer {
      padding-left: 5px;
      padding-bottom: 5px;
    }
  }
}  
</style>