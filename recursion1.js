// Write a function, sumNums, that takes a number, num, as an argument and returns the sum of all the numbers between 1 and num.
// You can assume that num will be greater than 1. Use recursion.

//sumNums(3); // => 6 (3 + 2 + 1)
//  let total = 0;
// function sumNum(num) {
//     if (num == 1) {
//         total = total + 1;
//         return 1;
//     }
//     else {
//         console.log(`the value of num is ` + num);
//         total = total + num;
//         sumNum(num - 1);
//     }
// }
// sumNum(6);
// console.log(total);

// function sumNum1(num) {
//     if (num <= 1){
//         //console.log(num);
//         return 1;
//     } // base case
//     else {
//         //console.log(num);
//         return num + sumNum1(num-1);
//     }
// }
// console.log(sumNum1(6));

function sumNum(num) {
    if (num < 1) return 0;    // exit condition
    return num  + sumNum(num - 1); // return value plus result of recursive call
}

console.log(sumNum(3));
