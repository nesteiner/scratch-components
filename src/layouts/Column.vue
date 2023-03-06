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

  inline: {
    type: Boolean,
    default: false
  }
})

const mainAxisAligment = computed(() => mappingAxisAligment(props.mainAxisAligment))
const crossAxisAligment = computed(() => mappingAxisAligment(props.crossAxisAligment))
const mainAxisSize = computed(() => mappingAxisSize(props.mainAxisSize))

const display = computed(() => props.inline ? "inline-flex" : "flex")
function mappingAxisAligment(alignment: MainAxisAlignment | CrossAxisAlignment): string {
  if (alignment == 'center') return 'center';
  if (alignment == 'start') return 'flex-start';
  if (alignment == 'end') return 'flex-end';

  return alignment
}

function mappingAxisSize(size: MainAxisSize): string {
  if (size == "max"){
    return "100%"
  } else {
    return "fit-content"
  }

}

const style: StyleValue = {
  display: display.value,
  width: "100%",
  height: mainAxisSize.value,
  flexDirection: "column",
  justifyContent: mainAxisAligment.value,
  alignItems: crossAxisAligment.value
}
</script>