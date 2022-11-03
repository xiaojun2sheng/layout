<template>
    <div class="component">
        <div class="one">
            11111
            <div class="two">
                2222
                <div class="three">
                    3333
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

</script>

<style lang="less" scoped>
.component {
    background: gray;
    width: 200px;
    height: 100px;
    .one {
        width: 100%;
        height: 100%;
        .two {
            width: 50%;
            height: 50%;
            background: #333;
            .three {
                width: 30%;
                height: 30%;
                background: red;
            }
        }
    }
}
</style>
