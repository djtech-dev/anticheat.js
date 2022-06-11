# anticheat.js
An simple tampering detection library for Javascript (Web, Node.js, Deno)

- Extremely lite (5 lines of code, 1 function)
- Easy to use (just `isTampered`)

## I. NOTE

anticheat.js requires Lodash.

## II. How to use it.

To check if an object has been changed, just run `isTampered(obj)`.
`obj` is the string that contains the name of the object.

Example: `isTampered('document')` checks if 'document' was changed.
