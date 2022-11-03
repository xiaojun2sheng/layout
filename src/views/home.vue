<template>
  <div class="home_page">
    <Toolbar></Toolbar>
    <div class="home_content">
      <!-- 左边栏 组件菜单 -->
      <ComponentList></ComponentList>
      <!-- 中间编辑区域 -->
      <Editor></Editor>
      <!-- 配置组件区域 -->
      <Config></Config>
    </div>
  </div>
</template>

<script setup>
import Toolbar from  '../components/Toolbar.vue'
import Editor from '../components/Editor/index.vue'
import Config from '../components/Config/index.vue'
import ComponentList from '../components/ComponentList/index.vue'
import { mainStore } from '../store/index'
import { ref } from 'vue'


const store = mainStore()

</script>

<style lang="less" scoped>
.home_page {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .home_content {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }
}
</style>
