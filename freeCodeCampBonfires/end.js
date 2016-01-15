/**
 * Created by gabrielkunkel on 7/20/15.
 */
Array.prototype.cdr = function () {
    this.shift();
    return this;
}

// this function will return TRUE if both arrays are identical (strings, numbers, variable values)
// this only works for arrays, returns true if both arrays are the same, false if they're not
// this does NOT work if there are nested arrays (e.g. compare([['b']], [['b']]) returns false.)
function compare(a, b) {
    return a.length !== b.length ? false :
        a.length === 0 ? true : // base condition when they're empty arrays
            a[0] !== b[0] ? false : // if any of their elements aren't equal
                compare( a.cdr(), b.cdr() ); // otherwise run the function again - 1st element
}



function end(str, target) {
    var targetLength = target.length;
    targetLength *= -1;
    //console.log(targetLength);
    var strCut = str.substr(targetLength);
    var array1 = strCut.split('');
    //console.log(typeof array1);
    var array2 = target.split('');
    //console.log("First Array: " + array1);
    //console.log("Secon Array: " + array2);
    return compare(array1, array2);

}

var butter = end('Bastian', 'n');

console.log(butter);
