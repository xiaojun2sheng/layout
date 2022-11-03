<template>
    <div class="component">
        <a-input v-model:value="value" placeholder="Basic usage" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
let value = ref('')
</script>

<style lang="less" scoped>
.component {
    background: gray;
    width: 200px;
    height: 100px;
}
</style>
