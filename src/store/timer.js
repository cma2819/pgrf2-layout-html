import { Duration } from 'luxon'

export default {
  state: () => ({
    time: '00:00:00',
    status: 'suspend',
    splits: []
  }),
  getters: {
    formattedTime: ({ time }) => {
      const numbers = time.split(':')
      const duration = Duration.fromObject({
        hours: parseInt(numbers[0]),
        minutes: parseInt(numbers[1]),
        seconds: parseInt(numbers[2])
      })
      if (duration.hours > 0) {
        return duration.toFormat('hh:mm:ss')
      } else {
        return duration.toFormat('mm:ss')
      }
    },
    splitOfId: ({ splits }) => id => {
      const split = splits.find(split => id === split.id)
      return split ? split.time : ''
    }
  },
  mutations: {
    setTimer (state, timer) {
      state.time = timer.time
      state.status = timer.status
      state.splits = timer.split
    }
  },
  actions: {
    setTimer ({ commit }, timer) {
      commit('setTimer', timer)
    }
  }
}