xdescribe("Object-Oriented JavaScript", function () {
  'use strict';

  describe("the use of 'this'", function () {


    describe("Basic Objects Example", function () {
      var me, you, another, outsideValue;

      me = {
        name: "Gabriel"
      };

      you = {
        name: "someone peeping at my code."
      };

      another = {
        name: 'Margo',
        anotherMethod: function () {
          return this.name;
        },
        methodToCallOutside: function () {
          return this.outsideValue;
        }
      };

      outsideValue = 'onTheOutsideScope';

      var identify = function () {
        return this.name.toUpperCase();
      };

      function speak() {
        return "Hello, I'm " + identify.call(this);
      }

      it("can run identify and send back the object that was called", function () {
        expect(identify.call(me)).toEqual('GABRIEL');
        expect(identify.call(you)).toEqual('SOMEONE PEEPING AT MY CODE.');
      }); // end it

      it("can use one method to call another method in the scope", function () {
        expect(speak.call(me)).toEqual('Hello, I\'m GABRIEL');
        expect(speak.call(another)).toEqual('Hello, I\'m MARGO');
      }); // end it

      it("will use itself if the object is available", function () {
        expect(another.anotherMethod()).toEqual('Margo');
      }); // end it

      it("will NOT pick a value on the greater scope if it's not available on its object", function () {
        expect(another.methodToCallOutside()).not.toEqual('onTheOutsideScope');
      }); // end it

      it("can use a method on one object to perform the call with another object", function () {
        expect(another.anotherMethod.call(me)).toEqual('Gabriel');
      }); // end it
    }); // end describe 1st Objects example


    describe("a function that keeps track of how often it is called", function () {
      function countThe(num) {
        countThe.count += 1;
      }

      countThe.count = 0;

      it("should give us a count of how many times countThe is called", function () {
        var i = 0;
        var counted = function () {
          for (i; i < 10; i += 1) {
            if (i > 5) {
              countThe(i);
            }
          }
        };

        counted();

        expect(countThe.count).toBe(4);
      }); // end it
    }); // end describe


    describe("and, now, with 'this': a real way this to point to its function", function () {
      function countThe(num) {
        this.count += 1;
      }

      countThe.count = 0;

      it("should give us a count of how many times countThe is called", function () {
        var i = 0;
        var counted = function () {
          for (i; i < 10; i += 1) {
            if (i > 5) {
              countThe.call(countThe, i); //'this' now points to its function explicitly
            }
          }
        };

        counted();

        expect(countThe.count).toBe(4);
      }); // end it
    }); // end describe


    describe("default binding example", function () {
      it("doesn't work in strict mode", function () {
        var a = 2;

        function doNothing() {
          return this.a;
        }

        expect(function () { doNothing() }).toThrow();
      }); // end it

    }); // end describe

    /**
     * IMPLICIT BINDING
     */


    describe("implicit binding", function () {
      it("can call a function through a reference on an object", function () {

        function toGetCalled() {
          return this.value;
        }

        var obj = {
          value: 24,
          toGetCalled: toGetCalled
        };

        expect(obj.toGetCalled()).toBe(24);
      }); // end it


      it("doesn't work if the reference is NOT on an object", function () {
        function toGetCalled() {
          return this.value;
        }

        var obj = {
          value: 24
          // <- Reference to the function isn't there!
        };

        expect(function () {
          obj.toGetCalled()
        }).toThrow();
      }); // end it


      it("different objects can call the same function with different results", function () {

        function toGetCalled() {
          return this.value;
        }

        var obj = {
          value: 777,
          toGetCalled: toGetCalled
        };

        var differentObj = {
          value: 888,
          toGetCalled: toGetCalled
        };

        expect(obj.toGetCalled()).toBe(777);
        expect(differentObj.toGetCalled()).toBe(888);

      }); // end it


      it("works with the mechanism that can access properties through each other by reference", function () {

        var differentObj = {
          value: 222
        };

        var obj = {
          value: 111,
          differentObj: differentObj
        };

        expect(obj.differentObj.value).toBe(222);
      }); // end it


      it("is only concerned with the top/last level of an object property reference chain", function () {

        function toGetCalled() {
          return this.value;
        }

        var differentObj = {
          value: 222,
          toGetCalled: toGetCalled
        };

        var obj = {
          value: 111,
          differentObj: differentObj
        };

        expect(obj.differentObj.toGetCalled()).toBe(222);
      }); // end it


      it("matters what order the objects are assigned the relevant values", function () {
        var obj = {}, differentObj = {};

        function toGetCalled() {
          return this.value;
        }

        //Objects that are referenced must be already assigned the relevant values...

        obj = {
          value: 111,
          differentObj: differentObj
        };

        differentObj = {
          value: 222,
          toGetCalled: toGetCalled
        };

        //...or an error will be thrown.
        expect(function () {
          obj.differentObj.toGetCalled()
        }).toThrow();
      }); // end it


      it("will lose the implicit binding if it's passed by reference", function () {

        function toGetCalled() {
          return this.value;
        }

        var obj = {
          value: 999,
          toGetCalled: toGetCalled
        };

        var cleese = obj.toGetCalled; // cleese is ready to be called to return obj.value?

        // expect(cleese()).toBe(999); <- FAIL!!! TypeError!!!
        expect(function () {
          cleese()
        }).toThrow(); // So, no. The implicit binding breaks.
      }); // end it


      it("loses implicit binding because it reverts to being a reference to the function called", function () {

        function toGetCalled() {
          return this.value;
        }

        var obj = {
          value: 999,
          toGetCalled: toGetCalled
        };

        var cleese = obj.toGetCalled;

        var value = 666;

        // expect(cleese()).toBe(666); ...except it doesn't because we're in strict mode. ha!
        expect(function () {
          cleese()
        }).toThrow();
        expect(function () {
          obj.cleese()
        }).toThrow();
        expect(cleese.call(obj)).toBe(999); // explicit binding works. ;)
      }); // end it


      it("loses implicit binding because the obj isn't a part of the call site", function () {

        function toGetCalled() {
          return this.value;
        }

        function toGetCalled2(fn) { // <-- implicit binding that wipes other implicit bindings
          // fn is just another reference to `toGetCalled` in this example
          fn(); // <-- the call-site.
        }

        var obj = {
          value: 555,
          toGetCalled: toGetCalled
        };

        // expect(toGetCalled2(obj.toGetCalled)).toBe(555); <-- FAIL!!
        expect(function () {
          toGetCalled2(obj.toGetCalled)
        }).toThrow();
      }); // end it


      /**
       * THE KEY LESSON HERE: `this` gets assigned at the call site when we do an implicit
       * binding. The correct way to do implicit binding is to put the reference in the
       * object and then call it directly. NO passing the calling object + function toGetCalled
       * by reference! These means I can't use functional programming methods like forEach or
       * map, because the obj which `this` refers will lose its connection to the call site.
       * Overall, this method of binding is precarious without some premeditation.
       */

      /**
       * The Big Example for Implicit Binding
       */

      describe("a stack that operates using implicit binding", function () {

        // stack functions

        function pushOnStack() {
          var passVar;
          var argts = [].slice.call(arguments);

          // forEach won't work because it will eradicate the binding! :P
          // ...unless we added the obj as the second argument.
          /* argts.forEach(function (element) {
           this.items.push(element);
           });*/

          // but a for-loop will :-) Yay!
          for (var i = 0; i < argts.length; i += 1) {
            this.items.push(argts[i]);
          }
        } //pushOnStack

        function popOffStack(numberToPopOff) {
          numberToPopOff = numberToPopOff || 1;
          for (var i = 0; i < numberToPopOff; i += 1) {
            this.items.pop();
          }
        }

        function peekOnStack() {
          return this.items[this.items.length - 1];
        }

        function isStackEmpty() {
          return this.items.length === 0;
        }

        function clearStack() {
          this.items = [];
        }

        function sizeOfStack() {
          return this.items.length;
        }

        function stringifyStack() {
          return this.items.toString();
        }

        // objects to play with

        var mindy = {
          name: 'Mindy',
          items: [],
          pushOnStack: pushOnStack,
          popOffStack: popOffStack,
          peekOnStack: peekOnStack,
          isStackEmpty: isStackEmpty,
          clearStack: clearStack,
          sizeOfStack: sizeOfStack,
          stringifyStack: stringifyStack
        };

        var mork = {
          name: 'Mork',
          items: [],
          pushOn: pushOnStack, // LOOK! We can rename the functions. Cooooool.
          popOff: popOffStack,
          peekOn: peekOnStack,
          isEmpty: isStackEmpty,
          clear: clearStack,
          sizeOf: sizeOfStack,
          stringify: stringifyStack
        };

        afterEach(function () {
          mindy.clearStack();
          mork.clear();
        });

        it("can add values to a a stack one at a time", function () {
          mindy.pushOnStack('shrug');
          mork.pushOn('dip');

          expect(mindy.items).toEqual(['shrug']);
          expect(mork.items).toEqual(['dip']);
        }); // end it

        it("will start items empty", function () {
          expect(mindy.isStackEmpty()).toBe(true);
          expect(mork.isEmpty()).toBe(true);
        }); // end it

        it("can add multiple values to a stack at a time", function () {
          mindy.pushOnStack('silly', 'walks');
          mork.pushOn('eat', 'spinach');

          expect(mindy.items).toEqual(['silly', 'walks']);
          expect(mork.items).toEqual(['eat', 'spinach']);
        }); // end it

        it("can take a look at what's on top of its stack", function () {
          mindy.pushOnStack('buck', 'naked');
          mork.pushOn('roberta', 'eats', 'wheatgerm');

          expect(mindy.peekOnStack()).toEqual('naked');
          expect(mork.peekOn()).toEqual('wheatgerm');
        }); // end it

        it("can give us the size of the stack", function () {
          mindy.pushOnStack(1, 2, 3);
          mork.pushOn(11, 12, 33, 44);

          expect(mindy.sizeOfStack()).toBe(3);
          expect(mork.sizeOf()).toBe(4);
        }); // end it

        it("can remove one element from the stack (top of)", function () {
          mindy.pushOnStack(1, 2, 3);
          mork.pushOn(11, 12, 33, 44);

          mindy.popOffStack();
          mork.popOff();

          expect(mindy.items).toEqual([1, 2]);
          expect(mork.items).toEqual([11, 12, 33]);
        }); // end it

        it("can remove any number of elements from the top of the stack", function () {
          mindy.pushOnStack(1, 2, 3);
          mork.pushOn(11, 12, 33, 44);

          mindy.popOffStack(2);
          mork.popOff(3);

          expect(mindy.items).toEqual([1]);
          expect(mork.items).toEqual([11]);
        }); // end it

      }); // end describe `stack implementaton`

    }); // end describe `implicit binding`


    describe("explicit binding", function () {

      it("can 'explicitly' say what we're going to 'call' or 'apply' ", function () {
        function runThis() {
          return this.value;
        }

        var obj = {
          value: 78
        };

        expect(runThis.call(obj)).toBe(78);
      }); // end it

      it("can maintain binding, even when it's called by another function", function () {
        function runThis() {
          return this.value;
        }

        var obj = {
          value: 98
        };

        var runThisToo = function () {
          return runThis.call(obj); // <- "Hard Binding"
        };

        expect(runThisToo()).toBe(98);
      }); // end it

      it("can maintain binding, even when the reference is passed into a function", function () {
        function runThis() {
          return this.value;
        }

        function orThis() {
          return this.value + 1;
        }

        var obj = {
          value: 9999
        };

        var runThisToo = function (fn) {
          return fn.call(obj);
        };

        expect(runThisToo(runThis)).toBe(9999);
        expect(runThisToo(orThis)).toBe(10000);
      }); // end it

      it("most typically wraps a function with a hard binding creating " +
        "a pass-through of any arguments passed and any return value received", function () {

        function runThis(input) {
          return this.value + input;
        }

        var obj = {
          value: 33
        };

        var runThisToo = function () {
          return runThis.apply(obj, arguments);
        };

        expect(runThisToo(3)).toBe(36);
      }); // end it

      it("can be done with a reusable helper: the 'bind' helper", function () {
        /*
         * "bind(..) returns a new function that is hardcoded to call the original
         * function with the this context set as you specified."
         * */

        function runThis(input) {
          return this.value + input;
        }

        // `bind` helper
        function bind(fn, obj) {
          return function () {
            return fn.apply(obj, arguments); // mmmmm... curry :D
          };
        }

        var obj = {
          value: 35
        };

        // Now, the function will be always bound to the object in the returned var
        var bound = bind(runThis, obj);

        expect(bound(5)).toBe(40);
      }); // end it

      it("can use forEach (or map) with a bound object", function () {

        var obj = {
          items: [1, 2, 3, 4]
        };

        var names = ['jennifer', 'rupert', 'bobby', 'richard'];

        var smushed = names.map(function (element, index) {
          return this.items[index] + '. ' + element + '!'
        }, obj); // <-- hardcodes the obj.

        expect(smushed).toEqual(['1. jennifer!', '2. rupert!', '3. bobby!', '4. richard!']);
      }); // end it


    }); // end describe `explicit binding`

  }); // end describe `the use of this`


  describe("Tools of object-oriented JavaScript", function () {

    it("can detect if a property exists incorrectly (don't do this)", function () {
      var checksToSeeIfItExists = false;

      var obj = {
        name: false
      };

      if (obj.name) {
        checksToSeeIfItExists = true;
      }

      //expect(checksToSeeIfItExists).toBe(true); // FAIL!!
      expect(checksToSeeIfItExists).toBe(false);
    }); // end it

    it("can detect if a property exists correctly (do this!)", function () {
      var checksToSeeIfItExists = false;

      var obj = {
        name: false
      };

      if ("name" in obj) {
        checksToSeeIfItExists = true;
      }
      expect(checksToSeeIfItExists).toBe(true); // SUCCESS!!
    }); // end it

    it("can detect all of the properties on the prototype chain", function () {
      var checksToSeeIfItExists = false;


      var obj = {
        name: false
      };

      if ("toString" in obj) {
        checksToSeeIfItExists = true;
      }
      expect(checksToSeeIfItExists).toBe(true); // SUCCESS!! Buuuuuut....
    }); // end it

    it("can detect all of the properties JUST on its own object thus:", function () {
      var checksToSeeIfItExists = false;

      var obj = {
        name: false
      };

      if (obj.hasOwnProperty('toString')) {
        checksToSeeIfItExists = true;
      }
      expect(checksToSeeIfItExists).toBe(false);

      if (obj.hasOwnProperty('name')) {
        checksToSeeIfItExists = true;
      }
      expect(checksToSeeIfItExists).toBe(true);
    }); // end it


    it("can remove a property with delete but not with variables", function () {

      var aValue = 42;

      var obj = {
        number: 43
      };

      delete obj.number;

      expect(obj.number).toBe(undefined);

      // expect(function() { delete aValue}).toThrow(); //<- simply won't in strict mode.
    }); // end it

    // TODO: instanceof (preferred)
    // TODO: .constructor (not preferred, because it can be overwritten; test that)


  }); // end describe `tools of object-oriented javascript`


  describe("Object.create", function () {

    /**
     * A basic thought here, is that creating objects with Object.create is easy.
     * What can make it tricky is when you want to initialize and/or provide default
     * properties. You can not use the typical 'Constructor(name, age, traits)' pattern
     * without some additional work. You can just *make sure to add these*, but a
     * second way is to create an init function on the prototype object. Mixing a
     * constructor with the Object.create will ultimately be the most thorough approach.
     * Object.create seems to shine in situations where there's little inheritance work?
     * ...at least in comparison to other approaches.
     */

    it("creates an object from a prototypal object", function () {

      var robert = {
        name: 'Robert',
        giveName: function () {
          return this.name;
        }
      };

      var maria = Object.create(robert, {
        name: {value: 'Maria'}
      });

      expect(maria.giveName()).toEqual('Maria');
    }); // end it


    it("works with methods established on prototype object" +
      " AND you can add properties in two different ways", function () {

      var person = {
        giveName: function () {
          return this.name;
        },
        isAwesome: function () {
          return this.name + ' is so awesome!';
        }
      };

      var maria = Object.create(person, {
        name: {value: 'Maria'}
      });

      maria.age = 13;

      var bobby = Object.create(person, {
        name: {value: 'Bobby'}
      });

      bobby.age = 15;

      expect(maria.giveName()).toEqual('Maria');
      expect(bobby.giveName()).toEqual('Bobby');
      expect(maria.isAwesome()).toEqual('Maria is so awesome!');
      expect(bobby.isAwesome()).toEqual('Bobby is so awesome!');
      expect(maria.age).toBe(13);
      expect(bobby.age).toBe(15);
    }); // end it


    it("cannot work with object properties added on the prototype", function () {

      var girl = {
        name: '',
        age: '',
        traits: {} //<-- This is the problem.
      };

      var sam = Object.create(girl);

      sam.name = 'sam';
      sam.age = 14;
      sam.traits.hair = 'blonde'; //<-- This is the problem.

      var rachel = Object.create(girl);

      rachel.name = 'rachel';
      rachel.age = 15;
      rachel.traits.hair = 'brunnet'; //<-- This is the problem.

      expect(sam.name).toEqual('sam');
      expect(sam.age).toBe(14);
      expect(sam.traits.hair).not.toEqual('blonde'); //<-- This is the problem.
      // We want this to be equal to 'blonde', so we have to do something different
    }); // end it


    it("can't work with object properties not on the prototype either" +
      " and NOT locally initialized", function () {
      var girl = {
        name: '',
        age: ''
        // traits is gone
      };

      var sam = Object.create(girl);

      sam.name = 'sam';
      sam.age = 14;
      //sam.traits.hair = 'blonde'; //typeError won't even run

      var rachel = Object.create(girl);

      rachel.name = 'rachel';
      rachel.age = 15;
      // rachel.traits.hair = 'brunette'; //typeError won't even run

      expect(sam.name).toEqual('sam');
      expect(rachel.name).toEqual('rachel');
      expect(function () {
        return sam.traits.hair
      }).toThrow();
    }); // end it


    it("works when we first add a local object to put traits on", function () {
      var girl = {
        getName: function () {
          return this.name;
        },
        isAwesome: function () {
          return this.name + ' is awesome!';
        },
        hasPrettyHair: function () {
          return this.name + ' has pretty ' + this.traits.hair + ' hair.';
        }
      };

      var sam = Object.create(girl);

      sam.name = 'sam';
      sam.age = 14;
      sam.traits = {}; // <-- Must initialize/declare object ahead of time.
      sam.traits.hair = 'blonde';

      var rachel = Object.create(girl);

      rachel.name = 'rachel';
      rachel.age = 15;
      rachel.traits = {}; // <-- Must initialize/declare object ahead of time.
      rachel.traits.hair = 'brunette';

      expect(sam.name).toEqual('sam');
      expect(rachel.name).toEqual('rachel');
      expect(function () {
        return sam.traits.hair
      }).not.toThrow();
      expect(sam.traits.hair).toEqual('blonde');
      expect(rachel.traits.hair).toEqual('brunette');

      expect(sam.hasPrettyHair()).toEqual('sam has pretty blonde hair.');
      expect(rachel.hasPrettyHair()).toEqual('rachel has pretty brunette hair.');
    }); // end it


    it(", ALSO, can work with the proper init function", function () {
      var girl = {
        init: function (name, age) {
          this.name = name;
          this.age = age;
          this.traits = {};

          return this;
        },

        getName: function () {
          return this.name;
        },
        isAwesome: function () {
          return this.name + ' is awesome!';
        },
        hasPrettyHair: function () {
          return this.name + ' has pretty ' + this.traits.hair + ' hair.';
        }
      };

      var sam = Object.create(girl).init('sam', 14);

      sam.traits.hair = 'blonde';

      var rachel = Object.create(girl).init('rachel', 15);

      rachel.traits.hair = 'brunette';

      expect(sam.name).toEqual('sam');
      expect(rachel.name).toEqual('rachel');
      expect(sam.age).toBe(14);
      expect(rachel.age).toBe(15);
      expect(function () {
        return sam.traits.hair
      }).not.toThrow();
      expect(sam.traits.hair).toEqual('blonde');
      expect(rachel.traits.hair).toEqual('brunette');

      expect(sam.hasPrettyHair()).toEqual('sam has pretty blonde hair.');
      expect(rachel.hasPrettyHair()).toEqual('rachel has pretty brunette hair.');
    }); // end it


    it("can be used to create methods that can be accessed through" +
      " the chain of multiple Object.create's", function () {

      var person = {
        getName: function () {
          return this.name;
        }
      };

      var robot = Object.create(person, {
        getManufacturer: {
          value: function () {
            return this.manufacturer;
          }
        }
      });

      var robby = Object.create(robot);

      robby.name = 'Robby';
      robby.manufacturer = 'Intel';

      expect(function () {
        robby.getName()
      }).not.toThrow();
      expect(robby.getName()).toEqual('Robby');
      expect(robby.getManufacturer()).toEqual('Intel');
    }); // end it
  }); // end describe

}); // end describe