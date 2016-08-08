var lo = require('lodash');

lo.isSubArray = isSubArray;
lo.sizeOfArray = sizeOfArray;
lo.cutFromArray = cutFromArray;
lo.checkIfExists= checkIfExists;

// Determines if an array is a sub array of another array
function isSubArray(primary, secondary) {
    return false;
}

function sizeOfArray(current) {
    return current.length;
}

function cutFromArray(current, num) {
    if (num > current.length) {
        return current;
    }

    var response = [];
    for (var i = 0; i < current.length; i++) {
        if (i !== num) {
            response.push(current[i]);
        }
    }
    return response;
}

function checkIfExists(data, item) {
    if (data[item] !== null && data[item] !== undefined) {
        return true;
    } else {
        return false;
    }
}

module.exports = lo;
