<template>
  <div class="expanded">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
import {computed} from "vue";

const props = defineProps({
  flex: {type: Number, default: 1}
})

const flex = computed(() => props.flex.toString())
</script>

<style lang="scss" scoped>
div.expanded {
  flex-grow: v-bind(flex);
  flex-shrink: 1;
  flex-basis: auto;
}
</style>