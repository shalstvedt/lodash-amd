define(['./baseMatches', './baseMatchesProperty', './baseProperty', './bindCallback', '../utility/identity'], function(baseMatches, baseMatchesProperty, baseProperty, bindCallback, identity) {

  /**
   * The base implementation of `_.callback` which supports specifying the
   * number of arguments to provide to `func`.
   *
   * @private
   * @param {*} [func=_.identity] The value to convert to a callback.
   * @param {*} [thisArg] The `this` binding of `func`.
   * @param {number} [argCount] The number of arguments to provide to `func`.
   * @returns {Function} Returns the callback.
   */
  function baseCallback(func, thisArg, argCount) {
    var type = typeof func;
    if (type == 'function') {
      return typeof thisArg == 'undefined'
        ? func
        : bindCallback(func, thisArg, argCount);
    }
    if (func == null) {
      return identity;
    }
    if (type == 'object') {
      return baseMatches(func);
    }
    return typeof thisArg == 'undefined'
      ? baseProperty(func + '')
      : baseMatchesProperty(func + '', thisArg);
  }

  return baseCallback;
});
