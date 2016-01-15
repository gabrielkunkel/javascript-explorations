/**
 * Created by gabrielkunkel on 8/2/15.
 */

Array.prototype.cdr = function () {
    this.shift();
    return this;
}

function drop(arr, func) {
    var newArray = [];
    var testable, removedElement;

    while (arr.length > 0) {
        testable = func(arr[0]);
        if (!testable) {
            arr.cdr();
        }
        else {
            removedElement = arr.shift();
            newArray.push(removedElement);
        }

    }

    return newArray;
}

var pants = drop([1, 2, 3, 4], function(n) {return n >= 3; });

console.log(pants);

