/**
 * Created by gabrielkunkel on 7/29/15.
 */

/*

//

function diff(arr1, arr2) {
    var newArr = [];
    var array1 = arr1, array2 = arr2,
        workingElement = arr1[0];

    // take the first element from one array compare it to every part of the second array, if there is a match, delete both

    array2.filter(function(value, index, array) {
        workingElement === value ? false : true;
    })


    newArr.concat(array1, array2);


    // Same, same; but different.
    return newArr;
}

diff([1, 2, 3, 5], [1, 2, 3, 4, 5]);

*/







function diff(arr1, arr2) {
    var newArr = [], newArr2 = [];

    function callbacked(element, index, array) {
        return arr1.indexOf(element) === -1 ? true : false;
    }

    newArr = arr2.filter(callbacked);

    function callbacked2(element, index, array) {
        return arr2.indexOf(element) === -1 ? true : false;
    }

    newArr2 = arr1.filter(callbacked2);

    newArr = newArr.concat(newArr2);

    // Same, same; but different.
    return newArr;
}

var diffed = diff(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']); // return ['diorite', 'pink wool']

console.log(diffed);




/*

Array.prototype.cdr = function () {
    this.shift();
    return this;
}

function diffed(arr1, arr2) {
    return arr1.length === 0 ? [] :
        arr2.indexOf(arr1[0]) === -1 ? [].concat(arr1[0], diffed(arr1.cdr(), arr2)) :
            [].concat(diffed(arr1.cdr(), arr2));
}

function diff(arr1, arr2) {
    var biggerArray, smallerArray, finalArray = []
        evolveArray = [], devolveArray = [];

    if (arr1.length > arr2.length) {
        biggerArray = arr1;
        smallerArray = arr2;
    }
    else {
        biggerArray = arr2;
        smallerArray = arr1;
    }

    evolveArray = diffed(biggerArray, smallerArray);
    devolveArray = diffed(smallerArray, biggerArray);

    finalArray.concat(evolveArray, devolveArray);

    return finalArray;
}

var diffem = diff(['andesite', 'grass', 'dirt', 'pink wool', 'dead shrub'], ['diorite', 'andesite', 'grass', 'dirt', 'dead shrub']); // return ['diorite', 'pink wool']

console.log(diffem);



*/