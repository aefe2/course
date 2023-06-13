export const patientModule = {
    state: () => ({
        patient: []
    }),
    mutations: {
        setMyArray(state, payload) {
            state.patient = payload;
        }
    },
    actions: {
        updateMyArray({commit}, payload) {
            commit('setMyArray', payload);
        }
    },
    namespaced: true
}