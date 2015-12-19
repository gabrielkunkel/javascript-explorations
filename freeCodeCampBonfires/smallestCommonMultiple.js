/**
 * Created by gabrielkunkel on 8/2/15.
 */

function smallestCommons(arr) {
    var i, terminate, o, endpoint, isItMade;

    if (arr[0] > arr[1]) {
        var intermediate = arr[0];
        arr[0] = arr[1];
        arr[1] = intermediate;
    }


    o = 1;
    endpoint = 400000; // for outer loop
    isItMade = 0;

    for(o; o < endpoint; o += 1) { // keep progressing
       /* console.log('O POSITION ' + o);
        console.log('==================')*/

        i = arr[0];
        terminate = arr[1];
        isItMade = 0;

        for(i; i <= terminate; i += 1) { // check the numbers in range
            //console.log(i);
            if (o % i === 0) {
                isItMade += 1;
                //console.log('is it made at: ' + isItMade);
            } // if it's divisble by the number

            if (isItMade === terminate) {
                return o;
            }
            else if (i === terminate) {
                isItMade = 0;
            }

        } //inner for loop



    } //outer for loop
    return "We didn't find anything! There must be a problem.";
}


var dido = smallestCommons([1, 13]);

console.log(dido);

phantom.exit();


// fill in the numbers in range

// get totaled: narrow the check for the numbers by starting with multiplying them all together

// starting with totaled check all the numbers through 2