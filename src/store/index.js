import { createStore } from 'vuex'
import runs from './runs.js'
import timer from './timer.js'
import scores from './scores.js'
import tweet from './tweet.js'
import spotify from './spotify.js'

export default createStore({
  modules: { runs, timer, scores, tweet, spotify }
})