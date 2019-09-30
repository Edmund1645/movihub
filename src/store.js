import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    searches: [
      // {
      //   Title: 'demo',
      //   Year: 2019,
      //   Poster: 'https://dummy.com',
      //   imdbID: '1234567'
      // }
    ],
    views: [
      // {
      //   Title: 'demo',
      //   Year: 2019,
      //   Poster: 'https://dummy.com',
      //   imdbID: '1234567'
      // }
    ]
  },
  getters: {
    get_searches: state => state.searches,
    get_views: state => state.views
  },
  mutations: {
    place_searches: (state, payload) => (state.searches = payload),
    clear_searches: (state, payload) => (state.searches = payload),
    place_views: (state, payload) => state.views.push(payload),
    clear_views: (state, payload) => (state.views = payload)
  },
  actions: {}
});
