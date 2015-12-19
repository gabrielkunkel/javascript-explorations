/**
 * Created by gabrielkunkel on 7/21/15.
 */

function filterMe(value) {


    return Boolean(value);
}

function bouncer(arr) {

    var filtered = arr.filter(filterMe);

    return filtered;
}

var bounce = bouncer([7, 'ate', '', false, 9]);

console.log(bounce);

phantom.exit();