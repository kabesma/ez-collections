#Method Listing
##all()
The all method returns the underlying array represented by the collection:
```js
collect([1, 2, 3])->all();

// [1, 2, 3]
```

##avg()
The avg method returns the average value of a given key:

```js
$average = collect([
    ['foo' => 10],
    ['foo' => 10],
    ['foo' => 20],
    ['foo' => 40]
])->avg('foo');

// 20

$average = collect([1, 1, 2, 4])->avg();

// 2
```
