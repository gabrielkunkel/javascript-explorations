/**
 * Created by gabrielkunkel on 7/30/15.
 */

function fearNotLetter(str) {
    var alphabetArray = 'abcdefghijklmnopqrstuvwxyz'.split('');
    var workingArray = str.split('');
    var workingArrayInitialLength = workingArray.length;
    //console.log(workingArray);
    //console.log(workingArrayInitialLength);

    //create comparable array
    var firstLetter = workingArray[0], lastLetter = workingArray[workingArrayInitialLength-1];
    //console.log(firstLetter);
    //console.log(lastLetter);
    var startingPlace = alphabetArray.indexOf(firstLetter);
    var endingPlace = alphabetArray.indexOf(lastLetter);
    //console.log(startingPlace);
    //console.log(endingPlace);
    var focusedArray = alphabetArray.slice(startingPlace, endingPlace+1);
    var focusedArrayLength = focusedArray.length;
    //console.log(focusedArray);

    if (focusedArrayLength === workingArrayInitialLength) {
        return undefined;
    }
    else {
        var i = 0;

        for (i; i<focusedArrayLength; i += 1) {
            if (focusedArray[i] !== workingArray[i]) {
                return focusedArray[i];
            }
        }

    }
}

var feared = fearNotLetter('yz');

console.log(feared);

phantom.exit();