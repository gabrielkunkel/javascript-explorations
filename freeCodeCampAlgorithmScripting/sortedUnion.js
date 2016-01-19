/**
 * Created by gabrielkunkel on 7/30/15.
 */

function unite(arr1, arr2, arr3) {

  var workingArray = arr1.concat(arr2, arr3), buildingArray = [];
  var i = 0, workingArrayLength = workingArray.length;

  for (i; i < workingArrayLength; i += 1) {
    if (buildingArray.indexOf(workingArray[i]) === -1) {
      buildingArray.push(workingArray[i]);
    }
  }



/*    buildingArray = workingArray.filter(function(value, index, array) {
        return buildingArray.indexOf(value)  === -1;
    });*/

  return buildingArray;

}


