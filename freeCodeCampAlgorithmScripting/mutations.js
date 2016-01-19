/**
 * Created by gabrielkunkel on 7/21/15.
 */

function mutation(arr) {
  var i;
  arr[1] = arr[1].toLowerCase();
  arr[0] = arr[0].toLowerCase();
  var superArray = arr[1].split('');
  var lovelyArray = arr[0].split('');

  for(i = 0; i < superArray.length; i += 1) {
    var shakedown = lovelyArray.indexOf(superArray[i]);
    if(shakedown === -1) { return false;}
  }
  return true;
}

