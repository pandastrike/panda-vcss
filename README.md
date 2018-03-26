# Panda VCSS

Virtual CSS in JavaScript (or CoffeeScript, TypeScript, and so on).

(Examples in CoffeeScript because I like to write in CoffeeScript, but the semantics are the same as those of JavaScript.)

```coffee
# Let's define a helper...
rhythm = (lineHeight, fontSize) -> [
  p "font-size", scale lineHeight, fontSize
  p "line-height", lineHeight
]

# The s and p are functions that return mixins,
# functions that will modify a stylesheet.
# Here we just run them with no arguments,
# which will create an empty stylesheet for us.
# The render function will convert that into a
# string of CSS.

css = render s "article", [

  # The & will use the parent selector
  s "& > h1", [

    # Unit helpers like rem and pct are built-in
    rhythm (rem 4), (pct 90)
  ]

  s "& > p", [
    p "font-face", "Montserrat"
  ]
]

assert.equal css, """
  article > h1 { font-size: 3.6rem; line-height: 4rem; }
  article > p { font-face: Montserrat; }
 """
```

## Installation

`npm i -s panda-vcss`
