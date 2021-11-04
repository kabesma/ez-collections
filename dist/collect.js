'use strict'

const { getArrayableItems,getValueFilterConcat } = require('./enumeratesValue.js')

let item = []

/**
 * Main Function
 * @param {array} args The arguments enter value.
 * @return {function} The function call
 */
function collect(args) {
    item = getArrayableItems(args)
    return {
        'all': all,
        'avg': avg,
        'chunk': chunk,
        'collapse': collapse,
        'collect': collectx,
        'combine': combine,
        'concat': concat,
    }
}

const all = () => {
  return item
}

const avg = (param = null) => {
  let temp = 0
  if (param == null) {
    return item.reduce((acc, curr) => acc + curr) / item.length
  }

  item.forEach(
      (val) => temp = temp + val[param],
  )
  return temp / item.length
}

const chunk = (param) => {
  let obj = []
  while (item.length) obj.push(item.splice(0, param))
  return obj
}

const collapse = () => {
  const result = item.reduce(function(prev, next) {
    return prev.concat(next)
  })
  return collect(result)
}

const collectx = () => {
  return collect(item)
}

const combine = (param) => {
    const obj = item.reduce((r, e, i) => (r[e]= param[i], r), [])
    return collect(obj)
}

const concat = (param) => {
    let obj = getValueFilterConcat(param)
    return collect(item.concat(obj))
}

module.exports = {
  collect,
}
