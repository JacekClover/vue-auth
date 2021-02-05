import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    status: '',
    token: localStorage.getItem('token') || '',
    user: {}
  },
  mutations: {
    rgst(state) {
      state.status = 'loading'
    },
    auth_request(state) {
      state.status = 'loading'
    },
    auth_success(state, token, user) {
      state.status = 'loading'
      state.token = token
      state.user = user
    },
    auth_error(state) {
      state.status = 'error'
    },
    logout(state) {
      state.status = ''
      state.token = ''
    },
    error(state) {
      state.status = 'error'
    },
    success(state) {
      state.status = 'success'
    }
  },
  actions: {
    login({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: `http://localhost:3000/login`, data: user, method: 'POST' })
          .then((result) => {
            const token = result.data.token
            const user = result.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Authorization'] = token
            commit('auth_success', token, user)
            resolve(result)
          }).catch((err) => {
            // console.log('e', err)
            commit('auth_error')
            localStorage.removeItem('token')
            reject(err)
          });
      })
    },
    register({ commit }, user) {
      return new Promise((resolve, reject) => {
        commit('auth_request')
        axios({ url: `http://localhost:3000/register`, data: user, method: 'POST' })
          .then((res) => {
            const token = res.data.token
            let user = res.data.user
            localStorage.setItem('token', token)
            axios.defaults.headers.common['Autorization'] = token
            commit('auth_success', token, user)
            resolve(res)
          }).catch((err) => {
            commit('auth_error', err)
            localStorage.removeItem('token')
            reject(err)
          });
      })
    },
    logout({ commit }) {
      console.log(';;;;')
      return new Promise((resolve) => {
        commit('logout')
        localStorage.removeItem('token')
        delete axios.defaults.headers.common['Authorization']
        resolve();
      })
    }
  },
  modules: {
  },
  getters: {
    isLoggedIn: state => !!state.token,
    currentStatus: state => state.status,
  }
})
