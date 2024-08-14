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
