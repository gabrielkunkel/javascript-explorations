/**
 * Created by gabrielkunkel on 7/31/15.
 */
function spinalCase(str) {
    var RegExSpaces = /\s/g;
    var RegExUnders = /[_]/g;
    var RegExUpperCase = /([a-z])([A-Z])/g;

    str = str.replace(RegExSpaces, '-');
    str = str.replace(RegExUnders, '-');
    str = str.replace(RegExUpperCase, '$1-$2');

    str = str.toLowerCase();



    return str;
}

var spinaled = spinalCase('The_Andy GriffithShow');

console.log(spinaled);

