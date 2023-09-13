//? JS Built in Sort method

// console.log([6, 4, 15, 10].sort());

// function numberCompare(num1: number, num2: number) {
//   return num1 - num2;
// }

// console.log([6, 4, 15, 10].sort(numberCompare));

//? Bubble Sort. As you loop, compare the next one, if larger: swap. If not, move on. Repeat until no swaps are made.

// function bubbleSort(arr: number[]) {
//   let noSwaps: boolean = true;
//   for (let i = arr.length; i > 0; i--) {
//     for (let j = 0; j < i - 1; j++) {
//       if (arr[j] > arr[j + 1]) {
//         //? swap
//         [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
//         noSwaps = false;
//       }
//     }
//     if (noSwaps) break;
//   }
//   return arr;
// }

// console.log(bubbleSort([223, 435, 64, 123, 23, 424, 641, 999, 888]));

// //? Selection Sort. Similar to bubble sort, but instead of first placing large values into sorted position, it places small values into sorted position.

// function selectionSort(arr: number[]) {
//   for (let i = 0; i < arr.length; i++) {
//     let lowest: number = i;
//     for (let j = i + 1; j < arr.length; j++) {
//       //? change the indices
//       if (arr[j] < arr[lowest]) lowest = j;
//     }
//     //? change the numbers (values)
//     if (i !== lowest) [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
//   }
//   return arr;
// }

// console.log(selectionSort([1, 72, 345, 3545, 71, 4, 6, 7]));

//? Insertion Sort. Builds up the sort by gradually creating a larger left half which is always sorted.

function insertionSort(arr: number[]) {
  for (let targetIdx = 1; targetIdx < arr.length; targetIdx++) {
    const targetValue = arr[targetIdx];
    for (let sortedIdx = targetIdx - 1; sortedIdx >= 0; sortedIdx--) {
      if (targetValue < arr[sortedIdx])
        [arr[sortedIdx], arr[sortedIdx + 1]] = [targetValue, arr[sortedIdx]];
    }
  }
  return arr;
}

console.log(insertionSort([1, 2, 3, 21, 76, 4]));
