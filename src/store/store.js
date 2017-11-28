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
    toggleLoading: state => {
      state.isLoading = !state.isLoading
    },
    addUsers: (state, { users }) => {
      state.users = state.users.concat(users)
    },
    addPage: state => {
      state.page++
    },
  },

  actions: {
    fetchData({ commit, state }) {
      commit('toggleLoading')
      Service.fetch({
        page: state.page,
        numberOfUsers: 5,
      })
        .then(res => {
          commit('toggleLoading')
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
