# Scope

---

## Understanding Scope

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/scope/understanding-scope)

- Global scope is the entire file
- Each set of curly braces create a new scope

### Scope Types

#### Global Scope

```js
const name = "Kyle"; // Global scope

function sayHi() {
  console.log(name); // ✅ Can access global variable
}

sayHi();
```

#### Block Scope

```js
function myFunction() {
  const x = 3; // New block scope
}

if (true) {
  const x = 1; // New block scope
}

{
  const x = 2; // New block scope
}
```

#### Function Scope

- Function scope is the entire function regardless of nesting of curly braces within.
- Function scope is very similar to block scope but is niche and is used with certain JS features.

### Nested Scope

#### Naming Conflicts

- We can have variables with the same name in different scopes.

### Best Practices

- Minimize global variable usage
- Don't use the same name for different variables in nested scopes

---

## Hoisting

This does not work.

```js
let a = 1;
console.log(a);
```

This does not:

```js
console.log(a);
let a = 1;
```

But var declarations and functions can work before they are defined:

```js
console.log(a);
var a = 1;
```

```js
console.log(doFunc());
function doFunc() {
  return "lol";
}
```

Arrow functions are not hoisted.

### Why Useful?

Code organization. Main program logic at the top and helper functions n the bottom

```js
// Main program logic (easy to read)
processUserData();
displayResults();
cleanup();

// Helper functions (implementation details)
function processUserData() {
  console.log("Processing...");
}

function displayResults() {
  console.log("Displaying results...");
}

function cleanup() {
  console.log("Cleaning up...");
}
```

---

## Closures

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/scope/closures)

What makes closures confusing is they access the _current value_ of variables, not the value they
had when the closure was created.

Closures are often used to define functions inside of functions.

### Why Closures

- Function Factories
- Callbacks

### Example

What does this do?

```js
// Outer returns the function inner. y is not yet bound.
function outer(x) {
  function inner(y) {
    console.log(x + y);
  }
  return inner;
}

// returns function inner(y) { 5 + y }
const addFive = outer(5);
// binds 3 to y giving us 8
addFive(3);
```

This isn't currying per-se but it feels similar. Understanding functional languages really helps
here. It's like partial function application.
