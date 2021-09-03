class Participant {
  constructor(runner) {
    this.id = runner.id
    this.name = runner.name
    this.accounts = this._excludeEmptyField(runner.accounts)
    this.accountTypes = Object.keys(this.accounts)
  }

  currentAccount() {
    return {
      [this.accountTypes[0]]: this.accounts[this.accountTypes[0]]
    }
  }

  rotateAccountTypes() {
    // 2番目以降の配列の後ろに1番目をくっつける
    this.accountTypes = this.accountTypes.slice(1).concat(this.accountTypes[0])
  }

  _excludeEmptyField(object) {
    return Object.entries(object)
      .filter(([key, value]) => value)
      .reduce((acc, [k, v]) => Object.assign(acc, {[k]: v}), {})
  }
}

export { Participant }