<template>
  <SizedBox class="input-number" :width="150" :height="30" :class="{'disabled': disabled}">
    <Row cross-axis-aligment="center" main-axis-aligment="space-between" inline>
      <SizedBox class="icon decrease" :class="{'disabled': decDisable}" :width="32" :height="30">
        <svg @click="handleDec" t="1676774750628" class="icon decrease" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2755"><path d="M170.666667 469.333333h682.666666v85.333334H170.666667z" fill="#444444" p-id="2756"></path></svg>
      </SizedBox>

      <Expanded>
        {{modelValue}}
      </Expanded>

      <SizedBox class="icon increase" :class="{'disabled': incDisable}" :width="32" :height="30">
        <svg :class="{'disabled': incDisable}" @click="handleInc" t="1676774779254" class="icon increase" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3730"><path d="M469.333333 469.333333V170.666667h85.333334v298.666666h298.666666v85.333334h-298.666666v298.666666h-85.333334v-298.666666H170.666667v-85.333334h298.666666z" fill="#444444" p-id="3731"></path></svg>
      </SizedBox>
    </Row>
  </SizedBox>

</template>

<script lang="ts" setup>
import {Expanded, Row, SizedBox} from "@/layouts"
import {computed} from "vue";

const emits = defineEmits(["update:modelValue"])
const props = withDefaults(
    defineProps<{
      modelValue: number,
      min?: number,
      max?: number,
      disabled?: boolean,
      step?: number
    }>(),
    {
      min: -Infinity,
      max: Infinity,
      disabled: false,
      step: 1,
    }
)

const handleDec = () => {
  if (!props.disabled && props.modelValue > props.min) {
    emits("update:modelValue", props.modelValue - props.step)
  }
}
const handleInc = () => {
  if (!props.disabled && props.modelValue < props.max) {
    emits("update:modelValue", props.modelValue + props.step)
  }
}

const decDisable = computed(() => props.modelValue == props.min || props.modelValue - props.step < props.min)
const incDisable = computed(() => props.modelValue == props.max || props.modelValue + props.step > props.max)
</script>

<style lang="scss" scoped>
.input-number {
  border: 1px solid #dcdfe6;
  border-radius: 4px;
  line-height: 30px;

  div.icon {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #f5f7fa;
    color: #606266;
    cursor: pointer;
    font-size: 13px;

    svg {
      width: 20px;
      height: 20px;

      path {
        fill: rgba(0, 0, 0, 0.3);
      }
    }

    &.decrease {
      border-radius: 4px 0 0 4px;
      border-right: 1px solid #dcdfe6;
    }

    &.increase {
      border-radius: 0 4px 4px 0;
      border-left: 1px solid #dcdfe6;
    }

    &.disabled {
      cursor: not-allowed;
      
      svg {
        cursor: not-allowed;
        path {
          fill: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }

  &.disabled {
    * {
      cursor: not-allowed;
    }

    background: rgba(0, 0, 0, 0.02);
    color: rgba(0, 0, 0, 0.12);

    div.icon {
      svg {
        path {
          fill: rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
}

</style>