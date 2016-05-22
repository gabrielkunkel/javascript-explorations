/**
 * Created by gabrielkunkel on 7/20/15.
 */

function findLongestWord(str) {
  var elementToCompare, winner = '';
  var array = str.split(' ');

  while(array.length > 0) {
    elementToCompare = array.pop();

    if (elementToCompare.length > winner.length) {
      winner = elementToCompare;
    }
  }

  return winner;
}
