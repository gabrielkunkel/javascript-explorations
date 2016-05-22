/**
 * Created by gabrielkunkel on 7/29/15.
 * Updated and Improved on 5/21/16.
 */


function romanNumeral(number) {
  var num = number,
    newArray = [],
    i;



  // remove 1000's from num
  var thousands = num / 1000;
  thousands = Math.floor(thousands);
  for (i = 0; i < thousands; i += 1) {
    newArray.push('M');
  }
  num -= thousands * 1000;

  // remove 900's from num
  var nineHundreds = num / 900;
  nineHundreds = Math.floor(nineHundreds);
  if (nineHundreds) {
    newArray.push('CM');
    num -= 900;
  }

  // remove 500's from num
  var fivehundreds = num / 500;
  fivehundreds = Math.floor(fivehundreds);
  if (fivehundreds) {
    newArray.push('D');
    num -= 500;
  }



  // remove 100's from num
  var hundreds = num / 100;
  hundreds = Math.floor(hundreds);
  if (hundreds < 4) {
    for (i = 0; i < hundreds; i += 1) {
      newArray.push('C');
    }
  }
  else if (hundreds === 4) {
    newArray.push('CD');
  }
  num -= hundreds * 100;

  // remove 90's from num
  var nineties = num / 90;
  nineties = Math.floor(nineties);
  if (nineties) {
    newArray.push('XC');
    num -= 90;
  }
  
  // remove 50's from num
  var fifties = num / 50;
  fifties = Math.floor(fifties);
  if (fifties) {
    newArray.push('L');
    num -= 50;
  }


  // remove 10's from num
    var tens = num / 10;
    tens = Math.floor(tens);
  if (tens < 4) {
    for (i = 0; i < tens; i += 1) {
      newArray.push('X');
    }
  }
  else if (tens === 4) {
    newArray.push('XL');
  }
  num -= tens * 10;

  // remove 9's from num
  var nines = num / 9;
  nines = Math.floor(nines);
  if (nines) {
    newArray.push('IX');
    num -= 9;
  }

  // remove 5's from num
  var fives = num / 5;
  fives = Math.floor(fives);
  if (fives) {
    newArray.push('V');
    num -= 5;
  }

  // remove 1's from num
  var ones = num / 1;
  ones = Math.floor(ones);
  if (ones < 4) {
    for (i = 0; i < ones; i += 1) {
      newArray.push('I');
    }
  }
  else if (ones === 4) {
    newArray.push('IV');
  }
  num -= ones * 1;


  return newArray.join('');

}


