# Advanced Variables

---

## Creating Variables with `var`

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/advanced-variables/creating-variables-with-var)

### Problems with `var`

- `var` uses function scope not block scope :-(

```js
function func() {
  {
    var a = 1; // Function scope
  }
  console.log(a); // Prints 1
}

func();
```

- Variables declared with `var` get hoisted to the top of their scope, but only the declaration (not
  the value):

```js
console.log(a); // Prints undefined
var a = 1;
console.log(a); // 1
```

- `var` allows redeclaration

### Best Practices

- never use `var` in modern JS.

---

## Type Coercion

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/advanced-variables/type-coercion)

### Explicit Type Coercion

#### String to number

```js
const a = "1";
console.log(typeof a); // "string"

// Convert to integer
const numberA = parseInt(a);
console.log(typeof numberA); // "number"
```

- `parseInt` drops the decimal returns whole number
- `parseFloat` also exists and keeps the decimal

Remember though there is only the one _number_ type.

#### Number to string

```js
const num = 1.34;
const stringNum = num.toString();

console.log(typeof stringNum); // "string"
```

### Implicit Conversions

- `+` with `string` and `number` returns a `string`.

```js
const a = 1; // number
const b = "3"; // string

console.log(a + b); // "13" (not 4)
```

- Other math operators convert `string` to `number`:

```js
const a = 3; // number
const b = "1"; // string

console.log(a - b); // 2 (converts "1" to 1, then 3 - 1)
console.log(a * b); // 3 (converts "1" to 1, then 3 * 1)
```

Avoid implicit conversions whenever possible.

---

## NaN

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/advanced-variables/nan-not-a-number)

The key thing to remember is the type of `NaN` is `number`. The irony is not lost on me:

```js
const result = parseInt("hello");

console.log(result); // NaN
console.log(typeof result); // "number"
```

We cannot use `==` or `===` to check for NaN. Use `isNaN()`:

```js
const result = parseInt("hello");

console.log(result); // NaN
console.log(typeof result); // "number"
```

## Equality `==` vs. `===`

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/advanced-variables/equality-type-comparisons)

`==` does implicit type conversion before comparing.

```js
console.log(1 == "1"); // true (converts string "1" to number 1)

console.log(0 == false); // true (0 is "falsy")
console.log("" == false); // true (empty string is "falsy")
```

This is why `===` exists.

There is also `!=` vs. `!==`.

### Which to Use?

Always prefer `===` and `!==` to avoid unexpected type coercion issues.

#### The One Exception

If you want to check for `null` or `undefined`, `==` can be useful.

```js
console.log(null == null); // true
console.log(null == undefined); // true (null and undefined are considered equal)

console.log(null === null); // true
console.log(null === undefined); // false (different types)
```

When checking if a variable has a value, you often want to catch both null and undefined which is
why `==` is useful here.
