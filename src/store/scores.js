import testData from './test-data/scores.js'
export default {
  state: () => ({
    scores: testData
  }),
  getters: {
    scoreOf: ({ scores }) => id =>
      scores.find(score => score.id === id)?.score || 0
  },
  mutations: {
    setScores (state, scores) {
      state.scores = scores
    }
  },
  actions: {
    setScores ({ commit }, scores) {
      commit('setScores', scores)
    }
  }
}
