/**
 * Created by gabrielkunkel on 7/28/15.
 */

function sumAll(arr) {
  var i, lower, higher, totaled = 0;

  if (arr[0] > arr[1]) {
    higher = arr[0];
    lower = arr[1];
  }
    else {
    higher = arr[1];
    lower = arr[0];
  }

  for(i = higher; i >= lower; i -= 1) {
    totaled += i;
  }

  return totaled;
}





/*
Alternative

lower = Math.min(arr);
higher = Math.max(arr);

    */

