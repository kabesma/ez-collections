'use strict'

const { getArrayableItems } = require('./enumeratesValue.js')

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

const arr = (...args) => {
    return args
}

const all = () => {
  return item
}

const avg = (param = null) => {
  let temp
  if (param == null) {
    return item.reduce((acc, curr) => acc + curr) / item.length
  }

  temp = 0
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
    let obj = []
//     param.forEach(val => item.concat(val))

    return collect(item.concat(param))
}

module.exports = {
  collect,
}
