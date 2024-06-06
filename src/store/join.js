import { defineStore } from 'pinia';

export const useJoinStore = defineStore('join', {
  state: () => ({
    markAgre: false,
  }),
  actions: {
    setMarkAgre(value) {
      this.markAgre = value;
    },
  },
});