const arr = []
const testArr = Array(100).fill(0)
const sortedArray = []

for (let i = 0; i < 11; i += 1) {
  arr.push(Math.floor(Math.random() * 100))
}

arr.forEach((number) => (testArr[number] += 1))
testArr.forEach((number, index) => {
  if (number > 0) {
    sortedArray.push(index)
  }
})

console.log(sortedArray)

/**
 *  TIME COMPLEXITY
 *    O(1)
 *
 *  EXECUTION TIME
 *    10^10 times O(1)
 *    let's say normal processor can process 10^8 executions pre second
 *    10^10/10^8 = 100s
 */
