<template>
  <div class="stack" v-stack ref="stack">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import {stack as vStack} from "@/directives"
import {onMounted, ref} from "vue";
type AligmentDirection = "topStart" | "topCenter" | "topEnd" |
    "centerStart" | "center" | "centerEnd" |
    "bottomStart" | "bottomCenter" | "bottomEnd"
type StackFit = "loose" | "expand"

const props = withDefaults(
    defineProps<{
      aligment?: AligmentDirection
      fit?: StackFit
    }>(),

    {
      aligment: "topStart",
      fit: "loose"
    }
)
const stack = ref<HTMLElement>()

onMounted(() => {
  // set all element position: absolute
  let size = stack.value!!.childElementCount - 1

  for (let index = 0; index <= size; index += 1) {
    let element = stack.value!!.children.item(index) as HTMLElement
    if (!element.className.includes("positioned")) {
      if (props.fit == "loose") {
        element.style.width = "fit-content"
        element.style.height = "fit-content"
      } else {
        element.style.width = "100%"
        element.style.height = "100%"
      }

      // other operation
      let style = element.style
      style.margin = "auto"
      style.left = "0"
      style.right = "0"
      style.top = "0"
      style.bottom = "0"

      if (props.aligment == "center") {

      } else if (props.aligment == "centerStart") {
        style.marginLeft = "0"
      } else if (props.aligment == "centerEnd") {
        style.marginRight = "0"
      } else if (props.aligment == "topStart") {
        style.marginLeft = "0"
        style.marginTop = "0"
      } else if (props.aligment == "topCenter") {
        style.marginTop = "0"
      } else if (props.aligment == "topEnd") {
        style.marginRight = "0"
        style.marginTop = "0"
      } else if (props.aligment == "bottomStart") {
        style.marginBottom = "0"
        style.marginLeft = "0"
      } else if (props.aligment == "bottomCenter") {
        style.marginBottom = "0"
      } else if (props.aligment == "bottomEnd") {
        style.marginBottom = "0"
        style.marginRight = "0"
      }
    }
  }
})
</script>

<style lang="scss" scoped>
div.stack {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>