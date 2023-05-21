import {reactive} from "vue";

export const themeModule = {
    state: () => ({
        isSwitch: false
    }),
    mutations: {
        toggleSwitch(state) {
            state.isSwitch = !state.isSwitch
        }
    },
    namespaced: true
}
// export const store = reactive({
//     isToggle: false,
//     theme: 'dark'
// })
// export const mutations = {
//     changeTheme() {
//         store.isToggle = !store.isToggle;
//         store.theme = store.theme === 'light' ? 'dark' : 'light';
//     }
// }