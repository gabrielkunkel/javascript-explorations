'use strict';

/* Exercise 7: Implement Filter */

Array.prototype.filter = function(predicateFunction) {
  var results = [];
  this.forEach(function(itemInArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Apply the predicateFunction to each item in the array.
    // If the result is truthy, add the item to the results array.
    // Note: remember you can add items to the array using the array's
    // push() method.
    // ------------ INSERT CODE HERE! ----------------------------

    if (predicateFunction(itemInArray)) {
      results.push(itemInArray);
    }

  });

  return results;
};

// JSON.stringify([1,2,3].filter(function(x) { return x > 2})) === "[3]"


/* Exercise 10: Implement concatAll() */

Array.prototype.concatAll = function() {
  var results = [];
  this.forEach(function(subArray) {
    // ------------ INSERT CODE HERE! ----------------------------
    // Add all the items in each subArray to the results array.
    // ------------ INSERT CODE HERE! ----------------------------

    subArray.forEach(function(element) {
      results.push(element);
    });



  });

  return results;
};

// JSON.stringify([ [1,2,3], [4,5,6], [7,8,9] ].concatAll()) === "[1,2,3,4,5,6,7,8,9]"
// [1,2,3].concatAll(); // throws an error because this is a one-dimensional array





/* Exercise 12: Retrieve id, title, and a 150x200 box art url for every video */

function exercise12() {
  var movieLists = [
    {
      name: "Instant Queue",
      videos : [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxarts": [
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    },
    {
      name: "New Releases",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxarts": [
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxarts": [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    }
  ];

  // return statement
  return movieLists = movieLists.map(function(el) {
    return el.videos.map(function(videosElement) {
      return {
        "id": videosElement.id,
        "title": videosElement.title,
        "boxart": videosElement.boxarts.filter(function(boxEl) {
          return boxEl.width === 150;
        }).map(function(boxEl) {
          return boxEl.url;
        }).pop()
      }; // end of object returned
    }); // initial map
  }).concatAll();

} // end of encompassing function

/* Exercise 13: Implement concatMap() */

Array.prototype.concatMap = function(projectionFunctionThatReturnsArray) {
  return this.
  map(function(item) {
    // ------------   INSERT CODE HERE!  ----------------------------
    // Apply the projection function to each item. The projection
    // function will return an new child array. This will create a
    // two-dimensional array.
    // ------------   INSERT CODE HERE!  ----------------------------
    return projectionFunctionThatReturnsArray(item);
  }).
  // apply the concatAll function to flatten the two-dimensional array
  concatAll();
};


/* Exercise 14: Use concatMap() to retrieve id, title, and 150x200 box art url for every video */

function exercise14() {
  var movieLists = [
    {
      name: "Instant Queue",
      videos : [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxarts": [
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys150.jpg" }

          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    },
    {
      name: "New Releases",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxarts": [
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber150.jpg" },
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "bookmark": []
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxarts": [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    }
  ];

  return movieLists.concatMap(function (movieListsElement) {
    return movieListsElement.videos.map(function (videoElement) {
      return {
        "id": videoElement.id,
        "title": videoElement.title,
        "boxart": videoElement.boxarts.filter(function (boxartsElement) {
          return boxartsElement.width === 150;
        }).map(function (boxartsElement) {
          return boxartsElement.url;
        }).pop()
      }
    });
  });
}

/* Exercise 15: Use forEach to find the largest box art */

function exercise15() {
  var boxarts = [
      { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
      { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
      { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
      { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
    ],
    currentSize,
    maxSize = -1,
    largestBoxart;

  /**
   * reduce will be a "sorting" function that only sorts out one value
   */
  boxarts.forEach(function(boxart) {
    currentSize = boxart.width * boxart.height;

    // if statment with assignment
    if (currentSize > maxSize) {
      // the actual object assigned
      largestBoxart = boxart;

      // the greatest size assigned for the rest of the sorting
      maxSize = currentSize;
    }
  });

  return largestBoxart;
}

/* Exercise 16: Implement reduce() */


/**
 * @description I added this in after their example failed the test, using Js's
 * reduce. Their reduc returns in an array.
 *
 * @param {Function} combiner - callback function with (previousReturnedValue, currentValue)
 * @param {*} initialValue - place to start from
 * @returns {Array} - accumulated value
 */
Array.prototype.reduce = function(combiner, initialValue) {
  var counter,
    accumulatedValue;

  // If the array is empty, do nothing
  if (this.length === 0) {
    return this;
  }
  else {
    // If the user didn't pass an initial value, use the first item.
    if (arguments.length === 1) {
      counter = 1;
      accumulatedValue = this[0];
    }
    else if (arguments.length >= 2) {
      counter = 0;
      accumulatedValue = initialValue;
    }
    else {
      throw "Invalid arguments.";
    }

    // Loop through the array, feeding the current value and the result of
    // the previous computation back into the combiner function until
    // we've exhausted the entire array and are left with only one value.
    while(counter < this.length) {
      accumulatedValue = combiner(accumulatedValue, this[counter]);
      counter += 1;
    }

    return [accumulatedValue]; // <-- returned accumulated value inside an array
  }
};



/* Exercise 17: Retrieve the largest rating. */

function exercise17() {
  var ratings = [2,3,1,4,5];

  // You should return an array containing only the largest rating. Remember that reduce always
  // returns an array with one item.
  return ratings.reduce(function (previousValueReturned, currentValue) {
    return previousValueReturned < currentValue ? currentValue : previousValueReturned;
  });   // Complete this expression
}

/* Exercise 18: Retrieve url of the largest boxart */

function exercise18() {
  var returnArray = [];
  var boxarts = [
    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
  ];

  // You should return an array containing only the URL of the largest box art. Remember that reduce always
  // returns an array with one item.
  returnArray.push(boxarts.reduce(function (previousValueReturned, currentValue) {
    if (previousValueReturned.width * previousValueReturned.height < currentValue.width * currentValue.height) {
      return currentValue;
    } else {
      return previousValueReturned;
    }
  }));

  return returnArray.map(function (element) {
    return element.url;
  });
}

/**
 * Despite how this solution passes the test, the tutorial site says that "null" is
 * returned. The following is their solution. The difference is probably caused by
 * the difference between JavaScript's built-in Array.prototype.reduce and RxJs's
 * reduce function. JavaScript returns a single value, where as RxJs returns a
 * single value *in an array*. In fact, RxJs's reduce broke a couple tests. But
 * their solution to Exercise 18 worked just fine.
 */

function exercise18a() {
  var boxarts = [
    { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
    { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture150.jpg" },
    { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
    { width: 425, height:150, url:"http://cdn-0.nflximg.com/images/2891/Fracture425.jpg" }
  ];

  // You should return an array containing only the largest box art. Remember that reduce always
  // returns an array with one item.
  return boxarts.
  reduce(function(acc,curr) {
    if (acc.width * acc.height > curr.width * curr.height) {
      return acc;
    }
    else {
      return curr;
    }
  }).
  map(function(boxart) {
    return boxart.url;
  });
}


/* Exercise 19: Reducing with an initial value */

function exercise19() {
  var videos = [
    {
      "id": 65432445,
      "title": "The Chamber"
    },
    {
      "id": 675465,
      "title": "Fracture"
    },
    {
      "id": 70111470,
      "title": "Die Hard"
    },
    {
      "id": 654356453,
      "title": "Bad Boys"
    }
  ];

  return videos.reduce(function(accumulatedMap, video) {

      // Object.create() makes a fast copy of the accumulatedMap by
      // creating a new object and setting the accumulatedMap to be the
      // new object's prototype.

      // Initially the new object is empty and has no members of its own,
      // except a pointer to the object on which it was based. If an
      // attempt to find a member on the new object fails, the new object
      // silently attempts to find the member on its prototype. This
      // process continues recursively, with each object checking its
      // prototype until the member is found or we reach the first object
      // we created.

      // If we set a member value on the new object, it is stored
      // directly on that object, leaving the prototype unchanged.
      // Object.create() is perfect for functional programming because it
      // makes creating a new object with a different member value almost
      // as cheap as changing the member on the original object!
    var copyOfAccumulatedMap = Object.create(accumulatedMap);

      // ----- INSERT CODE TO ADD THE VIDEO TITLE TO THE ----
      // ----- NEW MAP USING THE VIDEO ID AS THE KEY	 ----

    return copyOfAccumulatedMap.map(function (element) {
      var objKey = element.id;
      return { objKey: element.title };
    });
  },
    // Use an empty map as the initial value instead of the first item in
    // the list.
    {});
}
