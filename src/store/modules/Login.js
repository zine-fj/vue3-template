
const state = {
  isLogged: false,
  token: ''
}

const mutations = {
  ISLOGGED_MU: (state, payload) => {
    state.isLogged = payload
  },
  TOKEN_MU: (state, payload) => {
    state.token = payload
  }
}

const actions = {
  ISLOGGED_AC ({ commit }, payload) {
    commit('ISLOGGED_MU', payload)
  },
  TOKEN_AC ({ commit }, payload) {
    commit('TOKEN_MU', payload)
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions
}
