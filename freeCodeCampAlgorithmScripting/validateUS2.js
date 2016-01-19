/**
 * Created by gabrielkunkel on 8/18/15.
 */
'use strict'

function telephoneCheck(str) {
  var re = /(^1(\s|-|)|^)(\(|^|)\d{3}(\s|-|\)\s|\)-|\)|)\d{3}(\s|-|)\d{4}$/;

    // this re has been saved at https://regex101.com/r/uQ8sV8/1

  if (str.match(re) !== null) {
    return true;
  }

    else {
    return false;
  }

}


var answer = telephoneCheck("555-555-5555");






/*for(i; i < reFormLength; i += 1) {
    if (str.match(reForm[i]) !== null) {
        if (str.match(reForm[i]).join('') === str) {
            console.log('The reForm is ' + i);
            console.log(str.match(reForm[i]).join(''));
            console.log(typeof str.match(reForm[i]).join(''));
            return true;
        }
    }
}
console.log('Returning false at the end.')

return false;




var str = '(555)555-5555';
var subst = '';

var result = str.replace(re, subst);*/
