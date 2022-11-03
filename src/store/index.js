import { defineStore } from "pinia";

export const mainStore = defineStore('main', {
    state: () => {
        return {
            componentList: [],
            msg: 'xxxwangjunjie'
        }
    },
    getters: {
    },
    actions: {
    }
})