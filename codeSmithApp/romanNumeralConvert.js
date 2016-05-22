/**
 * Created by gabrielkunkel on 7/29/15.
 */


/*
There is a way to refactor this and make it shorter.
Something like...



if (mult % 10 === 0 || 1) {
  if (whatGetsOutputted === 4) {
    newArray.push(obj.roman);
    newArray.push(nextObj.roman);
  }




var num = number

function (obj, nextObj) {

  var multiple = num / multipleAmount;
  multiple = Math.floor(multiple);

  if (multiple === 4) {
    newArray.push(obj.roman);
    newArray.push(nextObj.roman);
  } else {
   for (i = 0; i < multiple; i += 1) {
   newArray.push(multiple['key']);
   }
   num -= multiple * multipleAmount;

   }


}

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

    // remove the 5's from num
    if (num === 9) {
      newArray.push('IX');
    }
    else {
      var fives = num / 5;
      fives = Math.floor(fives);
      for (i = 0; i < fives; i += 1) {
        newArray.push('V');
      }
      num -= fives * 5;

      // remove the 1's from num
      if (num === 4) {
        newArray.push('IV');
      }
      else {
        for (i = 0; i < num; i += 1) {
          newArray.push('I');
        }
      }

    }

  return newArray.join('');

}


