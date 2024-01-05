//Make a program that makes you guess a number between 1-100. 
//The number has to be a random number
//The program should alert that your guess is too high and too low. 
//The game should end after 7 tries and alert what the number was when you lose. 
//The game should also ask you if you want to play again and end if you say no and repeat if you say yes. 
//This game must be done in a function. 
//This is due tomorrow at 1pm.

// function guessNumber (){

// while (playAgain === 'Yes') {
//     let target = Math.floor(math.random() * 100) + 1;
//     let maxTries = 6;
    
//     for (let tries = 1;  tries = maxTries; tries++){
//         let guess = prompt('Guess any number between 1 and 100!');

//         if(guess < target) {
//             alert ('nah man, go higher!');
//         } else if (guess > target) {
//             alert ('ouuu try again, go low!');
//         } else {
//             alert('I see youuu! You did that!');
//             return;
//         }

//         alert (`You are all out of guesses:( The number was ${target}`);
//         playAgain = prompt ('Do you want to try again? Yes or No?')
//         if (playAgain = 'No'){
//             alert ('Have a nice day then... NOT! haha... JK!')
//             return;
//         }

//     }
// }
// }
// guessNumber();

function guessNumber() {
    let playAgain = 'Yes';

    while (playAgain.toLowerCase() === 'yes') {
        let target = Math.floor(Math.random() * 100);
        let maxTries = 7;
        console.log(target)

        for (let tries = 1; tries <= maxTries; tries++) {
            let guess = prompt('Guess any number between 1 and 100!');
            console.log(guess)

            if (guess < target) {
                alert('Nah man, go higher!');
            } else if (guess > target) {
                alert('Ouuu try again, go low!');
            } else if (guess === target) { 
                alert('I see youuu! You did that!');
                return;
            }

            if (tries === maxTries) {
                alert(`You are all out of guesses:( The number was ${target}`);
            }

            playAgain = prompt('Do you want to try again? Yes or No?');

            if (playAgain.toLowerCase() === 'no') {
                alert('Have a nice day then... NOT! Haha... JK!');
                return;
            }
        }
    }
}

guessNumber();