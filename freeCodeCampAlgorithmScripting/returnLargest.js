/**
 * Created by gabrielkunkel on 7/20/15.
 */
/*
function cdr(arr) {
    arr.shift();
    return arr;
}

function lof(arr) {
    return (arr.length === 0) ?
}*/


// function that finds the largest number in an array

function largest(arr) {
  var i, arrLength, winner = 0;

  for(i = 0, arrLength = arr.length; i < arrLength; i += 1) {
    if (arr[i] > winner) {
      winner = arr[i];
    }
  }

  return winner;
}

function lof(arr) {
  var i, arrLength, newArray = [];

  for(i = 0, arrLength = arr.length; i < arrLength; i += 1) {
        //console.log(arr[i]);
    var largestElement = largest(arr[i]);
        //console.log(largestElement);
        //console.log(typeof largestElement);
    newArray[i] = largestElement;
  }

  return newArray;
}

