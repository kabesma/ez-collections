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
        'count': count,
        'diff': diff,
        'diffAssoc': diffAssoc,
        'diffKeys': diffKeys,
        'first': first,
        'each': each,
        'every': every,
        'filter': filter,
        'flip': flip,
        'groupBy': groupBy,
        'flat': flat,
        // 'firstWhere': firstWhere,
        // 'get': get,
        // 'groupBy': groupBy,
        // 'has': has,
        // 'implode': implode,
        // 'intersect': intersect,
        // 'intersectByKeys': intersectByKeys,
        // 'isEmpty': isEmpty,
        // 'isNotEmpty': isNotEmpty,
        // 'last': last,
        // 'lastWhere': lastWhere,
        // 'map': map,
        // 'mapInto': mapInto,
        // 'mapWithKeys': mapWithKeys,
        // 'max': max,
        // 'min': min,
        // 'partition': partition,
        // 'reject': reject,
        // 'rejectInto': rejectInto,
        // 'rejectWithKeys': rejectWithKeys,
        // 'reverse': reverse,
        // 'search': search,
        // 'searchFrom': searchFrom,
        // 'shift': shift,
        // 'shuffle': shuffle,
        // 'slice': slice,
        // 'sort': sort,
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

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect([1, 2, 3]).count()
 * // 3
 */
const count = () => {
  return item.length
}

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect([1, 2, 3]).diff([2])
 * // [1, 3]
 */
const diff = (param) => {
  let obj = item.filter(val => !param.includes(val))
  return collect(obj)
}

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect([1, 2, 3]).diffAssoc(['name', 'age'])
 * // [ name: 'George', age: 29 ]
 */
const diffAssoc = (param) => {
  let obj = item.filter(val => !param.includes(val[param[0]]))
  return collect(obj)
}

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect([1, 2, 3]).diffKeys(['name', 'age'])
 * // [ name: 'George', age: 29 ]
 */
const diffKeys = (param) => {
  let obj = item.filter(val => !param.includes(val[param[0]]))
  return collect(obj)
}

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect([1, 2, 3]).each(function(val) {
 *    return val * 2
 * })
 * // [2, 4, 6]
 */
const each = (param) => {
  item.forEach(val => {
    param(val)
  })
  return item
}

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect([1, 2, 3]).every(function(val) {
 *    return val > 1
 * })
 * // [2, 4, 6]
 */
const every = (param) => {
  return item.every(val => {
    return param(val)
  })
}

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect([1, 2, 3]).filter(function(val) {
 *    return val > 1
 * })
 * // [2, 4, 6]
 */
const filter = (param) => {
  return item.filter(val => {
    return param(val)
  })
}

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect([1, 2, 3]).first()
 * // 1
 */
const first = (param) => {
  return item[0]
}

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect([1, 2, 3]).flat()
 * // [1, 2, 3]
 */
const flat = (param) => {
  return item.flat(param)
}

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect([1, 2, 3]).flip()
 * // [3, 2, 1]
 */
const flip = () => {
  return item.reverse()
}

/**
 * @param {array} param The arguments enter value.
 * @return {array} The function call
 * @example
 * collect([1, 2, 3]).groupBy(function(val) {
 *    return val > 1
 * })
 * // [2, 4, 6]
 */
const groupBy = (param) => {
  let obj = item.reduce((r, e, i) => (r[param(e)] = r[param(e)] || [], r[param(e)].push(e), r), {})
  return collect(obj)
}

module.exports = {
  collect,
}
