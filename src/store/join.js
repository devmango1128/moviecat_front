import { defineStore } from 'pinia';

export const useJoinStore = defineStore('join', {
  state: () => ({
    markAgre: false,
    trmsAgre: true,
    infoAgre: true,
    canAccessJoin2 : false
  }),
  actions: {
    setMarkAgre(value) {
      this.markAgre = value
    },
    setTrmsAgre(value) {
      this.trmsAgre = value
    },
    setInfoAgre(value) {
      this.infoAgre = value
    },
    allowJoin2Access() {
      this.canAccessJoin2 = true
    },
    resetJoin2Access() {
      this.canAccessJoin2 = false
    }
  },
});