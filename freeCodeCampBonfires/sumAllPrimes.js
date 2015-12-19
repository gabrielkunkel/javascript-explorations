/**
 * Created by gabrielkunkel on 8/1/15.
 */

function sumPrimes(num) {

    function isPrime(num) {
        for (var x = 2; x <= Math.round(num/2); x++)
            if (num % x === 0)
                return false;

        return true;
    }


    function primeArray(n) {

        function primeArrayBackwards(m) {
            return m === 1 ? [] :
                isPrime(m) ? [].concat(m, primeArrayBackwards(m-1)) :
                    [].concat(primeArrayBackwards(m-1));
        }

        return primeArrayBackwards(n).reverse();

    }

    var primeArrayMade = primeArray(num);
    console.log(primeArrayMade);


    var i = 0, primeArrayMadeLength = primeArrayMade.length;
    console.log(primeArrayMadeLength);
    var totaledArray = 0;

    for (i; i < primeArrayMadeLength; i += 1) {
        totaledArray += primeArrayMade[i];
    }

    return totaledArray;
}

var runnedFunction = sumPrimes(977); // 72179 wtf??



console.log(runnedFunction);

phantom.exit();