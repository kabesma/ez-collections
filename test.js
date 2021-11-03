'use strict'

const { collect } = require('./index.js')

console.log('--- All ---')
console.log(collect([1, 1, 2, 4]).all())

console.log('--- Average ---')
console.log(collect([
    {'foo': 10},
    {'foo': 10},
    {'foo': 20},
    {'foo': 40}
]).avg('foo'))
console.log(collect([1, 1, 2, 4]).avg())

console.log('--- Chunk ---')
console.log(collect([1, 2, 3, 4, 5, 6, 7]).chunk(4))

console.log('--- Collapse ---')
let collection = collect([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
])

let collapsed = collection.collapse()

console.log(collapsed.all())
let collections = collect([{'name':'Desk', 'price':100}])
console.log(collections.all())
