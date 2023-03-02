<template>
    <div class="center" v-center>
        <slot/>
    </div>
</template>

<script lang="ts" setup>
import {center as vCenter} from "@/directives"
</script>

<style lang="scss" scoped>
div.center {
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>