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

  return videos.reduce(function(acc, video) {

      // Object.create() makes a fast copy of the acc by
      // creating a new object and setting the acc to be the
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

    var copyOfAcc = Object.create(acc);

    copyOfAcc[video.id] = video.title;

      // ----- INSERT CODE TO ADD THE VIDEO TITLE TO THE ----
      // ----- NEW MAP USING THE VIDEO ID AS THE KEY	 ----

    return copyOfAcc;
  },
    // Use an empty map as the initial value instead of the first item in
    // the list.
    {});

}


/* Exercise 20: Retrieve the id, title, and smallest box art url for every video. */

/**
 * This is a variation of the problem we solved earlier, where we retrieved the
 * url of the boxart with a width of 150px. This time we'll use reduce() instead
 * of filter() to retrieve the smallest box art in the boxarts array.
 */

function exercise20() {
  var movieLists = [
    {
      name: "New Releases",
      videos: [
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
            { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    },
    {
      name: "Thrillers",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxarts": [
            { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
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
            { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "bookmark": [{ id:432534, time:65876586 }]
        }
      ]
    }
  ];

  return movieLists.concatMap(function(movieList) {
    return movieList.videos.map(function (video) {
      return {
        "id": video.id,
        "title": video.title,
        "boxart": video.boxarts.reduce(function (acc, curr) {
          var accSize = acc.width * acc.height;
          var currSize = curr.width * curr.height;

          if (accSize > currSize) {
            return curr;
          }
          else if (accSize < currSize) {
            return acc;
          }
        }).map(function (video) {
          return video.url;
        }).pop()
      }; //end returned object

    })
  });
} // end Exercise 20

// END OF REDUCE

/* Exercise 21: Combine videos and bookmarks by index  */

/**
 * The first time I did this problem, I misread it/misunderstood what I was
 * supposed to achieve. What they were asking was simpler. I have labeled that
 * "Exercise 21A." It follows this solution, which *looks more like the teeth
 * of a zipper coming together.*
 * @returns {Array}
 */

function exercise21() {
  var videos = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0
    }
    ],
    bookmarks = [
      {id: 470, time: 23432},
      {id: 453, time: 234324},
      {id: 445, time: 987834}
    ],
    counter,
    videoIdAndBookmarkIdPairs = [];

  for(counter = 0; counter < Math.min(videos.length, bookmarks.length); counter += 1) {

    videoIdAndBookmarkIdPairs.push(videos[counter]);
    videoIdAndBookmarkIdPairs.push(bookmarks[counter]);

    if (videos.length - 1 === bookmarks.length && counter === Math.min(videos.length, bookmarks.length) - 1) {
      videoIdAndBookmarkIdPairs.push(videos[counter+1]);
    }

    // Insert code here to create a {videoId, bookmarkId} pair and add it to the
    // videoIdAndBookmarkIdPairs array.
  }

  return videoIdAndBookmarkIdPairs;
}

/**
 * Use a for loop to traverse the videos and bookmarks array at the
 * same time. For each video and bookmark pair, create a {videoId,
 * bookmarkId} pair and add it to the videoIdAndBookmarkIdPairs array.
 * @returns {Array}
 */

function exercise21a() {
  var videos = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0
    }
    ],
    bookmarks = [
      {id: 470, time: 23432},
      {id: 453, time: 234324},
      {id: 445, time: 987834}
    ],
    counter,
    videoIdAndBookmarkIdPairs = [];

  for(counter = 0; counter < Math.min(videos.length, bookmarks.length); counter += 1) {
    videoIdAndBookmarkIdPairs.push( { "videoId": videos[counter].id, "bookmarkId": bookmarks[counter].id});

    // Insert code here to create a {videoId, bookmarkId} pair and add it to the
    // videoIdAndBookmarkIdPairs array.
  }

  return videoIdAndBookmarkIdPairs;
}

/* Exercise 22: Implement zip */

// JSON.stringify(Array.zip([1,2,3],[4,5,6], function(left, right) { return left + right })) === '[5,7,9]'

Array.zip = function(left, right, combinerFunction) {
  var counter,
    results = [];

  for(counter = 0; counter < Math.min(left.length, right.length); counter += 1) {

    results.push(combinerFunction(left[counter], right[counter]));
    // Add code here to apply the combinerFunction to the left and right-hand items in the respective arrays
  }

  return results;
};

/* Exercise 23: Combine videos and bookmarks by index */

/**
 * Let's repeat exercise 21, but this time lets use your new zip() function.
 * For each video and bookmark pair, create a {videoId, bookmarkId} pair.
 */

function exercise23() {
  var videos = [
    {
      "id": 70111470,
      "title": "Die Hard",
      "boxart": "http://cdn-0.nflximg.com/images/2891/DieHard.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0
    },
    {
      "id": 654356453,
      "title": "Bad Boys",
      "boxart": "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0
    },
    {
      "id": 65432445,
      "title": "The Chamber",
      "boxart": "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 4.0
    },
    {
      "id": 675465,
      "title": "Fracture",
      "boxart": "http://cdn-0.nflximg.com/images/2891/Fracture.jpg",
      "uri": "http://api.netflix.com/catalog/titles/movies/70111470",
      "rating": 5.0
    }
    ],
    bookmarks = [
      {id: 470, time: 23432},
      {id: 453, time: 234324},
      {id: 445, time: 987834}
    ];

  return Array.zip(videos, bookmarks, function (left, right) {
    return { "videoId": left.id, "bookmarkId": right.id }
  }); //... finish this expression
}

/* Exercise 24: Retrieve each video's id, title, middle interesting
moment time, and smallest box art url. */

/**
 * This is a variation of the problem we solved earlier. This time each
 * video has an interesting moments collection, each representing a time
 * during which a screenshot is interesting or representative of the title
 * as a whole. Notice that both the boxarts and interestingMoments arrays
 * are located at the same depth in the tree. Retrieve the time of the middle
 * interesting moment and the smallest box art url simultaneously with zip().
 * Return an {id, title, time, url} object for each video.
 */

function exercise24() {
  var movieLists = [
    {
      name: "New Releases",
      videos: [
        {
          "id": 70111470,
          "title": "Die Hard",
          "boxarts": [
            { width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "interestingMoments": [
            { type: "End", time:213432 },
            { type: "Start", time: 64534 },
            { type: "Middle", time: 323133}
          ]
        },
        {
          "id": 654356453,
          "title": "Bad Boys",
          "boxarts": [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
            { width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }

          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "interestingMoments": [
            { type: "End", time:54654754 },
            { type: "Start", time: 43524243 },
            { type: "Middle", time: 6575665}
          ]
        }
      ]
    },
    {
      name: "Instant Queue",
      videos: [
        {
          "id": 65432445,
          "title": "The Chamber",
          "boxarts": [
            { width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 4.0,
          "interestingMoments": [
            { type: "End", time:132423 },
            { type: "Start", time: 54637425 },
            { type: "Middle", time: 3452343}
          ]
        },
        {
          "id": 675465,
          "title": "Fracture",
          "boxarts": [
            { width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
            { width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
            { width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" }
          ],
          "url": "http://api.netflix.com/catalog/titles/movies/70111470",
          "rating": 5.0,
          "interestingMoments": [
            { type: "End", time:45632456 },
            { type: "Start", time: 234534 },
            { type: "Middle", time: 3453434}
          ]
        }
      ]
    }
  ];

  //------------ COMPLETE THIS EXPRESSION --------------
  return movieLists.concatMap(function(movieList) {
    return  movieList.videos.map(function (video) {
      var interestingMomentsFiltered = video.interestingMoments.filter(function (element) {
        return element.type === 'Middle';
      });

      var boxartReduced = video.boxarts.reduce(function (acc, curr) {
        return acc.height * acc.width > curr.height * curr.width ? curr :
          acc.height * acc.width < curr.height * curr.width ? acc :
            acc;
      });

      return Array.zip(boxartReduced, interestingMomentsFiltered, function (left, right) {
        return {
          "id": video.id,
          "title": video.title,
          "time":  right.time,
          "url": left.url
        };
      }).pop();
    });
  });


  /**
   * THEIR SOLUTION
   * --------------
   * Our solutions are basically the same, except they used concatMap where I used
   * map() and then pop() to eliminate the arrays around the objects. Their way is
   * better. My style was better when I abstracted the functions to
   * 'interestingMomentsFiltered' and 'boxartReduced.' ...I think.
   *
   *
   * 	return movieLists.concatMap(function(movieList) {
   * 	  return movieList.videos.concatMap(function(video) {
   * 	    return Array.zip(video.boxarts.reduce(function(acc,curr) {
   * 	    if (acc.width * acc.height < curr.width * curr.height) {
   * 	      return acc;
   * 	    }
   * 	    else {
   * 	      return curr;
   * 	      }
   * 	   }),
   * 	   video.interestingMoments.filter(function(interestingMoment) {
   * 	   return interestingMoment.type === "Middle";
   * 	   }),
   * 	   function(boxart, interestingMoment) {
   * 	   return {id: video.id, title: video.title, time: interestingMoment.time, url: boxart.url};
   * 	   });
   * 	   });
   * 	   });
   */

} // end of exercise 24

// END OF ZIP


/* Exercise 25: Converting from Arrays to Trees */

/**
 * We have 2 arrays each containing lists, and videos respectively. Each video
 * has a listId field indicating its parent list. We want to build an array of
 * list objects, each with a name and a videos array.
 *
 * @returns {*}
 */

function exercise25() {
  var lists = [
    {
      "id": 5434364, // drop
      "name": "New Releases"
    },
    {
      "id": 65456475, // drop
      "name": "Thrillers"
    }
    ],
    videos = [
      {
        "listId": 5434364, // drop, but use to add to the correct object
        "id": 65432445,
        "title": "The Chamber"
      },
      {
        "listId": 5434364, // drop, but use to add to the correct object
        "id": 675465,
        "title": "Fracture"
      },
      {
        "listId": 65456475, // drop, but use to add to the correct object
        "id": 70111470,
        "title": "Die Hard"
      },
      {
        "listId": 65456475, // drop, but use to add to the correct object
        "id": 654356453,
        "title": "Bad Boys"
      }
    ];

  return lists.map(function (list) {
    return {
      "name": list.name,
      "videos": videos.filter(function (video) {
        return video.listId === list.id;
      }).map(function (video) {
        return {
          "id": video.id,
          "title": video.title
        }
      })
    }
  });
  // complete this expression
}

/* Exercise 26: Converting from Arrays to Deeper Trees */

/*
Let's try creating a deeper tree structure. This time we have 4 separate
arrays each containing lists, videos, boxarts, and bookmarks respectively.
Each object has a parent id, indicating its parent. We want to build an array
of list objects, each with a name and a videos array. The videos array will
contain the video's id, title, bookmark time, and smallest boxart url. In
other words we want to build the following structure:
*/

function exercise26() {
  var lists = [
    {
      "id": 5434364,
      "name": "New Releases"
    },
    {
      "id": 65456475,
      name: "Thrillers"
    }
    ],
    videos = [
      {
        "listId": 5434364,
        "id": 65432445,
        "title": "The Chamber"
      },
      {
        "listId": 5434364,
        "id": 675465,
        "title": "Fracture"
      },
      {
        "listId": 65456475,
        "id": 70111470,
        "title": "Die Hard"
      },
      {
        "listId": 65456475,
        "id": 654356453,
        "title": "Bad Boys"
      }
    ],
    boxarts = [
      { videoId: 65432445, width: 130, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber130.jpg" },
      { videoId: 65432445, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/TheChamber200.jpg" },
      { videoId: 675465, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture200.jpg" },
      { videoId: 675465, width: 120, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture120.jpg" },
      { videoId: 675465, width: 300, height:200, url:"http://cdn-0.nflximg.com/images/2891/Fracture300.jpg" },
      { videoId: 70111470, width: 150, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard150.jpg" },
      { videoId: 70111470, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/DieHard200.jpg" },
      { videoId: 654356453, width: 200, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys200.jpg" },
      { videoId: 654356453, width: 140, height:200, url:"http://cdn-0.nflximg.com/images/2891/BadBoys140.jpg" }
    ],
    bookmarks = [
      { videoId: 65432445, time: 32432 },
      { videoId: 675465, time: 3534543 },
      { videoId: 70111470, time: 645243 },
      { videoId: 654356453, time: 984934 }
    ];

  return lists.map(function (list) {
    return {
      "name": list.name,
      "videos": videos.filter(function (video) {
        return list.id === video.listId;
      }).map(function (video) {
        return {
          "id": video.id,
          "title": video.title,
          "time": bookmarks.filter(function (bookmark) {
            return video.id === bookmark.videoId;
          }).map(function (bookmark) {
            return bookmark.time;
          }).pop(),
          "boxart": boxarts.filter(function (boxart) {
            return boxart.videoId === video.id;
          }).reduce(function (acc, curr) {
            return acc.width * acc.height < curr.width * curr.height ? acc : curr;
          }).map(function (boxart) {
            return boxart.url;
          }).pop()
        }
      })
    }; // end of mapped lists object

  }); // complete this expression
}

/* The tutorial goes from here to talk about Observables...
no *real* exercises */

