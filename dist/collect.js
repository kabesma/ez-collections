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
        'contains': contains,
    }
}

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect(['a','b','c']).all()
 * // ['a','b','c']
 */
const all = () => {
  return item
}

/**
 * @param {array} param The arguments enter value.
 * @return {number} The function call
 * @example
 * collect([1, 2, 3]).avg()
 * // 2
 */
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

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect([1, 2, 3]).chunk(2)
 * // [[1, 2], [3]] 
 */
const chunk = (param) => {
  let obj = []
  while (item.length) obj.push(item.splice(0, param))
  return obj
}

/**
 * @return {array} The function call
 * @example
 * collect([[1, 2, 3],[4, 5, 6],[7, 8, 9]]).collapse()
 * // [1, 2, 3, 4, 5, 6, 7, 8, 9]
 */
const collapse = () => {
  const result = item.reduce(function(prev, next) {
    return prev.concat(next)
  })
  return collect(result)
}

/**
 * @return {array} The function call
 * @example
 * collect(['a','b','c']).collect()
 * // ['a','b','c']
 */
const collectx = () => {
  return collect(item)
}

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect(['name', 'age']).combine(['George', 29])
 * // [ name: 'George', age: 29 ]
 */
const combine = (param) => {
  const obj = item.reduce((r, e, i) => (r[e]= param[i], r), [])
  return collect(obj)
}

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect(['John Doe']).concat(['Jane Doe'])
 * // [ 'John Doe', 'Jane Doe' ]
 */
const concat = (param) => {
  let obj = getValueFilterConcat(param)
  return collect(item.concat(obj))
}

/**
  * @param {array} param The arguments enter value.
  * @return {boolean} The function call
  * @example
  * collect(['a','b','c']).contains('a')
  * // true
  */
const contains = (param) => {
  let obj = false
  if(Array.isArray(param)){
    if(param.length > 0) {
      item.forEach(val => {
        let temp = false
        temp = (val[param[0]] == param[1] ? true : false) || obj
        obj = temp
      })
      return obj
    }
  } else {
    item.forEach(val => {
      let loop = getArrayableItems(val)
      loop.forEach(item => {
        let temp = false
        temp = (item.includes(param)) || obj
        obj = temp
      })
    })
    return obj
  }
}

const count = () => {
  return item.length
}

module.exports = {
  collect,
}
