import Vue from 'vue'
import Vuex from 'vuex'
import * as types from './types'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {},
    access_token: null,
    title: ''
  },
  mutations: {
    [types.LOGIN]: (state, data) => {
      localStorage.access_token = data
      state.token = data
    },
    [types.USER]: (state, data) => {
      localStorage.user = data
      state.user = data
    },
    [types.LOGOUT]: (state) => {
      localStorage.removeItem('token')
      state.access_token = null
    },
    [types.TITLE]: (state, data) => {
      state.title = data
    }
  }
})
