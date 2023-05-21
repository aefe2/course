import {createStore} from 'vuex';
import {themeModule} from "@/store/themeModule";

export default createStore({
    modules: {
        themeModule,
    }
})
