// 二分法查找  binarySearch([1,3,5,7,9], 3)
function binarySearch(arr, num) {
  let low = 0
  let high = arr.length - 1
  while (low <= high) {
    let mid = Math.floor((low + high) / 2)
    if (num === arr[mid]) {
      return mid
    }
    if (num > arr[mid]) {
      low = mid + 1
    } else if (num < arr[mid]) {
      high = mid - 1
    }
  }
  return null
}