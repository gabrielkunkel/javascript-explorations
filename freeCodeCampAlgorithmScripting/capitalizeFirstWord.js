/**
 * Created by gabrielkunkel on 7/20/15.
 */

function cdr(arr) {
  arr.shift();
  return arr;
}

function uppercaseFirst(arr) {
  return [].concat(arr[0].toUpperCase(), cdr(arr));
}

function titleCase(str) {
  var array, arrayLength, i, arrayToProcess;
  str = str.toLowerCase();
  array = str.split(' ');

  for (i = 0, arrayLength = array.length; i < arrayLength; i += 1) {
    arrayToProcess = array[i].split('');
    array[i] = uppercaseFirst(arrayToProcess).join('');
  }

  str = array.join(' ');

  return str;
}