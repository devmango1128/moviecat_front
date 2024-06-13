import { defineStore } from "pinia";
import { ref } from 'vue'

export const usePathStore = defineStore('pathStore', {
    state: () => ({
        currentPath : ref(''),
        menuId: false
    }),
    getters: {
        getCurrentPath: (state) =>state.currentPath,
        getMenuId : (state) => state.menuId,
    },
    actions: {
        setCurrentPath(currentPath) {
            this.currentPath = currentPath
        },
        setMenuId(value) {
            this.menuId = value
        }
    },
})