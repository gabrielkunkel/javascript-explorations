describe("Functional Reactive Programming Tutorial", function () {
  describe("Exercise 10: concatAll", function () {
    it("should flatten out a two-dimensional array", function () {

    }); // end it

  }); // end describe


  describe("Exercise 12", function () {
    it("should retrieve id, title, and a 150x200 box art url for every video", function () {
      //Use one or more map, concatAll, and filter calls to create an array with the following items
      var solutionArray = [
        {"id": 70111470, "title": "Die Hard", "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"},
        {"id": 654356453, "title": "Bad Boys", "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"},
        {"id": 65432445, "title": "The Chamber", "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"},
        {"id": 675465, "title": "Fracture", "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"}
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
    it("should implement concatMap() to flatten a 2D array", function () {
      var twoDimensionalArray = [['one', 'two'], ['three', 'four'], ['five', 'six']];
      var mappingFn = function (el) {
        return el;
      };
      expect(twoDimensionalArray.concatMap(mappingFn)).toEqual(['one', 'two', 'three', 'four', 'five', 'six']);
    }); // end it

    it("should collect all the words for each number, in every language, in a single, flat list", function () {
      var spanishFrenchEnglishWords = [["cero", "rien", "zero"], ["uno", "un", "one"], ["dos", "deux", "two"]];

      var allWords = [0, 1, 2].concatMap(function (index) {
        return spanishFrenchEnglishWords[index];
      });

      expect(allWords).toEqual(["cero", "rien", "zero", "uno", "un", "one", "dos", "deux", "two"]);
    }); // end it

    it("should take objects out of two-dimensional array selectively then flatten them", function () {
      // (...but not without more work)
      var arrayOfObjectsInArrays = [
        [
          {name: 'Arnold', age: 25},
          {name: 'Renee', age: 29},
          {name: 'Bobby', age: 58}
        ],
        [
          {name: 'Goldie', age: 18},
          {name: 'Lolli', age: 72},
          {name: 'Pumpkin', age: 41}
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
    it("can be used to retrieve an id, title, and 150x200 box art url", function () {
      // Use one or more concatMap, map, and filter calls to create an array with the following items
      var solution = [
        {"id": 70111470, "title": "Die Hard", "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"},
        {"id": 654356453, "title": "Bad Boys", "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg"},
        {"id": 65432445, "title": "The Chamber", "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg"},
        {"id": 675465, "title": "Fracture", "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture150.jpg"}
      ];
      expect(exercise14()).toEqual(solution);
    }); // end it
  }); // end describe


  describe("Exercise 15: Using forEach", function () {
    it("can find the largest box art", function () {
      expect(exercise15()).toEqual({
        width: 425,
        height: 150,
        url: "http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"
      });

    }); // end it
  }); // end describe


  describe("Exercise 17, 18, 19, 20: Using reduce", function () {
    it("should return the largest rating", function () {
      expect(exercise17()).toEqual([5]);
    }); // end it

    it("should retrieve url of the largest boxart", function () {
      expect(exercise18()).not.toEqual(["http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"]);
    }); // end it

    it("should see exercise 18a being same in result with new reduce", function () {
      expect(exercise18a()).toEqual(["http://cdn-0.nflximg.com/images/2891/Fracture425.jpg"]);
    }); // end it

    it("should be able to reduce to a different type", function () {

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

      expect(exercise19()).toEqual(output);
    }); // end it

    it("can be used to retrieve particular properties (exercise 20)", function () {
      // Use one or more concatMap, map, and reduce calls to create an array with the
      // following items (order doesn't matter)

      var output = [
        {"id": 70111470, "title": "Die Hard", "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"},
        {"id": 654356453, "title": "Bad Boys", "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"},
        {"id": 65432445, "title": "The Chamber", "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"},
        {"id": 675465, "title": "Fracture", "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"}
      ];

      expect(exercise20()).toEqual(output);
    }); // end it
  }); // end describe


  describe("Zipping Arrays", function () {

    /**
     * Array.zip is particularly good at retrieving values from two separate arrays
     * located at the same level of an object.
     */

    it("can 'zipper' arrays with a for-loop", function () {
      /* FAIL! This does not demonsrate an Array.zip */

      var output = [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0
        },
        {id: 470, time: 23432},
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0
        },
        {id: 453, time: 234324},
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0
        },
        {id: 445, time: 987834},
        {
          "id": 675465,
          "title": "Fracture",
          "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
          "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0
        }
      ];

      expect(exercise21()).toEqual(output);
    }); // end it

    it("can creat a {videoId, bookmarkId} pair and it to an array with for-loop", function () {
      var output = [
        {"videoId": 70111470, "bookmarkId": 470},
        {"videoId": 654356453, "bookmarkId": 453},
        {"videoId": 65432445, "bookmarkId": 445}
      ];

      expect(exercise21a()).toEqual(output);
    }); // end it

    it("can be implemented through Array.zip", function () {
      var output = Array.zip([1, 2, 3], [4, 5, 6], function (left, right) {
        return left + right;
      });

      expect(output).toEqual([5, 7, 9]);
    }); // end it

    it("can creat a {videoId, bookmarkId} pair and it to an array with Array.zip", function () {
      var output = [
        {"videoId": 70111470, "bookmarkId": 470},
        {"videoId": 654356453, "bookmarkId": 453},
        {"videoId": 65432445, "bookmarkId": 445}
      ];

      expect(exercise23()).toEqual(output);
    }); // end it

    it("can be useful in combining values from complex objects in arrays", function () {
      /**
       * retrieve {id, title, time, url}
       * where time is the middle one & url is from the smallest box art
       */

      var output = [
        {
          "id": 70111470, "title": "Die Hard", "time": 323133,
          "url": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
        },
        {
          "id": 654356453, "title": "Bad Boys", "time": 6575665,
          "url": "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
        },
        {
          "id": 65432445, "title": "The Chamber", "time": 3452343,
          "url": "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
        },
        {
          "id": 675465, "title": "Fracture", "time": 3453434,
          "url": "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
        }
      ];

      expect(exercise24()).toEqual(output);
      //expect(exercise24()[0]).toEqual({ "id": 70111470, "title": "Die Hard", "time": 323133,
      //"url": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" });
    }); // end it

  }); // end describe `zipping arrays`


  describe("Powerful Queries", function () {

    it("can convert from arrays to trees", function () {
      var output = [
        {
          "name": "New Releases",
          "videos": [
            {
              "id": 65432445,
              "title": "The Chamber"
            },
            {
              "id": 675465,
              "title": "Fracture"
            }
          ] // end of `videos`
        },
        {
          "name": "Thrillers",
          "videos": [
            {
              "id": 70111470,
              "title": "Die Hard"
            },
            {
              "id": 654356453,
              "title": "Bad Boys"
            }
          ]
        }
      ];

      expect(exercise25()).toEqual(output);

    }); // end it

    it("can convert from arrays to *deeper* trees", function () {
      var output = [
        {
          "name": "New Releases",
          "videos": [
            {
              "id": 65432445,
              "title": "The Chamber",
              "time": 32432,
              "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg"
            },
            {
              "id": 675465,
              "title": "Fracture",
              "time": 3534543,
              "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture120.jpg"
            }
          ]
        },
        {
          "name": "Thrillers",
          "videos": [
            {
              "id": 70111470,
              "title": "Die Hard",
              "time": 645243,
              "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard150.jpg"
            },
            {
              "id": 654356453,
              "title": "Bad Boys",
              "time": 984934,
              "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg"
            }
          ]
        }
      ];

      expect(exercise26()).toEqual(output);

    }); // end it


  }); // end describe

}); // end describe