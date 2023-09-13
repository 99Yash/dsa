//? JS Built in Sort method

// console.log([6, 4, 15, 10].sort());

// function numberCompare(num1: number, num2: number) {
//   return num1 - num2;
// }

// console.log([6, 4, 15, 10].sort(numberCompare));

//? Bubble Sort. As you loop, compare the next one, if larger: swap. If not, move on. Repeat until no swaps are made.

function bubbleSort(arr: number[]) {
  let noSwaps: boolean = true;
  for (let i = arr.length; i > 0; i--) {
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        //? swap
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
        noSwaps = false;
      }
    }
    if (noSwaps) break;
  }
  return arr;
}

console.log(bubbleSort([223, 435, 64, 123, 23, 424, 641, 999, 888]));
