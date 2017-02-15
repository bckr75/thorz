(function() {
  'use strict';
  
  // define variable with prototypes
  var rraythorz = Array.prototype;

  // @_nonUnique - return array with non-unique values
  rraythorz._nonUnique = function() {
    
    var index, nextIndex, i,
        outputArray = [];

    if (this.length > 1) {
      for (i = this.length - 1; i >= 0; i--) {
        index = this.indexOf(this[i]);
        nextIndex = this.indexOf(this[i], i + 1);
        if ((index !== i || nextIndex > i) || (i === 0 && nextIndex !== -1)) {
          outputArray.unshift(this[i]);
        }
      }
    }
    return outputArray;
  };

  // @_include - return new array with include values
  // use: [first_array]._include([second_array])
  rraythorz._include = function (array) {
    return this.filter(function (index) {
      return array.indexOf(index) >= 0;
    });
  };

  // @_diff - return new array with different values
  // use: [first_array]._diff([second_array])
  rraythorz._diff = function (array) {
    return this.filter(function (index) {
      return array.indexOf(index) < 0;
    });
  };

  // @_equals - return true, if arrays are equals, else return false
  // use: [first_array]._equals([second_array])
  rraythorz._equals = function (array) {
    if (!array)
        return false;

    if (this.length != array.length)
        return false;

    for (var index = 0; index < this.length; index++) {
        if (this[index] instanceof Array && array[index] instanceof Array) {
            if (!this[index]._equals(array[index]))
                return false;       
        }           
        else if (this[index] != array[index]) { 
            return false;   
        }           
    }       
    return true;
  }
  // Hide method from for-in loops
  Object.defineProperty(rraythorz, "_equals", {enumerable: false});
})();