/**
 * Created by gabrielkunkel on 7/30/15.
 */

function boo(bool) {
  return typeof bool === 'boolean' ? true : false;
}

// potentially: 'return !bool || !!bool' ?? // nooooo... this would give us a bool even when it wasn't