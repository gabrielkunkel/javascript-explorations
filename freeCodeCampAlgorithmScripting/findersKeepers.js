/**
 * Created by gabrielkunkel on 8/2/15.
 */

function find(arr, func) {
  var i = 0, arrLength = arr.length, tester;

  for (i; i < arrLength; i += 1) {

    tester = func(arr[i]);

    if (tester === true) {
      return arr[i];
    }
  }


  return undefined;
}


// var sortOut = arr.some(func);