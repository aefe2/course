import {createStore} from 'vuex';
import {themeModule} from "@/store/themeModule";
import {navModule} from "@/store/navModule";
import {tokenModule} from "@/store/tokenModule";

export default createStore({
    modules: {
        themeModule,
        navModule,
        tokenModule
    }
})
