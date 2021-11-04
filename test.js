'use strict'

const { collect } = require('./index.js')

console.log('--- All ---')
console.log(collect([1, 1, 2, 4]).all())

console.log('\n--- Average ---')
console.log(collect([
    {'foo': 10},
    {'foo': 10},
    {'foo': 20},
    {'foo': 40}
]).avg('foo'))
console.log(collect([1, 1, 2, 4]).avg())

console.log('\n--- Chunk ---')
console.log(collect([1, 2, 3, 4, 5, 6, 7]).chunk(4))

console.log('\n--- Collapse ---')
let collection = collect([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
])

let collapsed = collection.collapse()

console.log(collapsed.all())

console.log('\n--- Collect ---')
let collectionA = collect([{'name':'Desk', 'price':100}])
let collectionB = collectionA.collect()
console.log(collectionB.all())


console.log('\n--- Combine ---')
collection = collect(['name', 'age'])

let combined = collection.combine(['George', 29])

console.log(combined.all())


console.log('\n--- Concat ---')

collection = collect(['John Doe']);

let concatenated = collection.concat(['Jane Doe', 'July Doe']).concat({'name':'Johnny Doe'});

console.log(concatenated.all())

console.log(collect({'name':'johnny'}).all())
