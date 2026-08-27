# Control Flow

## `if` Statements

[Lesson Plan](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/control-flow/if-statements)

### Boolean Logic

Falsy values (treated as false):

```js
false;
0;
(""); // (empty string)
null;
undefined;
NaN;
```

Truthy (everything else) including:

```js
"0";
[];
// {}
```

### Exercise

See [if.js](./if.js)

## Ternary Operators

[Lesson Plan](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/control-flow/ternary-operator)

```js
const message = age >= 18 ? "You can vote" : "You cannot vote";
```

### Exercise

See [ternary.js](./ternary.js)

## Switch Statements

[Lesson Plan](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/control-flow/switch-statements)

- Fallthrough by default.
- Uses `===` by default.
- Use `{ }` to create a new scope in each case.

```js
const favoriteAnimal = "cat";

switch (favoriteAnimal) {
  case "cat":
    console.log("Cats are pretty cool");
    break;
  case "dog":
    console.log("They are kinda loud");
    break;
  case "shark":
    console.log("That is an interesting choice");
    break;
  default:
    console.log("That is cool but I am unfamiliar with that animal");
}
```

### Exercise

See [switch.js](./switch.js)

## `for` Loops

[Lesson Plan](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/control-flow/for-loops)

- Avoid changing the loop variable inside the loop body, as it can lead to unexpected behavior.

### Basic For Loop

```js
for (let i = 0; i < 5; i++) {
  console.log(`Count: ${i}`);
}
```

### For ... of loop (for arrays)

```js
for (const fruit of fruits) {
  console.log(fruit);
}
```

### For ... in loop (for object properties)

```js
const person = {
  name: "Kyle",
  age: 30,
  city: "New York",
};

for (const key in person) {
  console.log(`${key}: ${person[key]}`);
}
```

### Exercise

See [for.js](./for.js)

## `while` loops

[Lesson Plan](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/control-flow/while-loops)

### `do...while`

Javascript has both `while` and `do...while`:

```js
let userInput;
do {
  userInput = prompt("Enter 'yes' to continue:");
  console.log(`You entered: ${userInput}`);
} while (userInput !== "yes");
```

## Recursion

[Lesson Plan](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/control-flow/recursion)

### Exercise

[recursion.js](./recursion.js)

## Short Circuit Evaluation

[Lesson Plan](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/control-flow/short-circuit-evaluation)

### `&&` and `||`

These behave as you expect.

### Nullish Coalescing `??`

- Only considers `null` and `undefined` as falsy:

```js
const config = {
  timeout: 0, // We want to keep this 0!
  debug: null, // This should get a default
};

// Using || (considers 0 as falsy)
const timeout1 = config.timeout || 5000; // 5000 (❌)
const debug = config.debug || true; // true (✅)

// Using ?? (only considers null/undefined as falsy)
const timeout2 = config.timeout ?? 5000; // 0 (✅)
const debug = config.debug ?? true; // true (✅)
```

### Optional Chaining `?.`

- Optional chaining will only access properties if the value before it is not `null` or `undefined`.

```js
const user = {
  profile: {
    settings: {
      theme: "dark",
    },
  },
};

// Old way with &&
const theme1 = user && user.profile && user.profile.settings && user.profile.settings.theme;

// New way with optional chaining
const theme2 = user?.profile?.settings?.theme;

// Works with methods too
user?.notify?.();
```
