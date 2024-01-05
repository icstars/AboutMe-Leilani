prompt = "Let's Battle some Ships! Shoot your shot!"

let p1board = [
[1,0,0,0,0],
[0,0,1,0,0],
[0,1,0,0,0],
[0,0,0,1,0]
];

let p2board = [
[0,0,0,0,1]
[0,0,1,0,0]
[0,0,0,1,0]  
[0,1,0,0,0]
];

function battleShip(p1board, p2board) {
    
    for(let row = 0; row < 4; row++){
        for(let column = 0; column < 4; column++){
            if(battleShip(p1board[row][column], p1board[row][column + 1], p1board[row][column + 2](p2board[row][column], p2board[row][column + 1], p2board[row][column + 2]))){
                return "HIT!";
            }
        }
    }
}

    for(let row = 0; row < 4; row++){
        for(let column = 0; column < 4; column++){
            if(battleShip(p1board[row][column], p1board[row + 1][column], p1board[row + 2][column](p2board[row][column], p2board[row + 1][column], p2board[row + 2][column]))){
                return "HIT!";
            }
        }
    }
 


console.log(shipWinner(board))