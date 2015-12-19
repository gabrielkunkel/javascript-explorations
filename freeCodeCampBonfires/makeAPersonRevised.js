/**
 * Created by gabrielkunkel on 8/8/15.
 */

// how do you keep solid-state values that don't add on to the other values in a constructor?
// if I create a new object in a closure function that is within a constructor does it not add to anything in the constructor?



var Person = function (firstAndLast) {

    this.getFirstName = function () {
        var fullNameArray = firstAndLast.split(' ');
        return fullNameArray[0];
    };

    this.getLastName = function () {
        var fullNameArray = firstAndLast.split(' ');
        return fullNameArray[1];
    };

    this.getFullName = function () {
       return firstAndLast;
    };

    this.setFirstName = function (first) {
        var fullNameArray = firstAndLast.split(' ');
        fullNameArray[0] = first;
        firstAndLast = fullNameArray.join(' ');
    };

    this.setLastName = function (last) {
        var fullNameArray = firstAndLast.split(' ');
        fullNameArray[1] = last;
        firstAndLast = fullNameArray.join(' ');
    };

    this.setFullName = function (fullName) {
        firstAndLast = fullName;
    };

    this.setFullName(firstAndLast);

};

var bob = new Person('Bob Ross');

var whada = Object.keys(bob);
console.log(whada);

bob.setLastName('Jordan');
var fullNamePrint2 = bob.getFullName();
var bobLastNameIs = bob.getLastName();
bob.setFullName('Roger Speedo');
bob.setLastName('Benji');

 console.log(fullNamePrint2);
 console.log(bobLastNameIs);

 console.log(bob.getFullName());


phantom.exit();