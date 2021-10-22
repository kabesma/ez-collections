'use strict'

const { collect } = require('./index.js')

console.log(collect([1, 1, 2, 4]).all)
console.log(collect([1, 1, 2, 4]).avg)
