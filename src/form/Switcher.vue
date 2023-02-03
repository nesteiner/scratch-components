<template>
  <div class="switcher" @click="toggle" :class="{'active': modelValue}">
    <div class="slot"/>
    <div class="circle"/>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{
  modelValue: boolean
}>()

const emits = defineEmits(["update:modelValue"])

function toggle() {
  emits("update:modelValue", !props.modelValue)
}
</script>

<style lang="scss" scoped>
div.switcher {
  width: 50px;
  height: 22px;
  position: relative;
  cursor: pointer;

  div.slot {
    width: 50px;
    height: 22px;
    border-radius: 11px;
    background: rgba(0, 0, 0, 0.2);
    position: absolute;

  }

  div.circle {
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: white;
    border: 1px solid rgba(0, 0, 0, 0.2);
    position: absolute;

    animation: linear;
    animation-name: run-reverse;
    animation-duration: 0.35s;
  }
}

div.switcher.active {
  div.slot {
    background: #409eff;
  }

  div.circle {
    right: 0;

    animation: linear;
    animation-name: run;
    animation-duration: 0.35s;
  }
}

@keyframes run {
  0% {
    left: 0
  }

  25% {
    left: 10%;
  }

  50% {
    left: 40%;
  }

  75% {
    left: 50%;
  }

  100% {
    right: 0;
  }
}

@keyframes run-reverse {
  0% {
    right: 0;
  }

  25% {
    right: 10%;
  }

  50% {
    right: 40%;
  }

  75% {
    right: 50%;
  }

  100% {
    left: 0;
  }
}
</style>