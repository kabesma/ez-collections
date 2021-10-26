# Method Listing
## all
The all method returns the underlying array represented by the collection:
```js
const { collect } = require('ez-collections')

let all = collect([1, 2, 3])->all()

// [1, 2, 3]
```

## avg
The avg method returns the average value of a given key:

```js
const { collect } = require('ez-collections')

let average = collect([
    ['foo' => 10],
    ['foo' => 10],
    ['foo' => 20],
    ['foo' => 40]
]).avg('foo')

console.log(averange)
// 20

average = collect([1, 1, 2, 4]).avg()

console.log(averange)
// 2
```
