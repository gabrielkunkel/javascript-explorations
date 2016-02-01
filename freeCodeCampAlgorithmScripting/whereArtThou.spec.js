'use strict';

describe("Returning an array of collection elements that include just those elements in a " +
  "source with matching values", function() {

  it("only returns an array of objects that contain the matching key and value indicated" +
    " in the source object", function() {
    var arrayOfObjects = [
      { first: "Romeo", last: "Montague"},
      { first: "Mercutio", last: null},
      { first: "Tybalt", last: "Capulet"}
    ];
    var sourceObject = { last: "Capulet"};

    expect(whereArtThou(arrayOfObjects, sourceObject)).toEqual([{first: "Tybalt", last: "Capulet"}]);
  }); //end it

  it("returns an array of all objects that contain the source object key, which starts in an array", function() {
    var arrayOfObjects = [
      { "a": 1},
      { "a": 1},
      { "a": 1, "b": 2}
    ];
    var sourceObject = [
      { "a": 1}
    ];
    expect(whereArtThou(arrayOfObjects, sourceObject)).toEqual([{ "a": 1}, { "a": 1}, { "a": 1, "b": 2}]);
  }); //end it

  it("returns an array of objects that contain only matching keys (plural) from the source" +
    " object, which starts in an array", function() {
    var arrayOfObjects = [
        { "a": 1, "b": 2 },
        { "a": 1 },
        { "a": 1, "b": 2, "c": 2 }
    ];

    var sourceObject = [
      { "a": 1, "b": 2 }
    ];

    expect(whereArtThou(arrayOfObjects, sourceObject)).toEqual([
      { "a": 1, "b": 2 },
      { "a": 1, "b": 2, "c": 2 }]
    );

  }); //end it
  
  it("returns an array of objects that contain only matching keys with matching " +
    "values from the source object", function() {
    var arrayOfObjects = [
      {"a": 'Knights', "b": 'ofTheRoundTable'},
      {"a": 'Knights', "b": 'whoSayNee!'},
      {"a": 'Knights', "b": 'ofTheRoundTableWhoNowSayNee!'},
      {"a": 'Knights', "b": 'whoSayNee!', "c": 'forAShrubbery'},
      {"a": 'Peasants', "b": 'whoSayNee!'}
    ];
    var sourceObject = { "a": 'Knights', "b": 'whoSayNee!'};

    expect(whereArtThou(arrayOfObjects, sourceObject)).toEqual([{
      "a": 'Knights', "b": 'whoSayNee!'}, {"a": 'Knights', "b": 'whoSayNee!', "c": 'forAShrubbery'}]);



  }); //end it

  describe("the JavaScript functions that have to be used", function() {

    it("provides an array of all the keys in an object", function() {
      var sourceObject = [
        { "a": 1, "b": 2 }
      ].shift();

      expect(Object.keys(sourceObject)).toEqual(["a", "b"]);
    }); //end it


  }); //end describe

}); //end describe