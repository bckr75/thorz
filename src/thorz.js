(function() {
    'use strict';

    // define global object
    var thorz = {
        arrays: Array.prototype
    }

    // @_nonUnique - return new array with non-unique values
    // use: []._nonUnique();
    thorz.arrays._nonUnique = function() {
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
    thorz.arrays._include = function(array) {
        return this.filter(function(index) {
            return array.indexOf(index) >= 0;
        });
    };

    // @_diff - return new array with different values
    // use: [first_array]._diff([second_array])
    thorz.arrays._diff = function(array) {
        return this.filter(function(index) {
            return array.indexOf(index) < 0;
        });
    };

    // @_equals - return true, if arrays are equals, else return false
    // second argument - array sorting before comparison
    // use: [first_array]._equals([second_array])
    thorz.arrays._equals = function(array, sort) {
        if(typeof(array) !== 'object')
            return false;

        if (this.length !== array.length)
            return false;
        
        if(sort) {
            this.sort();
            array.sort();
        }
        
        return JSON.stringify(this) === JSON.stringify(array);
    }

    // Hide method from for-in loops
    Object.defineProperty(thorz.arrays, "_equals", { enumerable: false });

    // return first element in array or false if array is empty
    // use: [array]._first()
    thorz.arrays._first = function() {
        return this[0] || false;
    };

    // return last element in array or false if array is empty
    // use: [array].last()
    thorz.arrays._last = function() {
        return this[this.length - 1] || false;
    }
})();
