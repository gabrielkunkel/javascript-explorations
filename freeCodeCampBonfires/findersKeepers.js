/**
 * Created by gabrielkunkel on 8/2/15.
 */

function find(arr, func) {
    var i = 0, arrLength = arr.length, tester;

   // var sortOut = arr.some(func);

        for(i; i < arrLength; i += 1) {


            tester = func(arr[i]);

            if (tester === true) {
                return arr[i];
            }
        }


    return undefined;
}


var bub = find([1, 3, 5, 9], function(num) {
    return num % 2 === 0;
});

console.log(bub); // should return 8

phantom.exit();