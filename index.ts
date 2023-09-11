// Write a function called minSubArrayLen which accepts two parameters - an array of positive integers and a positive integer.

// This function should return the minimal length of a contiguous subarray of which the sum is greater than or equal to the integer passed to the function. If there isn't one, return 0 instead.
// Examples:

// minSubArrayLen([2,3,1,2,4,3], 7) // 2 -> because [4,3] is the smallest subarray
// minSubArrayLen([2,1,6,5,4], 9) // 2 -> because [5,4] is the smallest subarray
// minSubArrayLen([3,1,7,11,2,9,8,21,62,33,19], 52) // 1 -> because [62] is greater than 52
// minSubArrayLen([1,4,16,22,5,7,8,9,10],39) // 3
// minSubArrayLen([1,4,16,22,5,7,8,9,10],55) // 5
// minSubArrayLen([4, 3, 3, 8, 1, 2, 3], 11) // 2
// minSubArrayLen([1,4,16,22,5,7,8,9,10],95) // 0

// Time Complexity - O(n)

// Space Complexity - O(1)

// function minSubArrayLen(arr: Array<number>, num: number) {}

// function reverse(str: string): string {
//   if (str.length === 0) return '';
//   let rev = str.at(str.length - 1) ?? '';
//   rev += reverse(str.slice(0, str.length - 1));
//   str = str.slice(0, -1);
//   return rev;
// }

// console.log(reverse('abcdefghijklmnopqurstuvwxyz'));

// function isPalindrome(str: string): boolean {
//   if (str.length === 0) return true;
//   if (str.length === 1) return true;

//   if (str[0] != str[str.length - 1]) {
//     return false;
//   }
//   str = str.slice(0, 1);
//   str = str.slice(0, -1);
//   return isPalindrome(str);
// }

// console.log(isPalindrome('aaa'));

// type Callback = (arg: number) => boolean;

// function someRecursive(arr: Array<number>, cb: Callback): boolean {
//   if (arr.length === 0) return false;
//   if (cb(arr[0]) === true) {
//     return true;
//   }
//   arr.shift();
//   return someRecursive(arr, cb);
// }
// const isEven = (num: number) => num % 2 === 0;

// const numbers = [1, 2, 3, 4, 5, 6];

// const result = someRecursive(numbers, isEven);
// console.log(result);

//? first element : if its a number, great. else see the first element of the array there.
// type NestedArr = number | NestedArr[];

// let returnedArr: Array<number> = [];
// function flatten(superArr: NestedArr[]): Array<number> | undefined {
//   if (superArr.length === 0) return [];
//   let duplicateArr: NestedArr | undefined;
//   if (typeof superArr[0] === 'object') {
//     // console.log('s1', superArr);
//     duplicateArr = superArr[0];
//     console.log('s', superArr);
//     flatten(duplicateArr);
//   } else if (typeof superArr[0] === 'number') {
//     returnedArr.push(superArr[0]);
//     duplicateArr = superArr.shift();
//     console.log('sss', duplicateArr);
//     console.log('r', returnedArr);
//     flatten(superArr);
//   }
//   // superArr.shift();
//   return returnedArr;
// }

//! TRY AGAIN
// //@ts-ignore
// function flatten(oldArr: NestedArr[]) {
//   let newArr: Array<number> = [];
//   for (var i = 0; i < oldArr.length; i++) {
//     //@ts-ignore
//     if (Array.isArray(oldArr[i])) {
//       //@ts-ignore
//       newArr = newArr.concat(flatten(oldArr[i]));
//     } else {
//       //@ts-ignore
//       newArr.push(oldArr[i]);
//     }
//   }
//   return newArr;
// }

// console.log(flatten([[[[1], [[[2]]], [[[[[[[3]]]]]]]]]]));
// // console.log(flatten([1, 2, 3]));

// let newArr: string[] = [];
// function capitalizeFirst(arr: Array<string>): Array<string> {
//   if (arr.length === 0) return arr;
//   else {
//     newArr.push(arr[0][0].toUpperCase() + arr[0].substring(1));
//     arr.shift();
//     capitalizeFirst(arr);
//   }
//   return newArr;
// }

// console.log(capitalizeFirst(['adasd', 'saas']));

//?Write a recursive function called nestedEvenSum. Return the sum of all even numbers in an object which may contain nested objects.
//! TA doesnt work in TS
// let sum = 0;
// function nestedEvenSum(obj: Object): number {
//   if (Object.entries(obj).length === 0) return 0;
//   else {
//     for (let key in obj) {
//       if (typeof obj[key] === 'object') {
//         sum += nestedEvenSum(obj[key]);
//       } else if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
//         sum += obj[key];
//       }
//     }
//     return sum;
//   }
// }

// console.log(
//   nestedEvenSum({
//     outer: 2,
//     obj: {
//       inner: 2,
//       otherObj: {
//         superInner: 2,
//         notANumber: true,
//         alsoNotANumber: 'yup',
//       },
//     },
//   })
// );

//?Write a recursive function called capitalizeWords. Given an array of words, return a new array containing each word capitalized.

// let newArr: string[] = [];
// function capitalizeWords(arr: string[]) {
//   if (arr.length === 0) return '';
//   else {
//     newArr.push(arr[0].toUpperCase());
//     arr.shift();
//     console.log('ae', arr);
//     capitalizeWords(arr);
//   }
//   return newArr;
// }

// console.log(capitalizeWords(['i', 'am', 'learning', 'recursion']));

//? Write a function called stringifyNumbers which takes in an object and finds all of the values which are numbers and converts them to strings. Recursion would be a great way to solve this!

// function stringifyNumbers(obj: Object) {}
function capitalizeWords(array: string[]): string[] {
  if (array.length === 1) {
    return [array[0].toUpperCase()];
  }
  let res = capitalizeWords(array.slice(0, -1));
  res.push(array.slice(array.length - 1)[0].toUpperCase());
  return res;
}

console.log(capitalizeWords(['qweqw', 'qweqwea']));
