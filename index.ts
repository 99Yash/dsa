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
