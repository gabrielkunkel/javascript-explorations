/**
 * Created by gabrielkunkel on 8/2/15.
 */

Array.prototype.cdr = function () {
  this.shift();
  return this;
}

function steamroller(arr) {
  return arr.length === 0 ? [] :
        Array.isArray(arr[0]) ? [].concat(steamroller(arr[0]), steamroller(arr.cdr())) :
            [].concat(arr[0], steamroller(arr.cdr()));
}

var flattened = steamroller([[['a']], [['b']]]); // 'a', 'b'





/*

 function steamroller(arr) {

 var flattened = arr.reduce(function(a, b) {
 return a.concat(b);
 });


 return flattened;
 }

 steamroller([1, [2], [3, [[4]]]]); // 1, 2, 3, 4


 var flattened = [1, [2], [3, [[4]]]].reduce(function(a, b) {
 return a.concat(b);
 });
 */
