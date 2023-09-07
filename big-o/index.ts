//? big-O shorthands

//* 1. Arithmetic operations are constant
//* 2. Variable assignment is constant
//* 3. Accessing elements in an array (by index) or object (by key) is constant
//* 4. In a loop, the complexity is the length of the loop times the complexity of whatever happens inside of the loop

//? Big-O notation: O(n)
function addTo(n: number): number {
  // let total = 0;
  // for (let i = 1; i <= n; i++) {
  //   total += i;
  // }
  // return total;
  return (n * (n + 1)) / 2;
}

let t0 = performance.now();
addTo(1000000000);
let t1 = performance.now();
console.log(`Time Elapsed: ${(t1 - t0) / 1000} seconds.`);

//? Auxiliary Space Complexity: O(1)

//* Most primitives (booleans,numbers,undefined,null) are constant space.
//* Strings require O(n) space (where n is the string length)
//* Reference types are generally O(n); n is the length of array/ keys in objects
