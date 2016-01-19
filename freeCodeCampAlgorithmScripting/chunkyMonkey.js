/**
 * Created by gabrielkunkel on 7/21/15.
 */

function chunk(arr, size) {
  var newArray = [], arrayB = [], elementTransfer;

  while (arr.length > 0) {

    if (arr.length > size) {
      for(var i = 0; i < size; i += 1) {
        elementTransfer = arr.shift();
        arrayB.push(elementTransfer);
      }
    }
    else {
      arrayB = arrayB.concat(arr);
      //console.log(arrayB);
      arr = [];
      //console.log(arr);
    }

    newArray.push(arrayB);
    arrayB = [];
    //arrayB = [];
    // use a for loop to shift and then push each element into B array
    // push B array onto newArray

    //console.log(arr);
  }

  return newArray;
}
