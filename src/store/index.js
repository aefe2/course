import {createStore} from 'vuex';
import {themeModule} from "@/store/themeModule";
import {navModule} from "@/store/navModule";

export default createStore({
    modules: {
        themeModule,
        navModule,
    }
})
