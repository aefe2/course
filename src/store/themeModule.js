import {reactive} from "vue";

export const themeModule = {
    state: () => ({
        isSwitch: true,
        theme: localStorage.getItem('theme'),
    }),
    mutations: {
        toggleSwitch(state) {
            state.isSwitch = !state.isSwitch
            state.theme = state.theme === 'light' ? 'dark' : 'light'
            localStorage.setItem('theme', state.theme)
        },
        // themeVal(state) {
        //     if (state.theme === 'dark') {
        //         return '#2D2D2D';
        //     } else return 'whitesmoke'
        // }
    },
    // actions: {
    //     themeValue(state) {
    //         return state.theme ? 'light' : 'dark'
    //     }
    // },
    namespaced: true
}