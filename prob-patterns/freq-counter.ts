//* Frequency Counters

//? Write a function called same, which accepts two arrays. The function should return true if every value in the array has it's corresponding value squared in the second array. The frequency of values must be the same.

// same([1, 2, 3], [4, 1, 9]) // true
// same([1, 2, 3], [1, 9]) // false

function same(a1: Array<number>, a2: Array<number>) {
  if (a1.length !== a2.length) return false;
  //? Naive solution. O(n^2)
  // for (let num of a1) {
  //   let indexInSecondArr = a2.indexOf(num ** 2);
  //   if (indexInSecondArr === -1) {
  //     return false;
  //   }
  //   //? Remove the element from the second array
  //   a2.splice(indexInSecondArr, 1);
  // }
  // return true;

  //? Refactored solution. O(n)
  if (a1.length !== a2.length) return false;
  let frequencyCounter1: Record<number, number> = {};
  let frequencyCounter2: Record<number, number> = {};
  for (let val of a1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (let val of a2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }
  for (let key in frequencyCounter1) {
    if (!(parseInt(key) ** 2 in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[parseInt(key) ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 2, 2, 3], [1, 4, 9, 4]));

//* Anagrams

//? Given two strings, write a function to determine if the second string is an anagram of the first. An anagram is a word, phrase, or name formed by rearranging the letters of another, such as cinema, formed from iceman.

//? Examples:
//? validAnagram('', '') // true
//? validAnagram('aaz', 'zza') // false
//? validAnagram('anagram', 'nagaram') // true
//? validAnagram('rat', 'car') // false
//? validAnagram('awesome', 'awesom') // false
//? validAnagram('qwerty', 'qeywrt') // true
//? validAnagram('texttwisttime', 'timetwisttext') // true

function validAnagram(str1: string, str2: string) {
  if (str1.length !== str2.length) return false;
  const lookup: Record<string, number> = {};
  for (let letter of str1) {
    lookup[letter] ? (lookup[letter] += 1) : (lookup[letter] = 1);
  }
  console.log(lookup);
  for (let letter of str2) {
    if (!lookup[letter]) {
      return false;
    } else {
      lookup[letter] -= 1;
    }
  }
  return true;
}
console.log(validAnagram('texttwisttime', 'timetwisttext'));
