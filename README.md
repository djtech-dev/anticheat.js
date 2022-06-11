# anticheat.js
An simple tampering detection library for Javascript (Web)

- Extremely lite (5 lines of code, 1 function)
- Easy to use (just `isTampered`)

## I. NOTE

anticheat.js requires Lodash. <br>
You can import it from the url `https://github.com/djtech-dev/anticheat.js/raw/main/anticheat.js`.

## II. How to use it.

To check if an object has been changed, just run `isTampered(obj)`. <br>
`obj` is the string that contains the name of the object. <br><br>

Example: `isTampered('document')` checks if 'document' was changed.
