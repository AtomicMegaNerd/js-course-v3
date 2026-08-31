# Getting Started with Javascript v3

This is a course from Masters.dev.

[Course site](https://master.dev/courses/getting-started-javascript-v3).

## Earlier Web Dev Course

There is some overlap with
[https://github.com/AtomicMegaNerd/web-dev-intro](https://github.com/AtomicMegaNerd/web-dev-intro).
However there are also some new concepts covered here that were not covered in the earlier course.

## Running Live server

In `mise.toml` set the `CURR_PROJECT` environment variable to the root of the current project in
this repo that you are working on:

```toml
[env]
CURR_PROJECT="./projects/word-masters"
```

_NOTE_ Always set CURR_PROJECT to the root directory of each project that contains `index.html` and
the other files. Never set it to the index file or other resources like CSS or Javascript will not
load correctly.

Then from the command-line you can use mise to run the app (see the custom `serve` task in the
`mise.toml` file)

```fish
mise serve
```
