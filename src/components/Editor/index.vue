<template>
  <div class="editor_page" @drop="handleDrop" @dragover="handleDragOver">
    <component 
      v-for="item in componentData"
      :key="item.id"
      :is="item"
    />
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mainStore } from '../../store/index'
import { componentListSlot } from '../componentList/index'



const store = mainStore()
let componentData = ref(store.componentList)

const changeMsg = () => {
  store.msg = 'xxxxasdfasdfs'
}

const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    let _comPonent = componentListSlot.find(_com => {
      return _com.__name == e.dataTransfer.getData('component')
    })
    store.componentList.push(_comPonent)
}
const handleDragOver = (e) => {
  e.preventDefault();
}
</script>

<style lang="less" scoped>
.editor_page {
  width: 100%;
  height: 100%;
  border: 1px solid gray;
}
</style>
