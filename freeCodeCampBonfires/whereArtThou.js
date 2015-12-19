
function where(collection, source) {
  var newArrayOfObjects = [];
  var sourceObject = Array.isArray(source) ? source.shift() : source;
  var arrayOfSourceKeys = Object.keys(sourceObject);

  collection.forEach(function(object) {
    var addObjectCounter = 0;

    arrayOfSourceKeys.forEach(function (sourceKey) {
      if (sourceKey in object) {
        if (sourceObject[sourceKey] === object[sourceKey]) {
          addObjectCounter += 1;
        }
      }
    });

    if (addObjectCounter === arrayOfSourceKeys.length) {
      newArrayOfObjects.push(object);
    }
  });

  return newArrayOfObjects;
}