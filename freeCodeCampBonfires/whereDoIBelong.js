/**
 * Created by gabrielkunkel on 7/27/15.
 */

function where(arr, num) {
    // Find my place in this sorted array.
    var numberLocation;

    arr.push(num);

    arr = arr.sort();

    numberLocation = arr.indexOf(num);


    return numberLocation;
}

var pudding = where([40, 60], 50); // should return 1

console.log(pudding);

phantom.exit();