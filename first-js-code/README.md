# Getting Started

[Lesson Notes](https://webdevsimplified.github.io/fem-getting-started-with-javascript/lessons/running-javascript/loading-javascript-in-browser)

## Browser Loading Order

The browser does these in order:

1. Download HTML file
2. Parse HTML from top to bottom
3. Build the DOM
4. Render the page

### How Javascript Normally Works

- Javascript _blocks HTML parsing_ by default.
- Browser _stops everything_ to download and execute JS files.
- Browser resumes parsing after JS files are done executing.

### Body Loading (Old Approach)

Put the Javascript at the bottom of the body instead of the head is an old approach. This is an
older approach.

### Async Loading

```html
<script src="script.js" async></script>
```

- Browser reaches `<script>` tag
- Continues parsing HTML while donwloading JS source files in the background.
- Stops parsing once JS download is complete.
- Executes JS immediately.
- Resumes HTML parsing.
- May execute in any order (whichever is downloaded first).

### Defer Loading

```html
<script src="script.js" defer></script>
```

- Runs JS after all HTML parsing is complete.
- _Recommended_ for most scripts.
- Runs them in a predictable order (in order that they are declared).
