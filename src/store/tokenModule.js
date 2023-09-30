import axios from "axios";

export const tokenModule = {
    state: () => ({
        // token: localStorage.getItem('token') || '',
        myCookies: localStorage.getItem('token') || ''
    }),
    mutations: {
        getCookie(state) {
            return state.myCookies = document.cookie.slice(10)
        }
    },
    namespaced: true
}