import {reactive} from "vue";

export const store = reactive({
    isNavOpen: false
});

export const mutations = {
    toggleNav() {
        store.isNavOpen = !store.isNavOpen;
    }
}