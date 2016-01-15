
function removeMiddleElement(arr) {
    if (arr.length % 2 === 0) {return arr;}
    var halfArrLen = arr.length / 2;
    var slicePoint = Math.floor(halfArrLen);
    var firstHalfStop = slicePoint - 1;
    var secondHalfStart = slicePoint + 1;
    var firstHalf = arr.slice(0, firstHalfStop+1);
    var secondHalf = arr.slice(secondHalfStart, arr.length);

        // concatenate the two arrays
    return firstHalf.concat(secondHalf);
}

function palindromeB(str) {
    var array = str.split('');

    function cdr(array) {
        array.shift();
        return array;
    }

    function removeSpaces(arr) {
        return (arr.length === 0) ? [] :
            (arr[0] === ' ') ? [].concat(removeSpaces(cdr(arr))) :
                [].concat(arr[0], removeSpaces(cdr(arr)));
    };

    array = removeSpaces(array);

    //remove extra punctuation

    function removePunctuation(arr, regEx) {

    }


    function pl(arr) {
        var popped = arr.pop();

        if(arr.length === 0 || arr.length === 1) {
            return true;
        }

        else {
            if(popped === arr[0]) {
                arr.shift();
                return pl(arr);
            }
            else {
                return false;
            }
        }
    }
    return pl(array);
}

//This is better, as it pasts all tests
function palindrome(str) {

    //clean text: remove grammatical marks, spaces, etc.
    var regEx = /\W/ig;
    var cleanedString = str.replace(regEx, '');
    cleanedString = cleanedString.toLowerCase();
    console.log(cleanedString);
    var array = cleanedString.split('');

    //function to do actual palindrome evaluation
    function pl(arr) {
        var popped = arr.pop();

        if(arr.length === 0 || arr.length === 1) {
            return true;
        }

        else {
            if(popped === arr[0]) {
                arr.shift();
                return pl(arr);
            }
            else {
                return false;
            }
        }
    }
    return pl(array);
}




answer = palindrome("A man, a plan, a canal. Panama");
console.log(answer);

