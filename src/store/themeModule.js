import {reactive} from "vue";

export const themeModule = {
    state: () => ({
        nightMode: JSON.parse(localStorage.getItem('nightMode')) || false,
        theme: localStorage.getItem('theme'),
    }),
    mutations: {
        toggleSwitch(state) {
            state.nightMode = !state.nightMode
            state.theme = state.theme === 'dark' ? 'light' : 'dark'
            localStorage.setItem('theme', state.theme)
            localStorage.setItem('nightMode', state.nightMode)
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