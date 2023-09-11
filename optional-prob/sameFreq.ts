//? Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.
//? Your solution MUST have the following complexities:

//? Time: O(N)

//? Sample Input:
//? sameFrequency(182, 281) // true
//? sameFrequency(34, 14) // false
//? sameFrequency(3589578, 5879385) // true
//? sameFrequency(22, 222) // false

function sameFrequency(num1: number, num2: number): boolean {
  if (num1.toString().length !== num2.toString().length) return false;
  let frequency1: Record<string, number> = {};
  for (let digit of num1.toString()) {
    frequency1[digit] ? (frequency1[digit] += 1) : (frequency1[digit] = 1);
  }
  for (let digit of num2.toString()) {
    if (!frequency1[digit]) return false;
    else {
      frequency1[digit] -= 1;
    }
  }
  return true;
}

console.log(sameFrequency(22, 222));
