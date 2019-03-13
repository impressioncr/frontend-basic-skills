
// * Returns true if the provided predicate function returns true for all elements in a collection, false otherwise.
export const all = (arr, fn = Boolean) => arr.every(fn)

// * Check if all elements in an array are equal.
export const allEqual = arr => arr.every(val => val === arr[0])

// * Returns true if the provided predicate function returns true for at least one element in a collection, false otherwise.
export const any = (arr, fn = Boolean) => arr.some(fn)

/**
 * @description Splits values into two groups. If an element in filter is truthy, the corresponding element in the collection belongs to the first group; otherwise, it belongs to the second group.
 * @param {*} arr 
 * @param {*} filter 
 * @example bifurcate(['beep', 'boop', 'foo', 'bar'], [true, true, false, true]); // [ ['beep', 'boop', 'bar'], ['foo'] ]
 */

export const bifurcate = (arr, filter) => arr.reduce((acc, val, i) => (acc[filter[i] ? 0 : 1].push(val), acc), [[], []])

// * Chunks an array into smaller arrays of a specified size.

export const chunk = (arr, size) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (v, i) =>
    arr.slice(i * size, i * size + size)
  )

// * Removes falsey values from an array.

export const compact = arr => arr.filter(Boolean)

// * Deep flattens an array.

export const deepFlatten = arr => [].concat(...arr.map(v => (Array.isArray(v) ? deepFlatten(v) : v)))

// * Returns the difference between two arrays.

export const difference = (a, b) => {
  const s = new Set(b);
  return a.filter(x => !s.has(x));
}

// * Returns the difference between two arrays, after applying the provided function to each array element of both.

export const differenceBy = (a, b, fn) => {
  const s = new Set(b.map(fn));
  return a.map(fn).filter(el => !s.has(el));
}

// * Returns a new array with n elements removed from the left.

export const drop = (arr, n = 1) => arr.slice(n)

// *Returns a new array with n elements removed from the right.

export const dropRight = (arr, n = 1) => arr.slice(0, -n)

// * Returns every nth element in an array.

export const everyNth = (arr, nth) => arr.filter((e, i) => i % nth === nth - 1)

// * Filters out the non-unique values in an array.

export const filterNonUnique = arr => arr.filter(i => arr.indexOf(i) === arr.lastIndexOf(i))

// * Filters out the non-unique values in an array, based on a provided comparator function.

/**
 * 
 * @param {*} arr 
 * @param {*} fn 
 * @example filterNonUniqueBy(
      [
        { id: 0, value: 'a' },
        { id: 1, value: 'b' },
        { id: 2, value: 'c' },
        { id: 1, value: 'd' },
        { id: 0, value: 'e' }
      ],
      (a, b) => a.id == b.id
    )
 */
export const filterNonUniqueBy = (arr, fn) =>
arr.filter((v, i) => arr.every((x, j) => (i === j) === fn(v, x, i, j)))

// * Returns the last element for which the provided function returns a truthy value.

export const findLast = (arr, fn) => arr.filter(fn).pop()

// * Returns the index of the last element for which the provided function returns a truthy value.

export const findLastIndex = (arr, fn) =>
  arr
    .map((val, i) => [i, val])
    .filter(([i, val]) => fn(val, i, arr))
    .pop()[0]

// * Flattens an array up to the specified depth.

export const flatten = (arr, depth = 1) =>
  arr.reduce((a, v) => a.concat(depth > 1 && Array.isArray(v) ? flatten(v, depth - 1) : v), [])

// * 