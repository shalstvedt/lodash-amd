define(['./bindCallback'], function(bindCallback) {

  /**
   * Creates a function for `_.forOwn` or `_.forOwnRight`.
   *
   * @private
   * @param {Function} objectFunc The function to iterate over an object.
   * @returns {Function} Returns the new each function.
   */
  function createForOwn(objectFunc) {
    return function(object, iteratee, thisArg) {
      if (typeof iteratee != 'function' || typeof thisArg != 'undefined') {
        iteratee = bindCallback(iteratee, thisArg, 3);
      }
      return objectFunc(object, iteratee);
    };
  }

  return createForOwn;
});
