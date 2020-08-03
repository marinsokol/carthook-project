const getPower = ({ a, b }) => Math.pow(a, b)
const partition = (items, left, right) => {
  const pivot = items[Math.floor((right + left) / 2)]
  let i = left
  let j = right

  while (i <= j) {
    while (getPower(items[i]) < getPower(pivot)) {
      i += 1
    }
    while (getPower(items[j]) > getPower(pivot)) {
      j -= 1
    }
    if (i <= j) {
      const temp = items[leftIndex]
      items[leftIndex] = items[rightIndex]
      items[rightIndex] = temp
      i += 1
      j -= 1
    }
  }
  return i
}
const quickSort = (items, left, right) => {
  if (items.length > 1) {
    const index = partition(items, left, right)
    if (left < index - 1) {
      quickSort(items, left, index - 1)
    }
    if (index < right) {
      quickSort(items, index, right)
    }
  }
  return items
}

const arr = []
for (let i = 0; i < 10000; i += 1) {
  const a = Math.floor(Math.random() * (10000 - 100) + 100)
  const b = Math.floor(Math.random() * (10000 - 100) + 100)
  arr.push({
    a,
    b,
    pow: getPower({ a, b }),
  })
}
const sortedArray = quickSort(arr, 0, arr.length - 1)
console.log(sortedArray)

/**
 *  TIME COMPLEXITY
 *    O(nlog(n))
 *
 *  EXECUTION TIME
 *    n = 10000
 *    my processor can process 2*10^11 executions pre second
 *    10000*log(10000)/(2*10^11) = 4.6 * 10^(-7)sec
 */
