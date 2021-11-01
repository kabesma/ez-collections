'use strict'

const { collect } = require('./index.js')

console.log(collect([1, 1, 2, 4]).all())
console.log(collect([
    {'foo': 10},
    {'foo': 10},
    {'foo': 20},
    {'foo': 40}
]).avg('foo'))
console.log(collect([1, 1, 2, 4]).avg())
console.log(collect([1, 2, 3, 4, 5, 6, 7]).chunk(4))
