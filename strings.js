// Write a JavaScript function to check whether an 'input' is a string or not.
/*typeof is for primitive values; instanceof is for objects*/
 function isString(str){
    if(typeof str === 'string'){
        console.log(true)
    }else {
        console.log(false)
    }
 }
 isString('w3resource')
 isString('')
 isString({w3resource:9})

// Write a JavaScript function to check whether a string is blank or not.
function isStringBlank(str){
    if(typeof str === 'string'){
        if(str.length > 1){
            console.log("That's a string")
        }else {
            console.log('The string is blank')
        }
    }else {
        console.log('Please enter a string')
    }
}

isStringBlank('w3resource')
isStringBlank('')
isStringBlank([3,4,5,6])

// Write a JavaScript function to split a string and convert it into an array of words.
/*** split property can only be applied to strings */

function splitString(str){
    const splitArray=str.split('')
    console.log(splitArray)
}

splitString('Robin Singh')

// Write a JavaScript function to convert a string into abbreviated form.
/** CharAt method of strings returns a single character at the specified index */
function abbrevName(str){
    const stringArray = str.trim().split(' ')
    if(stringArray.length > 1){
        console.log(stringArray[0]+ ' ' + stringArray[1].charAt(0))
    }else {
        console.log(str)
    }
}

abbrevName('Namugga Bridget')
abbrevName('Namugga Bridget Kasujja')

function abbreviateString(input) {
    // Split the string into words by spaces
    const words = input.split(' ');
  
    // Map over the words to get the first letter of each, in uppercase
    const abbreviation = words.map(word => word.charAt(0).toUpperCase()).join('');
  
    console.log(abbreviation);
  }

  abbreviateString ('Namugga Bridget Kasujja')

// Write a JavaScript function to parameterize a string.

function parameterizeString(str){
    /** join() is an array method that creates and returns a new string  */
    let lowerCaseStr = str.toLowerCase().split(' ').join('-')
    console.log(lowerCaseStr)
}

parameterizeString("Robin Singh from USA.")

// Write a JavaScript function to capitalize the first letter of a string.
function capitalizeString(str){
    const capitalString = str.charAt(0).toUpperCase() + str.slice(1)
    console.log(capitalString)
}
capitalizeString('js string exercises')
capitalizeString('namugga bridget')

// Write a JavaScript function to capitalize the first letter of each word in a string.
function capitalize(str){
    const string = str.split(' ').map(item => (item.charAt(0).toUpperCase() + item.slice(1))).join(' ')
    console.log(string)
}

capitalize('js string exercises')

// Write a JavaScript function that takes a string with both lowercase and upper case letters as a parameter.
//  It converts upper case letters to lower case, and lower case letters to upper case.
function swapCase(input) {
    // Initialize an empty string to store the result
    let result = '';
  
    // Iterate through each character in the input string
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
  
      // Check if the character is uppercase
      if (char === char.toUpperCase()) {
        // Convert to lowercase and add to result
        result += char.toLowerCase();
      } else {
        // Convert to uppercase and add to result
        result += char.toUpperCase();
      }
    }
  
    return result;
  }
  
//   Write a JavaScript function to convert a string into camel case.

function camelize(str) {
    const string = str.split(' ')

    for (let i = 0; i<string.length;i++){
        string[i].charAt(0).toUpperCase() + string.slice(1)
    }
    console.log(string.join(''))
}

camelize('JavaScript Exercises')
camelize('JavaScriptExercises')

// Write a JavaScript function to uncommelize a string.
function uncommelize(str,separator) {
    const string = str.split(' ')
    const uncommelizedStr = string.map (item =>(item.charAt(0).toLowerCase() + item.slice(1)))
    console.log(uncommelizedStr.join('_'))
}

uncommelize('hello World')

// Write a JavaScript function to concatenate a given string n times (default is 1).

function repeatString(str,n) {
    if (n <= 0){
        console.log('Enter a valid number')
    } else if (typeof(n) === 'undefined'){
        n = 1
    }
    console.log('REPEATSTRING', str.repeat(n))
 }

repeatString('HA')

// Solution 2
const repeat = (str, count) => {
    // If count parameter is not provided, set it to 1
    if(typeof(count) == "undefined") {
    count =1;
  }
  // Return an empty string if count is less than 1, otherwise repeat the string count times
  console.log( count < 1 ? '' : new Array(count + 1).join(str));
}

repeat('HA', 0)

// 14. Write a JavaScript function to insert a string within a string at a particular position (default is 1).

function insertString(string,word,position) {
    let stringToArray = string.split('')
    // console.log(stringToArray)
    if(typeof word === 'undefined' && typeof position === 'undefined'){
        console.log(string)
        return
    }else if (typeof position === 'undefined'){
        const newString = stringToArray.splice(1,0,word)
        console.log('PositionString',  stringToArray.join(' '))
        return
    }else {
        const newString = stringToArray.splice(position,0,word)
        console.log('PositionAndWordString',  stringToArray.join(' '))

        return;
    }
}

// insertString('We are doing some exercises.')
insertString('We are doing some exercises.','JavaScript ')
insertString('We are doing some exercises.','JavaScript ',18)

// Improved Version
function insertString(string, word, position) {
    if (typeof word === 'undefined') {
        console.log(string);
        return;
    }

    if (typeof position === 'undefined') {
        position = 1; // Default to position 1 if not provided
    }

    if (position < 0) {
        position = 0; // Handle negative positions by setting to 0
    } else if (position > string.length) {
        position = string.length; // Handle positions greater than the string length by setting to the end
    }

    const newString = string.slice(0, position) + word + string.slice(position);
    console.log(`InsertedString: ${newString}`);
}


//Write a JavaScript function that format a number in a human-readable string with the correct suffix, such as 1st, 2nd, 3rd, etc.
function formatNumber(number) {
    let numberToString = number.toString()
    if(typeof number === 'undefined'){
        console.log('Enter a valid number ')
    }

    if (numberToString.endsWith(1)) {
        console.log(`${numberToString}st`)
    }else if (numberToString.endsWith(2)) {
        console.log(`${numberToString}nd`)
    }else if (numberToString.endsWith(3)) {
        console.log(`${numberToString}rd`)
    }else {
        console.log(`${numberToString}th`)
    }
}

formatNumber(1)
formatNumber(8)
formatNumber(301)
formatNumber(402)
formatNumber(57)

// Improved code
function formatNumber(number) {
    if (typeof number === 'undefined' || isNaN(number)) {
        console.log('Enter a valid number');
        return;
    }

    const numberToString = number.toString();
    const lastDigit = number % 10;
    const lastTwoDigits = number % 100;

    let suffix;

    if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
        suffix = 'th';
    } else {
        switch (lastDigit) {
            case 1:
                suffix = 'st';
                break;
            case 2:
                suffix = 'nd';
                break;
            case 3:
                suffix = 'rd';
                break;
            default:
                suffix = 'th';
        }
    }

    const formattedNumber = `${numberToString}${suffix}`;
    console.log(formattedNumber);
    return formattedNumber;
}

// Write a JavaScript function to truncate a string if it is longer than the specified number of characters. 
// Truncated strings will end with a translatable ellipsis sequence ("...") (by default) or specified characters.

function truncateStr(str,num,mark) {
    if (typeof str !== 'string' ) {
        console.log('Enter a valid sentence')
        return
    }
    if(typeof num !== 'number'){
        console.log('enter a number')
        return
    } 
    if(num >= str.length){
        return str
    }else {
        const truncatedString = str.slice(0,num) + mark
        return truncatedString

    }
    
}

console.log (truncateStr('We are doing JS string exercises.','67'))
console.log (truncateStr('We are doing JS string exercises.', 100))
console.log (truncateStr('We are doing JS string exercises.', 15 ,'!!!'))

//  Write a JavaScript function to chop a string into chunks of a given length.
function splitString(str,num) {
    let i = 0
    let splitArr = []
    if (typeof num !== 'number') {
        return str
    }

    if(num > str.length) {
        return
    }else {
        while(i < str.length) {
            let splitStr = str.slice(i , num + i)
            splitArr.push(splitStr)
            i += num
        }
        
    }
    return splitArr
}

console.log (splitString('MyLoveMorgan'))

// Write a JavaScript function to count substrings in a string.
// NB: When comparing strings remember that strict equality doesn't coercion .so always use either toLowerCase or toUpperCase
function count(str,sub) {
    let total = 0
    if(typeof str !== 'string') {
        return 
    }
    let splitStr = str.toLowerCase().split(' ')
    for (let i=0; i < splitStr.length; i++){
        if(splitStr[i] === sub) {
            total ++
        }
    }
    return total
}

console.log(count("The quick brown fox jumps over the lazy dog", 'fox','false'))

// Write a JavaScript function that takes a positive integer and reverses the binary representation of that integer. 
// Finally return the decimal version of the binary string.
// NB: if you want to change a number from one base to another use toString(base) function
function reverseBinary(num) {
    // Convert the number to its binary representation
    let binaryStr = num.toString(2);
    
    // Reverse the binary string
    let reversedBinaryStr = binaryStr.split('').reverse().join('');
    
    // Convert the reversed binary string back to a decimal number
    let reversedDecimal = parseInt(reversedBinaryStr, 2);
    
    return reversedDecimal;
}


// Write a JavaScript function that can pad (left, right) a string to get to a specific length.
function padString(char,targetLength, sign='',direction='left') {
    const string = char.toString()
    if(typeof string !== 'string') return

    if(direction === 'left'){
        return string.padStart(targetLength,sign)
    }else if(direction === 'right'){
        return string.padEnd(targetLength,sign)
    }else {
        throw new Error('Enter a valid sign')
    }
}

console.log (padString(6767,7, 'x', 'right'))
console.log (padString('6767',7, 'x', 'left'))


// Write a JavaScript function to repeat a string for a specified time.

function repeatString(str,num) {
    if(typeof str !== 'string') return
    if (typeof num !== 'number'){
        console.log ('Error in the number')
    }

    let count = 1
    let repeatedString = ''

    while(count <= num) {
        repeatedString += str
        count ++
    }
    return repeatedString
}

console.log(repeatString('a'))

// IMPROVED CODE
// nb TAKE AWAYS :INstead of writing the return statment only you can include an empty string . When writing the error message include the concise message
// it's alright to use built in methods
function repeatString(str, num) {
    if (typeof str !== 'string') {
        console.error('First argument must be a string.');
        return '';
    }
    
    if (typeof num !== 'number' || num < 0) {
        console.error('Second argument must be a non-negative number.');
        return '';
    }

    // Use the built-in repeat method for simplicity
    return str.repeat(num);
}

// Example usage:
console.log(repeatString('hello', 3)); // Output: "hellohellohello"
console.log(repeatString('hello', -1)); // Output: Error message and ""
console.log(repeatString(123, 3)); // Output: Error message and ""


// Write a JavaScript function to get a part of a string after a specified character.
function stringAfterChar (str,char) {
    let extractedString
    if(typeof str !== 'string'){
        console.error('Enter a valid string value')
        return ''
    }

    if (typeof char === 'undefined') {
        return str
    }

    for (let i = 0; i < str.length; i++) {
        if(str[i] === char){
             extractedString = str.slice(0,i)
        }
    }
    return extractedString
}

console.log(stringAfterChar('w3resource: JavaScript Exercises', ':','a'))
console.log(stringAfterChar('w3resource: JavaScript Exercises', 'E','b'))

// NB findIndex and find is an array method while indexOf is a string method

function subStrAfterChars(str, char, pos)
{
  // If the position indicator is 'b' (before), return the substring after the specified character.
  if(pos=='b')
    return str.substring(str.indexOf(char) + 1);
  // If the position indicator is 'a' (after), return the substring before the specified character.
  else if(pos=='a') 
    return str.substring(0, str.indexOf(char));
  // If the position indicator is neither 'a' nor 'b', return the original string.
  else
    return str;  
}

// Test the subStrAfterChars function by printing the substring after ':' with the position indicator 'a'.
console.log(subStrAfterChars('w3resource: JavaScript Exercises', ':','a'));

// Test the subStrAfterChars function by printing the substring before 'E' with the position indicator 'b'.
console.log(subStrAfterChars('w3resource: JavaScript Exercises', 'E','b'));




// Write a JavaScript function to strip leading and trailing spaces from a string
function stripSpaces(str){ 
    if(typeof str !== 'string') {
        console.error('Enter a valid string value')
        return ''
    }
    return str.trim()

}

console.log(stripSpaces('  bizzy  '))