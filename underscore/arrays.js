/**
 * @license
 * Lo-Dash 1.3.1 <http://lodash.com/>
 * Copyright 2012-2013 The Dojo Foundation <http://dojofoundation.org/>
 * Based on Underscore.js 1.5.2 <http://underscorejs.org/LICENSE>
 * Copyright 2009-2013 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 * Available under MIT license <http://lodash.com/license>
 */
define(['./arrays/compact', './arrays/difference', './arrays/first', './arrays/flatten', './arrays/indexOf', './arrays/initial', './arrays/intersection', './arrays/last', './arrays/lastIndexOf', './arrays/range', './arrays/rest', './arrays/sortedIndex', './arrays/union', './arrays/uniq', './arrays/without', './arrays/zip', './arrays/zipObject'], function(compact, difference, first, flatten, indexOf, initial, intersection, last, lastIndexOf, range, rest, sortedIndex, union, uniq, without, zip, zipObject) {

  return {
    'compact': compact,
    'difference': difference,
    'first': first,
    'flatten': flatten,
    'indexOf': indexOf,
    'initial': initial,
    'intersection': intersection,
    'last': last,
    'lastIndexOf': lastIndexOf,
    'range': range,
    'rest': rest,
    'sortedIndex': sortedIndex,
    'union': union,
    'uniq': uniq,
    'without': without,
    'zip': zip,
    'zipObject': zipObject
  };
});
