import axios from "axios";

export const tokenModule = {
    state: () => ({
        myCookies: localStorage.getItem('token') || '',
        userRole: ''
    }),
    mutations: {
        getCookie(state) {
            return state.myCookies = document.cookie.slice(10) || ''
        },
    },
    namespaced: true
}