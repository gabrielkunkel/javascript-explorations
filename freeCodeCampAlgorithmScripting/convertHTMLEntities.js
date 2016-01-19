/**
 * Created by gabrielkunkel on 7/31/15.
 */

function convert(str) {
  var workingArray = str.split(''); // got array
  var i = 0, workingArrayLength = workingArray.length;  //set up for loop

  for (i; i < workingArrayLength; i += 1) {

    if (workingArray[i] === "&") {
      workingArray[i] = '&amp;';
    }
    else if (workingArray[i] === "<") {
      workingArray[i] = '&lt;';
    }
    else if (workingArray[i] === ">") {
      workingArray[i] = '&gt;';
    }
    else if (workingArray[i] === '"') {
      workingArray[i] = '&quot;';
    }
    else if (workingArray[i] === '\'') {
      workingArray[i] = '&apos;';
    }
  }

    // &colon;&rpar;
  return workingArray.join('');
}