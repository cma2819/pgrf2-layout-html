import { DateTime } from 'luxon'

const parsingFormat = 'yyyy/MM/dd HH:mm:ss'
const formatOnSchedule = 'HH:mm'

class Run {
  constructor(run) {
    this.title = run.title
    this.category = run.category
    this.platform = run.platform
    this.startsAt = DateTime.fromFormat(run.startsAt, parsingFormat)
    this.est = run.est
    this.runners = run.runners
    this.commentators = run.commentators
  }

  joinedRunnerNames(delimiter = ' / ') {
    return this.runners
      .map(runner => runner.name)
      .join(delimiter)
  }

  joinedCommentatorNames(delimiter = ' / ') {
    return this.commentators
      .map(commentator => commentator.name)
      .join(delimiter)
  }

  startsAtOnSchedule() {
    return this.startsAt.toFormat(formatOnSchedule)
  }

  isSetupBlock() {
    return !this.runners || this.runners.length === 0
  }
}

export { Run }