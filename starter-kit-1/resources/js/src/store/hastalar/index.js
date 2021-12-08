import axios from "axios"

const mutations = {
    SET_PATIENTS: 'setPatients',
    SET_KATALOG: 'setKatalog'
}

const actions = {
    GET_PATIENTS: 'getPatients',
    GET_KATALOG: 'getKatalog'
}

const patients = {
    namespaced: true,
    state: () => ({
        patients: null,
        katalog: null
    }),
    mutations: {
        // [mutations.SET_PATIENCE](state, hastalar) {
        //     state.hastalar = hastalar
        // }
        [mutations.SET_KATALOG](state, katalog) {
            state.katalog = katalog
        }
    },
    actions: {
       [actions.GET_KATALOG]({ commit }, descriptions){
            const desc = descriptions
            commit(mutations.SET_KATALOG, desc)
       }
    }
}

export default patients