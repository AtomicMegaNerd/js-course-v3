# Functions

## Intro to Functions

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/functions/introduction-to-functions)

Nothing noteworthy here. He is initially using the function keyword here:

```js
function add(x, y) {
  return x + y
}

let sum = add(2, 3)
console.log(sum) // 5
console.log(add(10, 7)) // 17
```

If you leave out an argument to a function it will be set to `undefined`.

Calling `typeof` on a function returns the string "function".

---

## Passing Functions as Arguments

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/functions/passing-functions-as-arguments)

When passing a function to another function, the function passed in as an argument is called a
_callback_:

```js
function sumCallback(a, b, callback) {
  let sum = a + b
  callback(sum) // Invoke the callback with the result
}

function handleSum(sum) {
  console.log(sum)
}

sumCallback(1, 2, handleSum) // Prints: 3
```

---

## Arrow Functions

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/functions/arrow-functions)

```js
function sum(a, b) {
  return a + b
}

const sumArrow = (a, b) => {
  return a + b
}
```

### Differences

#### Single Parameter Shortcut

When you have _one_ parameter you can omit the parentheses:

```js
// With parentheses
const printName = (name) => {
  console.log(name)
}

// Without parentheses
const printNameShort = (name) => {
  console.log(name)
}
```

#### Shorter Syntax for Simpler Functions

```js
// Short arrow function (implicit return)
const sumShort = (a, b) => a + b
```

Do not add the `return` keyword to functions that use this syntax.

### When To Use Arrow Functions

1. Short, simple functions
2. Callback functions
3. Anonymous functions
4. Functions that fit on one line
