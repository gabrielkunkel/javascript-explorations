/**
 * Created by gabrielkunkel on 8/17/15.
 */


// NOTICE: Much better version (shorter) is located in validateUS2.js


'use strict'

function telephoneCheck(str) {
    //declare variables
  var reForm = [], i = 0, reFormLength;
  var reStrings;

    //eliminate strings with letters right away
  reStrings = /[A-Za-z]/g;

  if (str.match(reStrings) !== null) {
    console.log('returning false at the beginning.')
    return false;
  }

    //eliminate strings with symbols right away
  var reSymbols;
  reSymbols = /\D/g;     // x(?!y)   IF not followed by
  if (str.match(reSymbols) !== null) {
    return false;
  }


  reForm[0] = /\d\d\d-\d\d\d-\d\d\d\d/; // 555-555-5555
  reForm[1] = /\d\d\d\s\d\d\d\s\d\d\d\d/; // 555 555 5555
  reForm[2] = /\(\d\d\d\)\s\d\d\d\s\d\d\d\d/; // (555) 555 5555
  reForm[3] = /\(\d\d\d\)\s\d\d\d-\d\d\d\d/; // (555) 555-5555
  reForm[4] = /\(\d\d\d\)\d\d\d-\d\d\d\d/; // (555)555-5555
  reForm[5] = /1\s\d\d\d\s\d\d\d\s\d\d\d\d/; //1 555 555 5555
  reForm[6] = /1\s\(\d\d\d\)\s\d\d\d\s\d\d\d\d/; //1 (555) 555 5555
  reForm[7] = /\d\d\d\d\d\d\d\d\d\d/; // 5555555555
  reForm[8] = /1\(\d\d\d\)\d\d\d-\d\d\d\d/; //1(555) 555 5555
  reForm[9] = /1\s\(\d\d\d\)\s\d\d\d-\d\d\d\d/; //1 (555) 555-5555
  reForm[9] = /1\s\d\d\d-\d\d\d-\d\d\d\d/; //1 555-555-5555

  reFormLength = reForm.length;

  /* eslint no-console: 0 */
  for(i; i < reFormLength; i += 1) {
    if (str.match(reForm[i]) !== null) {
      if (str.match(reForm[i]).join('') === str) {
        console.log('The reForm is ' + i);
        console.log(str.match(reForm[i]).join(''));
        console.log(typeof str.match(reForm[i]).join(''));
        return true;
      }
    }
  }

  return false;


}



var answer = telephoneCheck("1 555-555-555");




// Regex that covers everything: /(^1(\s|-)|^)(\(|^|)\d{3}(\s|-|\)\s|\)-|\)|)\d{3}(\s|-|)\d{4}$/;



/*


 555-555-5555       /\d\d\d-\d\d\d-\d\d\d/
 (555)555-5555
 (555) 555-5555
 555 555 5555
 5555555555
 1 555 555 5555
 1 (555) 555 5555
 */

// IS FALSE

/*
 123**&!!asdf# // has letters or symbols
 55555555 OR 6505552368 // numbers are greater than  RETURN false

 2 (757) 622-7382 //
 */


