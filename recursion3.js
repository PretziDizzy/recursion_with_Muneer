// Write a function, reverseArray, that accepts an array as an argument and returns a reversed copy of that array.
// Use recursion. Don’t mutate the original array.

let arr = [1,2,3,4];
let reversedArr = []
let lastElement = arr[arr.length - 1];
let index = arr.length - 1;
let test = reversedArray(arr)

function reversedArray(arr) {
return test(reversedArr)

function test (reversedArr){
    if (reversedArr.length == arr.length){
        return
    } else 
    { 
        reversedArr.push(arr[index]);
        index=index-1
        console.log(reversedArr)
        test(reversedArr)
    }
    
}
}
// console.log(reversedArray(arr))



// console.log(reversedArr) // [4,3,2,1]
// console.log(arr) // [1,2,3,4]