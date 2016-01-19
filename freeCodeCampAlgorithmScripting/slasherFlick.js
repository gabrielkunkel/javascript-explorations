/**
 * Created by gabrielkunkel on 7/21/15.
 */

function slasher(arr, howMany) {
  var tray;
  var toSlice = (arr.length - howMany) * -1;
  if (howMany > arr.length) {return [];}
  if (howMany < 1) {return arr;}

  tray = arr.slice(toSlice);

  return tray;
}


