/**
 * Created by gabrielkunkel on 7/29/15.
 */

function convert(num) {
    var workingNumber = num, newArray = [], i;

    var multEq10s = num / 10;
    multEq10s = Math.floor(multEq10s);

    for (i = 0; i < multEq10s; i+=1) {
        newArray.push('X');
    }

    var left1s = num - (multEq10s * 10);

    if (left1s === 9) {
        newArray.push('IX');
    }
    else {
        var multEq5s = left1s / 5;
        multEq5s = Math.floor(multEq5s);

        for (i = 0; i < multEq5s; i+=1) {
            newArray.push('V');
        }

        var singles = left1s - (multEq5s * 5);

        for (i = 0; i < singles; i+=1) {
            newArray.push('I');
        }
    }

    var romanNumeralFinalNumber = newArray.join('');
    return romanNumeralFinalNumber;
}

var bunt = convert(29); //XXXVI

console.log(bunt);

phantom.exit();