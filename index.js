// // 1
// function startingLetter(word) {
//   for (let i = 0; i < word.length; i++) {
//     let letter = word[i];
//     const result = word.slice(i + 1).includes(letter);
//     if (result) {
//       return word[i];
//       break;
//     } else return -1;
//   }
// }

// console.log(startingLetter("helloh"));

// // 2

// function nonRepeatingLetter(word) {
//   let flag;
//   for (let i = 0; i < word.length; i++) {
//     let letter = word[i];
//     const result = word.slice(i + 1).includes(letter);
//     // console.log(letter, result);
//     if (result) {
//       return i;
//       flag = true;
//     }
//   }
//   if (!flag) {
//     return -1;
//   }
// }

// console.log(nonRepeatingLetter("hello"));

// // 3

function maxNumber(numbers) {
  let singleNumbers = [];

  for (let i = 0; i < numbers.length; i++) {
    const result = numbers.slice(i + 1).includes(numbers[i]);
    if (result) {
      singleNumbers.push(numbers[i]);
    }
  }

  // console.log(singleNumbers);
  let maxNum;
  for (let i = 0; i < singleNumbers.length; i++) {
    maxNum = singleNumbers[i];
    if (singleNumbers[i] > maxNum) {
      maxNum = singleNumbers[i];
    }
  }
  return maxNum;
}

console.log(maxNumber([1, 2, 8, 8, 3, 1, 5, 2]));
