// Write a function, countVowels, that accepts a string as an argument and returns the number of vowels in that string.
// Use recursion.

// countVowels('Four score and seven years'); // => 9

// vowels = aeiou
function countVowels(someString) {
    console.log(`the string is : ` + someString);
    console.log(`the length of string is ` + someString.length)
    // string to array
    if (someString.length == 1) {
    if (isVowel(someString) == 1) {
        return 1
    }else {
        return 0;
    }
    } else {
        //
        console.log(`the length is ` + someString.length)
        //console.log(someString.substring(counter));
        return isVowel(someString.charAt(0)) + countVowels(someString.substring(1));
    }
}
function isVowel(someString) {
    if (someString.charAt(0) === 'a') {
        return 1;
    }else if ( (someString.charAt(0) === 'e')) {
        return 1;
    }else if ( (someString.charAt(0) === 'i')) {
        return 1;
    }else if ( (someString.charAt(0) === 'o')) {
        return 1;
    }else if ( (someString.charAt(0) === 'u')) {
        return 1;
    }else {
        return 0;
    }
}
console.log(`the total vowels is: ` + countVowels('Four score and seven years'));