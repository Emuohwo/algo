// Solution 1
const rotateArr = (nums: number[] = [], k: number) => [...nums.slice(-k), ...nums.slice(0, -k)];
console.log(rotateArr([1, 2, 3], 2));



// Solution 2
const isMonotone = (arr:number[] = []) => {
  return arr.every((e, i, a) => {
    if (i) {
      return e > a[i - 1]
    }
    else {
      return false
    }
  })
}
console.log(isMonotone([1,2,3,4]))