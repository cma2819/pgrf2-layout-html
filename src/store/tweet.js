import testData from './test-data/tweet.js'
export default {
  state: () => ({
    tweet: null
  }),
  getters: {
    tweet: ({ tweet }) => tweet
  },
  mutations: {
    setTweet (state, tweet) {
      state = tweet
    }
  },
  actions: {
    setTweet ({ commit }, tweet) {
      commit('setTweet', tweet)
    }
  }
}