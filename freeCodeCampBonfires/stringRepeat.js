/**
 * Created by gabrielkunkel on 7/21/15.
 */

function repeat(str, num) {
    var i, completeStr = '';

    if (num <= 0) {return '';}

    for(i = 0; i < num; i += 1) {
        completeStr += str;
    }
    return completeStr;
}

var outs = repeat('*', 3);

console.log(outs);

phantom.exit();