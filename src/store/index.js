import {createStore} from 'vuex';
import {themeModule} from "@/store/themeModule";
import {navModule} from "@/store/navModule";
import {tokenModule} from "@/store/tokenModule";
import {patientModule} from "@/store/patientModule";

export default createStore({
    modules: {
        themeModule,
        navModule,
        tokenModule,
        patientModule
    }
})
