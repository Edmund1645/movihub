import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searches: []
  },
  getters: {
    get_searches: state => state.searches
  },
  mutations: {
    place_searches: (state, payload)=> state.searches = payload
  },
  actions: {

  }
})
