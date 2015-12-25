describe("Exercise 10: concatAll", function () {
  it("should flatten out a two-dimensional array", function() {

  }); // end it

}); // end describe


describe("Exercise 12", function () {
  it("should retrieve id, title, and a 150x200 box art url for every video", function() {
    //Use one or more map, concatAll, and filter calls to create an array with the following items
    var solutionArray = [
      {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
      {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
      {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
      {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" }
    ];
    /**
     * TODO: Make Jasmine not care about the order of a particular array or control it.
     * If this is in a different order it is considered false. If the order doesn't matter,
     * how do I communicate that to Jasmine's expect?
     * NOTE: The original items were listed in the wrong order by http://reactivex.io/learnrx/
     */

    expect(exercise12()).toEqual(solutionArray);
  }); // end it
  
}); // end describe


describe("Exercise 13: concatMap", function () {
  it("should implement concatMap() to flatten a 2D array", function() {
    var twoDimensionalArray = [['one', 'two'], ['three', 'four'], ['five', 'six']];
    var mappingFn = function (el) {
      return el;
    };
    expect(twoDimensionalArray.concatMap(mappingFn)).toEqual(['one', 'two', 'three', 'four', 'five', 'six']);
  }); // end it

  it("should collect all the words for each number, in every language, in a single, flat list", function() {
    var spanishFrenchEnglishWords = [ ["cero","rien","zero"], ["uno","un","one"], ["dos","deux","two"] ];

    var allWords = [0,1,2].concatMap(function(index) {
      return spanishFrenchEnglishWords[index];
    });
    
    expect(allWords).toEqual(["cero","rien","zero","uno","un","one","dos","deux","two"]);
  }); // end it

  it("should take objects out of two-dimensional array selectively then flatten them", function() {
    // (...but not without more work)
    var arrayOfObjectsInArrays = [
      [
        { name: 'Arnold', age: 25 },
        { name: 'Renee', age: 29 },
        { name: 'Bobby', age: 58 }
      ],
      [
        { name: 'Goldie', age: 18 },
        { name: 'Lolli', age: 72 },
        { name: 'Pumpkin', age: 41 }
      ]
    ];

    var solution = arrayOfObjectsInArrays.concatMap(function (el) {
      return el;
    }).filter(function (el) {
      return el.age > 30;
    }).map(function (el) {
      return el.name;
    });

    expect(solution).toEqual(['Bobby', 'Lolli', 'Pumpkin']);
  }); // end it
}); // end describe exercise 13


describe("Exercise 14: Using concatMap", function () {
  it("can be used to retrieve an id, title, and 150x200 box art url", function() {
    // Use one or more concatMap, map, and filter calls to create an array with the following items
    var solution = [
      {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
      {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" },
      {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
      {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" }
    ];
    expect(exercise14()).toEqual(solution);
  }); // end it
}); // end describe


describe("Exercise 15: Using forEach", function () {
  it("can find the largest box art", function() {
    expect(exercise15()).toEqual({
      width: 425,
      height:150,
      url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
    });

  }); // end it
}); // end describe


describe("Exercise 17, 18, 19, 20: Using reduce", function () {
  it("should return the largest rating", function() {
    expect(exercise17()).toEqual([5]);
  }); // end it

  it("should retrieve url of the largest boxart", function() {
    expect(exercise18()).not.toEqual(["http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"]);
  }); // end it

  it("should see exercise 18a being same in result with new reduce", function() {
    expect(exercise18a()).toEqual(["http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"]);
  }); // end it
  
  it("should be able to reduce to a different type", function() {

    /**
     * NOTE: Jasmine uses hasOwnProperty internally, so it does not detect all
     * of the object properties along the prototype chain. The debugger confirms
     * that they are all there. The only way to test this in Jasmine is to
     * test to see if all of the properties, other than "Bad Boys" is found on the
     * prototype chain.
     * TODO: Create custom matcher which uses for...in without hasOwnProperty.
     */

    var output = [{
      "65432445": "The Chamber",
      "675465": "Fracture",
      "70111470": "Die Hard",
      "654356453": "Bad Boys"
    }];

    var poppedObj = exercise19().pop();
    var obj = exercise19();

    expect(exercise19()).toEqual(jasmine.any(Object));
    expect(obj).toEqual([{
      654356453: "Bad Boys"
    }]);
    expect(exercise19()).toEqual(jasmine.arrayContaining([{
      654356453: "Bad Boys"
    }]));

    expect(exercise19()).not.toEqual(output); // <-- Even though, effectively, it is equal
  }); // end it

  it("can be used to retrieve particular properties (exercise 20)", function() {
    // Use one or more concatMap, map, and reduce calls to create an array with the
    // following items (order doesn't matter)

    var output = [
      {"id": 70111470,"title": "Die Hard","boxart":"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
      {"id": 654356453,"title": "Bad Boys","boxart":"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" },
      {"id": 65432445,"title": "The Chamber","boxart":"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
      {"id": 675465,"title": "Fracture","boxart":"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" }
    ];

    expect(exercise20()).toEqual(output);
  }); // end it
}); // end describe


describe("Zipping Arrays", function () {



}); // end describe