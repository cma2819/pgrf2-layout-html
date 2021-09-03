import testData from './test-data/scores.js'
export default {
  state: () => ({
    scores: testData
  }),
  getters: {
    scoreOf: ({ scores }) => id => {
      const score = scores.find(score => score.id === id)
      return score ? score.score : 0
    }
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
