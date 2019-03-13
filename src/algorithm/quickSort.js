function quick_sort(arr) {
  if (arr.length <= 1) {
    return arr
  }
  let pivotIndex = Math.floor(arr.length / 2)
  let pivot = arr.splice(pivotIndex, 1)[0]

  let left = []
  let right = []
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < pivot) {
      left.push(arr[i])
    } else {
      right.push(arr[i])
    }
  }

  return quick_sort(left).concat([pivot], quick_sort(right))
}

let arr = [5, 6, 2, 1, 3, 8, 7, 1, 2, 3, 4, 7]
console.log(quick_sort(arr))
