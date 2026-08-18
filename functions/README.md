# Functions

## Intro to Functions

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/functions/introduction-to-functions)

Nothing noteworthy here. He is initially using the function keyword here:

```js
function add(x, y) {
  return x + y;
}

let sum = add(2, 3);
console.log(sum); // 5
console.log(add(10, 7)); // 17
```

---

## Passing Functions as Arguments

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/functions/passing-functions-as-arguments)

When passing a function to another function, the function passed in as an argument is called a
_callback_:

```js
function sumCallback(a, b, callback) {
  let sum = a + b;
  callback(sum); // Invoke the callback with the result
}

function handleSum(sum) {
  console.log(sum);
}

sumCallback(1, 2, handleSum); // Prints: 3
```
