// let x = 0;

// let arr = [[1,2,3], ["String", "Lani", "Caban"], [true, false, true]];

// // console.log(typeof) --> Tells type of dataType

// for (let i = 0; i < arr.length; i++) { // for each arrayin the main array
//     for (let j = 0; j < arr[i].length; j++) { // for each element in the array in the main array
//         if (typeof arr[i][j] == "string" && j == 0) { // if that element is a string AND is at the first position
//             for (char of arr[i][j]) { // log each character  in that element to the console
//                 console.log(char); 
//             }

//         }

//     } 
// }

// function twoSum(a,b){
//     for (let i = 0; i < a.length; i++) {
//         for (let j = i+1; j < a.length; j++){
//             if(a[i]+ a[j] == b) {
//                 return [a[i], a[j]];
//         }
//     }
// }
//     return ('No number equals the target')
// }
// console.log(twoSum[[3,6,9,13,16,19,23], 15])


//HOMEWORK!

function twoSum(a,b){
    for(let i = 0; i<a.length; i++){
        for(let j = i+1; j<a.length; j++){
            if(a[i] + a[j] == b)
                return [a[i],a[j]];
            }

        }
        return ('No number equals the target')
    }
console.log(twoSum([12,3,4,21,54,7,6],1)) 