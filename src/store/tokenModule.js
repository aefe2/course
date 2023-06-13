import axios from "axios";

export const tokenModule = {
    state: () => ({
        token: localStorage.getItem('token') || '',
    }),
    mutations: {},
    namespaced: true
}