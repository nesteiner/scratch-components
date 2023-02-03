<template>
  <div class="expanded">
    <slot/>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  flex: {type: Number, default: 1}
})
</script>

<style lang="scss" scoped>
div.expanded {
  flex-grow: v-bind(flex);
  flex-shrink: 1;
  flex-basis: auto;
}
</style>