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

