/**
 * Created by gabrielkunkel on 8/5/15.
 */

var Person = function(firstAndLast) {
   this.setFullName(firstAndLast);
};

Person.prototype.getFirstName = function() {
    return this.first;
};

Person.prototype.getLastName = function() {
    return this.last;
};

Person.prototype.getFullName = function() {
    var newArray = [], fullNameString;
    newArray.push(this.first);
    newArray.push(this.last);
    fullNameString = newArray.join(' ');
    return fullNameString;
};

Person.prototype.setFirstName = function(first) {
    this.first = first;
};

Person.prototype.setLastName = function(last) {
    this.last = last;
};

Person.prototype.setFullName = function(firstAndLast) {
    var fullNameArray = firstAndLast.split(' ');
    this.first = fullNameArray[0];
    this.last = fullNameArray[1];
};


var bob = new Person('Bob Ross');



bob.setLastName('Jordan');
var fullNamePrint2 = bob.getFullName();
var bobLastNameIs = bob.getLastName();
bob.setFullName('Roger Speedo');
bob.setLastName('Benji');

console.log(fullNamePrint2);
console.log(bobLastNameIs);

console.log(bob.getFullName());

/*console.log(typeof bob.setFullName);
console.log(typeof bob.setFirstName);
console.log(typeof bob.setLastName);
console.log(typeof bob.getFirstName);
console.log(typeof bob.getFullName);
console.log(typeof bob.getLastName);*/


var whada = Object.keys(bob);

console.log(whada);

