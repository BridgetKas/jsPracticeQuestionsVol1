// Write a JavaScript function to check whether an 'input' is a string or not.
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

function splitString(str){
    const splitArray=str.split('')
    console.log(splitArray)
}

splitString('Robin Singh')