# Variable Types

---

## Primitive Types and Operations

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/variable-basics/primitive-types-and-operations).

### Primitive Types

The 3 built-in primitive types are `Number`, `String`, and `Boolean`.

### Determining Types

```js
typeof 42; // "number"
typeof "Hello"; // "string"
typeof true; // "boolean"

typeof 1 == typeof 2; // true
```

---

## Creating Variables

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/variable-basics/creating-your-first-variable)

Nothing new here.

---

## Creating Constants

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/variable-basics/constants-with-const)

### Differences from `let`

1. Must be given a value when created
2. Cannot be reassigned

### `const` vs. `let`

Use `const` when:

- The value never changes
- It is a global constant

Use `let` when:

- The value will change as your program runs
- You are counting or tracking something

### Global constants

Use upper-snake-case for global consts:

```js
const APP_NAME = "My Awesome App";
const VERSION = "1.0.0";
const SUPPORT_EMAIL = "support@example.com";
```

---

## Representing "Nothing"

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/variable-basics/null-vs-undefined)

### Difference between `undefined` and `null`

- `undefined` - means a variable exists but hasn't been given a value yet
- `null` - means you've intentionally set a variable to have no value

### Best practices

- Use `null` for intentional empty states or to clear values
