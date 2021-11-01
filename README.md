# Method Listing
## all
The all method returns the underlying array represented by the collection:
```js
const { collect } = require('ez-collections')

collect([1, 2, 3])->all()

// [1, 2, 3]
```

## avg
The avg method returns the average value of a given key:

```js
const { collect } = require('ez-collections')

let average = collect([1, 1, 2, 4])->avg()

// 2
```

## chunk
The chunk method breaks the collection into multiple, smaller collections of a given size:

```js
let collection = collect([1, 2, 3, 4, 5, 6, 7])

let chunks = collection.chunk(4)

chunks.all()

// [[1, 2, 3, 4], [5, 6, 7]]
```
