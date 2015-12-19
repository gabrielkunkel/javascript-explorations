'use strict';

describe("the use of 'ths'", function () {


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
    
    it("should give us a count of how many times countThe is called", function() {
      var i = 0;
      var counted = function () {
        for(i; i < 10; i += 1) {
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

    it("should give us a count of how many times countThe is called", function() {
      var i = 0;
      var counted = function () {
        for(i; i < 10; i += 1) {
          if (i > 5) {
            countThe.call(countThe, i); //'this' will now be pointing to its function explicitly
          }
        }
      };

      counted();

      expect(countThe.count).toBe(4);
    }); // end it
  }); // end describe

  //TODO: Find a way to test this while it considers it a type error
  xdescribe("default binding example", function () {
    it("returns the objec it's in", function() {
      var a = 2;

      function doNothing() {
        return this.a;
      }
      expect(doNothing()).not.toBe(2);

    }); // end it

  }); // end describe






}); // end describe