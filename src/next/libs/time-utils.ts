export const TimeFunctionUtils = {
  alias: {
    w: 'week',
    d: 'day',
    h: 'hour',
    m: 'minute',
    s: 'second',
  },
  secondPer: {
    week: 7 * 24 * 60 * 60,
    day: 24 * 60 * 60,
    hour: 60 * 60,
    minute: 60,
    second: 1,
  },
  // For unit test
  // getSecondFromTime([3,2]) = 123
  getSecondFromTime: function (values: Array<number>) {
    const timeMap = Object.keys(this.secondPer).reverse()
    return values.reduce((total, v, i) => {
      return total + v * this.secondPer[timeMap[i]]
    }, 0)
  },
  // For unit test
  // parseTimeFromSecond(7323,[]) = [3, 2, 2, 0, 0]
  parseTimeFromSecond: function (value: number, skip: Array<string> = []) {
    const getTimeByUnit = (v, unit): Array<number> => {
      const units = Math.floor(v / this.secondPer[unit])
      return [units, v - units * this.secondPer[unit]]
    }
    const outArr = []
    Object.keys(this.secondPer).map((key: string) => {
      if (key == 'second') {
        // handle them later
        return
      }
      if (!skip.includes(key)) {
        let w
          // the value below is getting changed after every loop, which is not very recommended
        ;[w, value] = getTimeByUnit(value, key)
        outArr.unshift(w)
      }
    })
    // the line below is for second
    outArr.unshift(value)
    return outArr
  },
}
