/**
 * Created by gabrielkunkel on 8/2/15.
 */
function binaryAgent(str) {
  var workingArray = str.split(' '), newArray = [];
  var i = 0, workingArrayLength = workingArray.length;

  for(i; i < workingArrayLength; i += 1) {
    newArray[i] = String.fromCharCode( parseInt(workingArray[i], 2));
  }

  return newArray.join('');
}

var str = '01000001 01110010 01100101 01101110 00100111 01110100 00100000' +
  ' 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011' +
  ' 00100000 01100110 01110101 01101110 00100001 00111111';

var agented = binaryAgent(str);



/*
var res = str.match(/[01]{8}/g).map(function(v) {
    return String.fromCharCode( parseInt(v,2) );
}).join('');

var binary = '01000001';

var digit = parseInt(binary, 2);

console.log(digit);

var stringed = String.fromCharCode(digit);

console.log(stringed);*/
