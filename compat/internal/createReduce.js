define(['./baseCallback', './baseReduce', '../lang/isArray'], function(baseCallback, baseReduce, isArray) {

  /**
   * Creates a function for `_.reduce` or `_.reduceRight`.
   *
   * @private
   * @param {Function} arrayFunc The function to iterate over an array.
   * @param {Function} eachFunc The function to iterate over a collection.
   * @returns {Function} Returns the new each function.
   */
  function createReduce(arrayFunc, eachFunc) {
    return function(collection, iteratee, accumulator, thisArg) {
      var initFromArray = arguments.length < 3;
      return (typeof iteratee == 'function' && typeof thisArg == 'undefined' && isArray(collection))
        ? arrayFunc(collection, iteratee, accumulator, initFromArray)
        : baseReduce(collection, baseCallback(iteratee, thisArg, 4), accumulator, initFromArray, eachFunc);
    };
  }

  return createReduce;
});
