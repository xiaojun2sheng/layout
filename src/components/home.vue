<template>
  <div class="page">
    hello
    <span class="label">span</span>
  </div>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style lang="less" scoped>
.page {
  width: 100px;
  height: 100px;
  background: pink;
  .label {
    color: red;
  }
}
</style>
