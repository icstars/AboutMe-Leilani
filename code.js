let arr4 = [1,2,3,4,5]

let lastItem = arr.slice(-1)

let num = lastItem.slice(0)

console.log(arr,num)

num = 9

const arr1 = [5,6,1,9]

arr1[1] = 10

arr[arr.length - 1]

arr1.push(90)

arr1.pop()
console.log(arr1[Math.floor(Math.random() * arr1.length)])

Math.ceil

let arr2 = [2,4,6,8,2,4]

let len = Math.random() * arr.length
console.log(arr[Math.floor(len)])



//FOR LOOP

let arr = ['leilani','gisele','caban']
// Traditionally
// 1. initinalizer 2. condition 3. iterator

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}
// FOR OF LOOP
for (char of arr){
    console.log(char)
}

let string = 'leilani'

for (char of string) {
    console.log(char)
}

//WHILE LOOP
let j = 0
while (j < 5){
    console.log(j)
    j++
}

let word =  'hi'
let attemps = 0
let arr5 = []
let characters = 'abcdefghijklmnopqrstuvwxyz'
let charArray = characters.split('')
console.log(charArray)

while (arr5.join(``) != word) {
    arr5 = []
    for (char of word) {
        arr5.push(charArray[Math.floor(Math.random() * charArray.length)])
    }
console.log(arr5.join(''))
attemps++
}

console.log(`Number of attempts: ${attempts}`)



//LOGICAL OPERATORS
// !=NOT EQUAL
// >GREATER THAN
// <LESS THAN
// LOOSE EQUALS = SAME CHARACTER & DOENST ACCOUNF FOR DATA TYPE
//     "1" - STRING - 
// STRICT EQUALS = SAME CHARACTER & ACCOUNTS FOR DATA TYPE
//      1 - NUMBER - FALSE 

let array  = [1,2,3]
let i = 0
while (i < array.length){
    i++
    console.log(array[i])
}
