import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
    state : () => ({
        token: localStorage.getItem('token') || null,
        user: JSON.parse(localStorage.getItem('user')) || null
    }),
    getters: {
        isLoggedIn : (state) => !!state.token,
        getUser: (state) => state.user,
        getToken : (state) => state.token
    },
    actions: {
        setToken(token) {
            this.token = token
            localStorage.setItem('token', token)
        },
        clearToken() {
            this.token = null
            localStorage.removeItem('token')
        },
        setUser(user) {
            this.user = user
            localStorage.setItem('user', JSON.stringify(user))
        },
        clearUser() {
            this.user = null
            localStorage.removeItem('user')
        }
    }
})