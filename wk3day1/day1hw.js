// ====================================================================================================

//1. Define a function, as a function expression, maxOfThreethat takes three numbers as arguments and 
// returns the largest of them. Again, the Math.max method is not allowed.

// function maxOfThree(num1, num2, num3){
//     if (num1 >= num2 && num1 >= num3){
//         return num1;
//     }
//     else if(num2 >= num1 && num2 >= num3){
//         return num2;
//     }
//     else{
//         return num3;
//     }
// }

// console.log(maxOfThree(12, 85, 25))

//=====================================================================================================

//2. Define a function, as a function declaration, 
//isCharAVowel that takes a character as an argument and returns true if it is a vowel, false otherwise.

// function isCharAVowel(character) {

//     let a = "a"; let e = "e"; let i = "i"; let o = "o"; let u = "u";

//     if (character === a) {
//         return true
//     }
//     else if (character === e) {
//         return true
//     }
//     else if (character === o) {
//         return true
//     }
//     else if (character === i) {
//         return true
//     }
//     else if (character === u) {
//         return true
//     }
//     else return false

// }

// console.log(isCharAVowel("a"))
// console.log(isCharAVowel("e"))
// console.log(isCharAVowel("i"))
// console.log(isCharAVowel("o"))
// console.log(isCharAVowel("u"))
// console.log(isCharAVowel("d"))

//=================================================================================================

// 3. Define a function, as a function expression,
//sumArraythat takes an array of numbers and returns the sum of those numbers. For example, sumArray([2, 4, 5]);would return 11

//=======ATEMPT 1=========

// function sumArraythat([]) {
//      let sum = 0;
//     for (let i = 0; i < [].lenght; i++) { 
//     sum += [][i];
//     return sum
//     }

//=======ATEMPT 2=========

// function sumArraythat(array) {
//     let sum = 0;
//     for (let i = 0; i < sumArraythat.lenght; i++) {
//         sum += array[i];
//         return sum
//     }

//=======ATEMPT 3=========

// array.forEach(element => {
//     for (let i = 0; i < sumArraythat.lenght; i++) { 
//         let sum = 0;
//         sum += sumArraythat[i];
//         return sum
//     }

// });

//=======ATEMPT 4=========

// function sumArraythat(numbers) {
//     let sum = 0;
//     let numbers = []
//     numbers.array.forEach(input => {
//         for (let i = 0; i < sumArraythat.lenght; i++) {
//             sum += sumArraythat[i];
//             return sum
//         }

//     });



//=======ATEMPT 5=========

// function sumArraythat(numbers) {
//     let sum = 0;
//     let numbers = []
//     numbers.array.forEach(input => {
//         for (let i = 0; i < sumArraythat.lenght; i++) {
//             sum += sumArraythat[i];
//             return sum
//         }

//     })};

//=======RESULT=========

// function sumArraythat(sum) {
//     let results = 0;
//     for (const input of sum) {
//         results += input
//     }
//     return results
// }

// console.log(sumArraythat([1, 4, 4, 2]))

//======================================================================================================

//4. Define a function, as a function expression, numArgsthat returns 
//the number of arguments passed to the function when called

//=======ATEMPT 1=========

// const returnArg = function (arguments){
//     let index = 0
//     for (position of arguments){
//         index += position
//     }
//     arguments.array.forEach(element => {
//         return arguments + indexOf(arguments)
//     });


//     for (argument of arguments){
//         return argument 
//     }
// }

// console.log(returnArg(["pepe", "juan", "raul"]))

// let movies = ['Frozen', 'Spirited Away', 'Scarface'];
// movies.forEach(function(movie, i){
//     console.log(movie + " is at index " + i )
// })

// let array = ["element1", "element2", "element3"];
// for(let i = 0; i < array.length; i++){
//   console.log(array[i]);
// }

//=======RESULT=========

// const returnArg = function () {
//     //Begings loop to iterate through all arguments
//     for (let i = 0; i < arguments.length; i++) {
//         //I grabbed this from the internet
//         //
//         console.log(`Argument at index ${i}: ${arguments[i]}`)
//     }
//     return `${arguments.length} this is the number of arguments `;
// }

// const result = returnArg(1, 2, 'Hello World', [5, 7]);
// console.log(result);

//=========================================================================================================

//5. Define a function, as a function declaration, stringsLongerThanthat takes an array of strings and a number as arguments;
//and returns an array of the strings that are longer than the number passed in.
//For example, stringsLongerThan(['say', 'hello', 'in', 'the', 'morning'], 3);would return ["hello", "morning"].

//=======ATTEMPT 1=========
    // function stringsLongerThan(array, number){
    // array.forEach(element => {
    //     if (element.length === number.length)
    //         return element;
    //     else return `Not long enough`
    // });

    //}

//=======ATTEMPT 2=========
// function stringsLongerThan(array, number){
    // for (let string of array) {
    //     if (string.lenght > lenght)
    //         return string
    //     else (string.lenght < lenght)
    //         return "string exeeds lenght provided"
    // }
//}

//=======ATTEMPT 3=========
// function stringsLongerThan(array, number){
    // for (let string of array) {
    //     if (string.lenght > lenght)
    //         return string
    //     else (string.lenght < lenght)
    //         return "string exeeds lenght provided"
    // }
//}

//=======ATTEMPT 4=========
// function stringsLongerThan(array, number) {
//     array.forEach(array => {
//         for (let string of array) {
//         if (string.lenght > lenght)
//             return string
//         else (string.lenght < lenght)
//             return "string exeeds lenght provided"
//     }
// }

//=======ATTEMPT 5=========
// function stringsLongerThan(array, number){
//      for (let string of array) {
//         for (let i = 0; i < string.length; i++)
//         if (string.length > length)
//             return string
//         else (string.length < length)
//         return "string exeeds length provided"
//     }
// }

//=======RESULT=========

function stringsLongerThan(array, number) { //changed second parameter from length to numvbver to not get confused

    const result = [] //the strings longer than the number will be stored in this empty array (I think)

    //this for of loop will iterate over every string in the array
    //annd will check which array is longer than the number provided

    for (let string of array){
        if (string.length > number){
            result.push(string)
            //this says: if the strings of the array provided are longer than the number provided,
            //add the string to the empty array aka "result" 
        }
    }
    return `These strings are longer than the number provided: ${result}. Don't forget to tip`
    
}

console.log(stringsLongerThan(["hi", "hello", "vainilla", "chocolate", "o"], 5))

