import {reactive} from "vue";

export const navModule = {
    state: () => ({
        isNavOpen: false
    }),
    mutations: {
        toggleNav(state) {
            state.isNavOpen = !state.isNavOpen
        }
    }
}