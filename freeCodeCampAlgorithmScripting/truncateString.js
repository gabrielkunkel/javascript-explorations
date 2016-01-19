/**
 * Created by gabrielkunkel on 7/21/15.
 */

function truncate(str, num) {
  if (str.length === num) {return str;}
  var letterAmount = num-3;
  if (str.length < letterAmount + 2) {return str}
  var newStr = str.slice(0, letterAmount);
  newStr += '...';

  return newStr;
}



