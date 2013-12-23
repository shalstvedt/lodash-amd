/**
 * Lo-Dash 2.4.1 (Custom Build) <http://lodash.com/>
 * Build: `lodash modularize underscore exports="amd" -o ./underscore/`
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['../internals/baseIsEqual', '../objects/isObject', '../objects/keys'], function(baseIsEqual, isObject, keys) {

  /**
   * Creates a "_.where" style function, which returns `true` for a given object
   * if it has the equivalent property values of the `props` object, else `false`.
   *
   * @static
   * @memberOf _
   * @category Utilities
   * @param {Object} props The object of property values to match.
   * @returns {Function} Returns the new function.
   * @example
   *
   * var characters = [
   *   { 'name': 'fred',   'age': 40 },
   *   { 'name': 'barney', 'age': 36 }
   * ];
   *
   * var matchAge = _.match({ 'age': 36 });
   *
   * _.filter(characters, matchAge);
   * // => [{ 'name': 'barney', 'age': 36 }]
   *
   * _.find(characters, matchAge);
   * // => { 'name': 'barney', 'age': 36 }
   */
  function match(source) {
    source || (source = {});

    var props = keys(source);
    return function(object) {
      var length = props.length,
          result = false;

      while (length--) {
        if (!(result = object[props[length]] === source[props[length]])) {
          break;
        }
      }
      return result;
    };
  }

  return match;
});