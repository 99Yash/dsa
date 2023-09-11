//* Sliding Window: Keeping track of a subset of data in an array/string

//? Given an array of integers and a number, write a function called maxSubarraySum, which finds the maximum sum of a subarray with the length of the number passed to the function.

//? Note that a subarray must consist of consecutive elements from the original array. In the first example below, [100, 200, 300] is a subarray of the original array, but [100, 300] is not.

//? Examples:
//? maxSubarraySum([100, 200, 300, 400], 2) // 700
//? maxSubarraySum([1, 4, 2, 10, 23, 3, 1, 0, 20], 4) // 39
//? maxSubarraySum([-3, 4, 0, -2, 6, -1], 2) // 5
//? maxSubarraySum([],1)//null

//? Constraints:
//? Time Complexity - O(n)
//? Space Complexity - O(1)

// function maxSubarraySum(arr: Array<number>, num: number) {
//   if (num > arr.length) return null;
//   let max = -Infinity;
//   for (let i = 0; i < arr.length - num + 1; i++) {
//     let temp = 0;
//     for (let j = 0; j < num; j++) {
//       temp += arr[i + j];
//     }
//     if (temp > max) {
//       max = temp;
//     }
//   }
//   return max;
// }

function maxSubarraySum(arr: Array<number>, num: number) {
  if (arr.length < num) return null;
  let initialSum = 0;
  let tempSum = 0;

  for (let i = 0; i < num; i++) {
    initialSum += arr[i];
  }
  tempSum = initialSum;
  for (let i = num; i < arr.length; i++) {
    tempSum = tempSum - arr[i - num] + arr[i];
    return tempSum;
  }
}

console.log(maxSubarraySum([100, 200, 300, 400], 2));
