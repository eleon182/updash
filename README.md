# Updash
Updash modular utility

# Summary
Modular utility functions

# Installation
```
npm install updash
```

# Usage
```
var up = require('updash');

var primary = [1,2,3,4];
var secondary = [2,3];

var result = up.isSubArray(primary, secondary);

var result = up.sizeOfArray(primary);
// result = 4;

var result = cutFromArray(primary, 2);
//result = [1,2,4];

var obj = {
    steve: 1
}

var result = checkIfExists(obj, 'steve');
//result = true;

console.log(result);
```
Output: true

# API
- isSubArray  (determines if an array is a sub array of another array)
- sizeOfArray (returns the size of the array)
- cutFromArray (removes one item from the array)
- checkIfExists (determines if the item is in the object passed in)

# Features
- To come!

# Future
- Submit requests!
