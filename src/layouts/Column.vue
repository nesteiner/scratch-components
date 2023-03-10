<template>
  <div class="column" :style="style">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import {computed, PropType, StyleValue} from 'vue'

type MainAxisAlignment = 'center' | 'start' | 'end' | 'space-around' | 'space-between' | 'space-evenly'
type CrossAxisAlignment = 'center' | 'start' | 'end' | 'space-around' | 'space-between' | 'space-evenly'
type MainAxisSize = "max" | "min"
type CrossAxisSize = "max" | "min"

const props = defineProps({
  mainAxisAligment: {
    type: String as PropType<MainAxisAlignment>,
    default: 'start'
  },

  crossAxisAligment: {
    type: String as PropType<CrossAxisAlignment>,
    default: 'start'
  },

  mainAxisSize: {
    type: String as PropType<MainAxisSize>,
    default: "max"
  },

  crossAxisSize: {
    type: String as PropType<CrossAxisSize>,
    default: "min"
  },

  inline: {
    type: Boolean,
    default: false
  }
})

const mainAxisAligment = computed(() => mappingAxisAligment(props.mainAxisAligment))
const crossAxisAligment = computed(() => mappingAxisAligment(props.crossAxisAligment))
const mainAxisSize = computed(() => mappingAxisSize(props.mainAxisSize))
const crossAxisSize = computed(() => mappingAxisSize(props.crossAxisSize))
const display = computed(() => props.inline ? "inline-flex" : "flex")

const mappingAxisAligment = (alignment: MainAxisAlignment | CrossAxisAlignment): string => {
  if (alignment == 'center') return 'center';
  if (alignment == 'start') return 'flex-start';
  if (alignment == 'end') return 'flex-end';

  return alignment
}

const mappingAxisSize = (size: MainAxisSize | CrossAxisSize): string => {
  if (size == "max"){
    return "100%"
  } else {
    return "auto"
  }
}

const style: StyleValue = {
  display: display.value,
  width: crossAxisSize.value,
  height: mainAxisSize.value,
  flexDirection: "column",
  justifyContent: mainAxisAligment.value,
  alignItems: crossAxisAligment.value
}
</script>