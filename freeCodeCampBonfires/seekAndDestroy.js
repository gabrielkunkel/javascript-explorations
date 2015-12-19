/**
 * Created by gabrielkunkel on 7/23/15.
 */

function destroyer(arr) {
    // convert extra arguments into an array
    var i, argsLength;
    var args = Array.prototype.slice.call(arguments, 1);
    console.log(args);

    for(i = 0, argsLength = args.length; i < argsLength; i += 1) {
        arr = arr.filter(function (value, index, array) {
            if (args[i] === value) {
                return false
            }
            else {
                return true
            }
    });
}

    return arr;
}

var lovelovelove = destroyer([1, 2, 3, 1, 2, 3], 2, 3); // should return 1, 1

console.log(lovelovelove);

phantom.exit();