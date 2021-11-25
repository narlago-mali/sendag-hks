import axios from "axios"

const mutations = {
    SET_USER: 'setUser'
}

const actions = {
    REGISER_USER: 'registerUser',
    LOGIN: 'login',
    LOGOUT: 'logout',
    GET_USER: 'getUser'
}

const user = {
    namespaced: true,
    state: () => ({
        user: null
    }),
    mutations: {
        [mutations.SET_USER](state, user) {
            state.user = user
        }
    },
    actions: {
        async [actions.REGISER_USER](store, user) {
            return axios.post('/api/register', user)
        },
        async [actions.LOGIN]({ commit }, credentials){
            const user = await axios.post('/api/login', credentials).then(res => {
               if (res.data.token) {
                localStorage.setItem('user_token', res.data.token)
               }
            })

            // commit(mutations.SET_USER, user.data)
        },
        async [actions.LOGOUT](){
            await axios.post('api/logout')
        },
        // async [actions.GET_USER](){
        //     await axios.get()
        // }
    }
}

export default user