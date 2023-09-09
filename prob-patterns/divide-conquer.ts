//* Divide & Conquer: Dividing a dataset into small chunks and repeating the process with each subset of data

//? Given a sorted array of integers, write a function called search, that accepts a value and returns the index where the value passed to the function is located. If the value is not found, return -1.

//? search([1, 2, 3, 4, 5, 6], 4) // 3
//? search([1, 2, 3, 4, 5, 6], 6) // 5
//? search([1, 2, 3, 4, 5, 6], 11) // -1

function search(arr: Array<number>, num: number): number {
  let mid = Math.floor(arr.length / 2);
  if (arr[mid] === num) return mid;
  if (arr[mid] > num) return search(arr.slice(0, mid), num);
  else {
    let temp = search(arr.slice(mid + 1), num);
    return temp === -1 ? -1 : temp + mid + 1;
  }
}

console.log(search([1, 2, 3, 4, 5, 6], 4));
console.log(search([1, 2, 3, 4, 5, 6], 6));
