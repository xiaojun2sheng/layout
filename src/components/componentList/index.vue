<template>
    <div class="component_list" @dragstart="handleDragStart">
        <div 
            class="component_item" 
            v-for="item in componentList" 
            :key="item.component" 
            :data-component="item.component"
            draggable="true">
            {{item.label}}
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { componentList } from './component-list'

const handleDragStart = (e) => {
    e.dataTransfer.setData('component', e.target.dataset.component)
}

</script>

<style lang="less" scoped>
.component_list {
    width: 200px;
    height: 100%;
    border: 1px solid gray;
    display: flex;
    flex-direction: column;
    align-items: center;
    .component_item {
        width: 90%;
        padding: 8px 5%;
        background: gray;
        margin-top: 8px;
        cursor: pointer;
    }
}
</style>
