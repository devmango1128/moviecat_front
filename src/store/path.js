import { defineStore } from "pinia";
import { ref } from 'vue'

export const usePathStore = defineStore('pathStore', {
    state: () => ({
        currentPath : ref(''),
        menuId: false,
        menuName: ref('')
    }),
    getters: {
        getCurrentPath: (state) =>state.currentPath,
        getMenuId : (state) => state.menuId,
        getMenuName : (state) => state.menuName,
    },
    actions: {
        setCurrentPath(currentPath) {
            this.currentPath = currentPath
        },
        setMenuId(value) {
            this.menuId = value
        },
        setMenuName(value) {
            this.menuName = value
        }
    },
})