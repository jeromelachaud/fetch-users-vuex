import Vue from 'vue'
import Vuex from 'vuex'
import { Service } from '../api/Service'

Vue.use(Vuex)

export const store = new Vuex.Store({
  strict: true,
  state: {
    isLoading: false,
    users: [],
    page: 1,
  },

  getters: {
    getLoadingState: state => state.isLoading,
    getUsers: state => state.users,
    getPage: state => state.page,
  },

  mutations: {
    toggleLoading: (state, flag) => {
      state.isLoading = flag
    },
    addUsers: (state, { users }) => {
      state.users = [ ...state.users, ...users ]
    },
    addPage: state => {
      state.page++
    },
  },

  actions: {
    fetchData({ commit, state }) {
      commit('toggleLoading', true)
      Service.fetch({
        page: state.page,
        numberOfUsers: 9,
      })
        .then(res => {
          commit('toggleLoading', false)
          commit('addUsers', {
            users: res.results,
          })
        })
    },
    addPage({ commit }) {
      commit('addPage')
    },
  },
})
