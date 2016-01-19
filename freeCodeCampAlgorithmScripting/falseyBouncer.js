/**
 * Created by gabrielkunkel on 7/21/15.
 */

function filterMe(value) {


  return Boolean(value);
}

function bouncer(arr) {

  var filtered = arr.filter(filterMe);

  return filtered;
}

