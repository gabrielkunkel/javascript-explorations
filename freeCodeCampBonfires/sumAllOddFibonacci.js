/**
 * Created by gabrielkunkel on 7/31/15.
 */
function sumFibs(num) {
    var i = 0, fibArray = printFibonnaci(1, 1, num), fibArrayLength = fibArray.length;
    //console.log(fibArray);
    var totaling = 0;

    function printFibonnaci(n, m, terminate) {
        if (n > terminate) {
            return m;
        }
        else {
            return [].concat(m, printFibonnaci(n+m, n, terminate));
        }
    }

    for(i; i < fibArrayLength; i += 1) {
        if (fibArray[i] % 2 !== 0) {
            totaling += fibArray[i];
        }
    }

    return totaling;
}

var summedpup = sumFibs(1000);

console.log(summedpup);

phantom.exit();