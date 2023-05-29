// import Vue from 'vue'
// import Vuex from 'vuex'
// import axios, {head} from 'axios'
//
// // export const authModule = {
// //     state: {
// //         token: localStorage.getItem('token') || ''
// //     },
// //     getters: {
// //         isAuth: (state) => !!state.token
// //     },
// //     mutations: {
// //         AUTH_SUCCESS: (state, token) => {
// //             state.token = token
// //         },
// //         AUTH_ERROR: (state) => {
// //             state.token = ''
// //         },
// //     },
// //     actions: {
// //         AUTH_REQUEST: ({commit}, user) => {
// //             return new Promise((resolve, reject) => {
// //                 loginRequest(user)
// //                     .then((token) => {
// //                         commit('AUTH_SUCCESS', token);
// //                         localStorage.setItem('token', token);
// //                         resolve()
// //                     })
// //                     .catch(() => {
// //                         commit('AUTH_ERROR')
// //                         localStorage.removeItem('token')
// //                         reject()
// //                     })
// //             })
// //         }
// //     }
// // }
//
// // export const authModule = {
// //     state: () => ({
// //         status: '',
// //         token: localStorage.getItem('token') || '',
// //         user: {}
// //     }),
// //     mutations: {
// //         auth_request(state) {
// //             state.status = 'loading'
// //         },
// //         auth_success(state, token, user) {
// //             state.status = 'success'
// //             state.token = token
// //             state.user = user
// //         },
// //         auth_error(state) {
// //             state.status = 'error'
// //         },
// //     },
// //     actions: {
// //         signIn({commit}, user) {
// //             return new Promise((resolve, reject) => {
// //                 commit('auth_request')
// //                 axios({
// //                     url: '/login',
// //                     data: user,
// //                     method: 'POST',
// //                 })
// //                     .then(resp => {
// //                         const token = resp.data.token
// //                         const user = resp.data.user
// //                         localStorage.setItem('token', token)
// //                         axios.defaults.headers.common['Authorization'] = token
// //                         commit('auth_success', token, user)
// //                         resolve(resp)
// //                     })
// //                     .catch(err => {
// //                         commit('auth_error')
// //                         localStorage.removeItem('token')
// //                         reject(err)
// //                     })
// //             })
// //         }
// //     },
// //     getters: {
// //         isLoggedIn: state => !!state.token,
// //         authStatus: state => state.status,
// //     }
// // }