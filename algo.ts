// Solution 1
const rotateArr = (nums: number[] = [], k: number) => [...nums.slice(-k), ...nums.slice(0, -k)];
console.log(rotateArr([1, 2, 3], 2));



// Solution 2

var isMonotonic = (arr:number[] = []) => {
  return (
    arr.every((v, i) => i === 0 || v <= arr[i - 1]) ||
    arr.every((v, i) => i === 0 || v >= arr[i - 1])
  );
};


console.log(isMonotonic([1,2,3,4]));
console.log(isMonotonic([10,3,4,6]));
console.log(isMonotonic([9]));