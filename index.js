// 11/6

//VARIABLES - container for data to be stored
// for later

// let - are mutable / change
let number = 15

number = 10

console.log(number)

// const - immutable / cannot change
const name = 'Leilani'

// name1 = Caban

// var - just like let

var number2 = 8

number2 = 10

// ** DATA TYPES ** //

// Number/Interger
let x = 2

let y = 2.5

let z = x + y

let b = 300000

console.log(2*4)

// String - sequence of characters
// ' ', " " , ` ` ,

const name2 = "Caban"

console.log(name2)

//Concatination
let sentence = 'hi!'
let sentence2 = 'bye.'
let sentence3 = sentence + ' ' + sentence2
// $() - template literal
let sentence4 =`Hi my name is Leilani, ${sentence2}`
console.log(sentence4)

let o =  200

let s = `${o}`

let num = '20,000'

let num2 = 20

console.log(num + num2)

const num3  = 10

console.log(num3) // prints to the console

// Booleans

// Truthy - anything with value
// 1
// 'Great' - String
// true

// Falsy - undefined; no value
// 0
// ''
// false
// undefined
// null

console.log(Boolean(""))


// 11/7

// Array - list of values/variables

const  emptyArr = [];
console.log(emptyArr);

const name3 = "Leilani";

const name3Arr = ["Leilani", "Gisele", "Caban", "Sabatino"]
console.log(name3Arr);
const lengthOfNameArr = name3Arr.length;
console.log(lengthOfNameArr);

const hello = `Hi my name is ${name3Arr[0]}`;
console.log(hello)

name3Arr.push("Blu");
console.log(name3Arr);

console.log(name3Arr.pop()) 

const f = [1, 2, 3, 4, 5, 6];
console.log(f[f.length - 1])


// let input = prompt("what is your name?")
// let input2 = prompt("what is your age?")

// alert(`Hi my name is ${input} & I am ${input2} years old!`)

// OR CAN BE WRITTEN AS:

//alert("Hi, my name is" + ' ' + input +' '+ "& I am" + ' ' + input2 + ' ' + "years old!")

// let guess = prompt("Guess a number")

while(guess !=  3) {
    guess = prompt("Guess a number")
}
//alert("You guessed correctly!")

// function log (a, b){
//     console.log(a + b)
// }
// log("leilani", " caban")

// function addStrings(str1, str2) {
//     return str1 + str2
// }
// let combination = addStrings("hi", "bye")

// let name = funtion (a,b); { // Function Expression

// }

// name (1,5)
// function name2(){ // Regular Function

// }

// let name3 = (a, b) => {return a + b} // Arrow Fuction

// for (var i = 0; i < 10; i++){

// }
//  console.log(i)

//  let nums = [1,2,3,4,5]
//  let names = ['leilani', 'gisele', 'caban']

//  loopArray(nums)
//  loopArray(names)

//  function vendingMachine(money, item){
//     let snacks = ['Pepsi', 'Hershey', 'Snickers', 'Reeses', 'Water', 'Fritos']

//     if (money = '$2.00') {
//             }for (snack of snacks) {
//             if (item === snack){
//             return snack
//         }else{
//             return "doesn't exist"
//         } 
//     }
// }


// Rock Paper Scissors using a Function ||| need to define variables and finish conditions

// let game = function () {
    let userInput = prompt('Choose rock, paper, or scissors')
    let botChoices = ['rock', 'paper', 'scissors']
    let botChoice = botChoices[Math.floor(math.random() * 3)]

    if (userInput === botChoice){
    return 'Its a tie'
    } else if (userInput === 'rock' || botChoice === 'scissors' ) (userInput === 'scissors' || botChoice === 'paper') (userInput === 'paper' || botChoice === 'rock') {
        return 'You Win!'

    }
// }


