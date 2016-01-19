/**
 * Created by gabrielkunkel on 7/20/15.
 */

function findLongestWord(str) {
  var i, arraylength, elementToCompare, winner = '', winnerLength = winner.length;
  var array = str.split(' ');

  while(array.length > 0) {
    elementToCompare = array.pop();

    if (elementToCompare.length > winner.length) {
      winner = elementToCompare;
    }
  }

  winnerLength = winner.length;

  return winnerLength;
}
