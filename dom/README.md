# DOM

## Window and Document

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/dom/window-and-document)

### Document

`document` is short for `window.document`.

#### Key Properties in Document

```js
// Get the entire HTML element
console.log(document.documentElement) // The <html> element

// Get the body element
console.log(document.body) // The <body> element

// Get the head element
console.log(document.head) // The <head> element

// Get the current URL
console.log(document.URL)
```

## Selecting Elements

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/dom/selecting-elements)

```js
const header = document.getElementById("header")
console.log(header) // <div id="header">This is a header</div>

// Change the text color
header.style.color = "blue"
```

### Method 1: `getElementById`

- Returns a single element (or null if not found)
- IDs should be unique on a page
- You only pass the ID name, not #header
- Fast and efficient

### Method 2: `getElementsByClassName`

```html
<div class="content">First content div</div>
<div class="content">Second content div</div>
<div class="content">Third content div</div>
```

```js
const contentDivs = document.getElementsByClassName("content")
console.log(contentDivs) // HTMLCollection with 3 elements

// Type is HTMLCollection, not an array!
console.log(contentDivs.length) // 3
console.log(contentDivs[0])
```

- Instances of `HTMLCollection` look like arrays but don't have all array methods. You can convert
  to an araay using `Array.from()`:

```js
const contentDivs = document.getElementsByClassName("content")

// ❌ This won't work - HTMLCollection doesn't have forEach
// contentDivs.forEach(div => console.log(div))

// ✅ Convert to array first
const contentArray = Array.from(contentDivs)
contentArray.forEach((div) => {
  div.style.color = "green"
})

// ✅ Or use a regular for loop
for (let i = 0; i < contentDivs.length; i++) {
  contentDivs[i].style.backgroundColor = "lightgray"
}

// ✅ Or access individual elements by index
contentDivs[0].style.fontWeight = "bold"
```

### Method 3: `querySelector`

This is the **Recommended** method. The `querySelector` method uses CSS selectors to find elements.
It returns the first matching element.

```html
<div id="header">This is a header</div>
<div class="content">First content div</div>
<div class="content">Second content div</div>
<button data-action="submit">Submit</button>
```

```js
// Select by ID (same as getElementById)
const header = document.querySelector("#header")
console.log(header) // <div id="header">This is a header</div>

// Select by class (gets first element with that class)
const firstContent = document.querySelector(".content")
console.log(firstContent) // <div class="content">First content div</div>

// Select by tag name
const firstDiv = document.querySelector("div")
console.log(firstDiv) // <div id="header">This is a header</div>

// Select by attribute
const submitButton = document.querySelector('[data-action="submit"]')
console.log(submitButton) // <button data-action="submit">Submit</button>
```

### Method 4: `querySelectorAll`

Also **Recommended**.

```html
<div id="header">This is a header</div>
<div class="content">First content div</div>
<div class="content">Second content div</div>
<div class="content">Third content div</div>
<input type="text" name="username" placeholder="Enter username" />
```

```js
// Get all elements with class "content"
const allContent = document.querySelectorAll(".content")
console.log(allContent) // NodeList with 3 elements

// Get all divs
const allDivs = document.querySelectorAll("div")
console.log(allDivs) // NodeList with 4 elements

// Get all inputs
const allInputs = document.querySelectorAll("input")
console.log(allInputs) // NodeList with 1 elementjs
```

querySelector returns an instance of the type `NodeList`. They lack some array methods but do have
forEach:

```js
// ✅ This works - NodeList has forEach
const allContent = document.querySelectorAll(".content")

allContent.forEach((div) => {
  div.style.padding = "10px"
})
```

### Live vs. Static Collections

The biggest difference between the querySelectorAll and getElementsByClassName methods is that
`getElementsByClassName` returns a live `HTMLCollection`, while `querySelectorAll` returns a static
`NodeList`.

This means that if the DOM changes after you select elements with `getElementsByClassName`, the
`HTMLCollection` will automatically update to reflect those changes. In contrast, a `NodeList` from
`querySelectorAll` will not change unless you call `querySelectorAll` again.

It is almost never preferable to query live collections.

### Using Advanced CSS Selectors

You can use any valid CSS selector. Examples:

```js
// Attribute selectors
document.querySelector('input[name="username"]')
document.querySelector('img[alt*="logo"]')
document.querySelectorAll('a[href^="https://"]')

// Pseudo-selectors
document.querySelector("li:first-child")
document.querySelector("tr:nth-child(even)")
document.querySelector("input:checked")
document.querySelector("div:not(.hidden)")

// Combinators
document.querySelector("nav > ul > li") // Direct child
document.querySelector("h2 + p") // Adjacent sibling
document.querySelector("article p") // Descendant

// Multiple selectors
document.querySelector("button, input[type='submit']") // Either one
```
