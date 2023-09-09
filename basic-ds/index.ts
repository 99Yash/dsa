//* When to use Objects

//? 1. When you don't need order
//? 2. When you need fast access/insertion and removal

//* Big-O of Objects

//? Insertion - O(1)
//? Removal - O(1)
//? Searching - O(n)
//? Access - O(1)
//? Big-O of Object Methods
//? Object.keys - O(n)
//? Object.values - O(n)
//? Object.entries - O(n)
//? hasOwnProperty - O(1)

//* When to use Arrays

//? 1. When you need order
//? 2. When you need fast access/insertion and removal (sort of...)

//* Big-O of Arrays
//? Inserting at the end of an array is O(1)
//? Inserting at the beginning of an array is O(n)
//? Removing from the end of an array is O(1)
//? Removing from the beginning of an array is O(n)

//* Big-O of Array Operations

//? push - O(1)
//? pop - O(1)
//? shift - O(n)
//? unshift - O(n)
//? concat - O(n)
//? slice - O(n)
//? splice - O(n)
//? sort - O(n * log n)
//? forEach/map/filter/reduce/etc. - O(n)

const countStr = (str: string) => {
  let obj: Record<string, number> = {};

  //? v1 using good old for loop
  // for (let i = 0; i < str.length; i++) {
  //   let char = str[i].toLowerCase();

  //   if (/[a-z0-9]/.test(char)) {
  //     if (obj[char] > 0) {
  //       obj[char]++;
  //     } else {
  //       obj[char] = 1;
  //     }
  //   }
  // }

  //? v2 using for...of loop
  // for (let char of str) {
  //   if (/[a-z0-9]/.test(char)) {
  //     char = char.toLowerCase();
  //     obj[char] = ++obj[char] || 1;
  //   }
  // }

  //? v3 not using regex
  for (let char of str) {
    if (
      (char.toLowerCase().charCodeAt(0) >= 97 &&
        char.toLowerCase().charCodeAt(0) <= 122) ||
      (char.toLowerCase().charCodeAt(0) >= 48 &&
        char.toLowerCase().charCodeAt(0) <= 57)
    ) {
      char = char.toLowerCase();
      obj[char] = ++obj[char] || 1;
    }
  }

  return obj;
};

console.log(countStr('22434765 CCC221  6c'));
