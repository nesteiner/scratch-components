<template>
    <div class="center" v-center :style="style">
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import {center as vCenter} from "@/directives"
import { StyleValue } from "vue";
const style: StyleValue = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
    height: "100%"
}
</script>