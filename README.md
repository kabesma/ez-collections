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
const { collect } = require("ez-collections");

let average = collect([{ foo: 10 }, { foo: 10 }, { foo: 20 }, { foo: 40 }]).avg(
  "foo"
);

console.log(averange);
// 20

average = collect([1, 1, 2, 4]).avg();

console.log(averange);
// 2
```

## chunk

The chunk method breaks the collection into multiple, smaller collections of a given size:

```js
const { collect } = require("ez-collections");

let collection = collect([1, 2, 3, 4, 5, 6, 7]);

let chunks = collection.chunk(4);

chunks.all();

// [[1, 2, 3, 4], [5, 6, 7]]
```

## collapse

The collapse method collapses a collection of arrays into a single, flat collection:

```js
const { collect } = require("ez-collections");

let collection = collect([
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
]);

let collapsed = collection.collapse();

console.log(collapsed.all());

// [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

## collect

The collect method returns a new Collection instance with the items currently in the collection:

```js
const { collect } = require("ez-collections");

let collectionA = collect([1, 2, 3]);

let collectionB = collectionA.collect();

console.log(collectionB.all());
// [1, 2, 3]
```

## combine

The combine method combines the values of the collection, as keys, with the values of another array or collection:

```js
const { collect } = require("ez-collections");

let collection = collect(["name", "age"]);

let combined = collection.combine(["George", 29]);

console.log(combined.all());

// ['name' : 'George', 'age' : 29]
```

## concat

The concat method appends the given array or collection's values onto the end of another collection:

```js
const { collect } = require("ez-collections");

let collection = collect(["John Doe"]);

let concatenated = collection
  .concat(["Jane Doe"])
  .concat({ name: "Johnny Doe" });

console.log(concatenated.all());

// ['John Doe', 'Jane Doe', 'Johnny Doe']
```

## contains

The contains method determines whether the collection contains a given item. you may pass a string to the contains method to determine whether the collection contains a given item value:

```js
const { collect } = require("ez-collections");

collection = collect([
    {'product':'Desk', 'price': 100}
]);

collection->contains('Desk');

// true

collection->contains('New York');

// false

```

You may also pass a key / value pair to the contains method, which will determine if the given pair exists in the collection:

```js
const { collect } = require("ez-collections");

collection = collect([
    {'product' : 'Desk', 'price' : 200},
    {'product' : 'Chair', 'price' : 100},
]);

collection->contains('product', 'Bookcase');

// false
```

The contains method uses "loose" comparisons when checking item values, meaning a string with an integer value will be considered equal to an integer of the same value.
