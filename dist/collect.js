'use strict'

let item = []
let temp
const newArr = []

/**
 * Main Function
 * @param {array} args The arguments enter value.
 * @return {function} The function call
 */
function collect(args) {
  item = args
  return {
    'all': all,
    'avg': avg,
    'chunk': chunk,
    'collapse': collapse,
  }
}

const all = () => {
  return item
}

const avg = (param = null) => {
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
  while (item.length) newArr.push(item.splice(0, param))
  return newArr
}

const collapse = () => {
  const result = item.reduce(function(prev, next) {
    return prev.concat(next)
  })
  return collect(result)
}

module.exports = {
  collect,
}
