export default {
  state: () => ({
    title: '',
    artist: ''
  }),
  mutations: {
    setMusic (state, music) {
      state.title = music.title
      state.artist = music.artist
    }
  },
  actions: {
    setMusic ({ commit }, music) {
      commit('setMusic', music)
    }
  }
}