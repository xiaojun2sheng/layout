<template>
  <div class="editor_page" @drop="handleDrop" @dragover="handleDragOver">
    <div
      v-for="(item, index) in componentData"
      :key="index"
      @mousedown="mousedown($event, index)"
      class="component_item">
        <component :is="item.component" class="component_self"/>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { mainStore } from '../../store/index'
import { componentListSlot } from '../componentList/index'

const store = mainStore()
let componentData = ref(store.componentList)

// 组件在画布移动 
const mousedown = (ele, index) => {
  ele.stopPropagation()
  let e = ele.path.find(_e => {
      return _e.className.includes('component_item')
  })
  const startTop = Number(e.clientHeight)
  const startLeft = Number(e.clientWidth)
  console.log(startTop)
  const move = (moveEvent) => {
    const currX = moveEvent.clientX
    const currY = moveEvent.clientY
    e.style.position = 'absolute'
    e.style.top = (currY-startTop) + 'px'
    e.style.left = (currX-startLeft) + 'px'
  }

  const up = () => {
    document.removeEventListener('mousemove', move)
    document.removeEventListener('mouseup', up)
  }

  document.addEventListener('mousemove', move)
  document.addEventListener('mouseup', up)
}

// 将组件列表组件拖入到画布中
const handleDrop = (e) => {
    e.preventDefault()
    e.stopPropagation()
    let _comPonent = componentListSlot.find(_com => {
      return _com.component.__name == e.dataTransfer.getData('component')
    })
    store.componentList.push(_comPonent)
}
// 将组件列表组件拖入到画布中
const handleDragOver = (e) => {
  e.preventDefault();
}
</script>

<style lang="less" scoped>
.editor_page {
  width: 100%;
  height: 100%;
  border: 1px solid gray;
  position: relative;
  .component_item {
    position: absolute;
  }
  .component_self:hover {
    border: 2px solid #13A2EF;
    cursor: pointer;
    z-index: 999;
    background: pink;
    * {
      z-index: 1
    }
  }
}
</style>
