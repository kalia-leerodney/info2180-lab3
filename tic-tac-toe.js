"use strict";


window.onload = function addClassName() {
    let elem = document.querySelectorAll("#board div");

    for (let i=0; i < elem.length ; i++){
        elem[i].className += "square" ;
        elem[i].hover;
        
    }

}

const statusDisplay = document.querySelector('#status');
let gameActive = true;
let currentPlayer = "X";
let gameState = ["", "", "", "", "", "", "", "", ""];
const winningMsg = () => `Player ${currentPlayer} has won!`;
const drawMsg = () => `Game ended in a draw!`;
const currentPlayerTurn = () => `It's ${currentPlayer}'s turn`;
statusDisplay.innerHTML = currentPlayerTurn();
const winningConditions = [
    [0,1,2]
    [3,4,5]
    [6,7,8]
    [0,3,6]
    [1,4,7]
    [2,5,8]
    [0,4,8]
    [2,4,6]
];

function handleBoxPlayed(clickedBox,clickedBoxIndex) {
    gameState[clickedBoxIndex] = currentPlayer;
    clickedBox.innerHTML = currentPlayer;
}
function PlayerChange() {
    currentPlayer = currentPlayer === "X" ? "O" : "X";
    statusDisplay.innerHTML = currentPlayerTurn();
}
function handleResult() {
    let winner = false;
    for (let i=0; i<=7; i++){
        const winCond = winningConditions[i];
        let a = gameState[winCond[0]];
        let b = gameState[winCond[1]];
        let c = gameState[winCond[2]];
        if(a == '' || b == '' || c == ''){
            continue;
        }
        if (a === b && b ===c ){
            winner = true;
            break;
        }

        if (winner){
            statusDisplay.innerHTML = winningMsg();
            gameActive = false;
            return;
        }

        let roundTie = !gameState.includes("");
        if (roundDraw){
            statusDisplay.innerHTML = drawMsg();
            gameActive = false;
            return;
        }

        PlayerChange();
    }

}
function handleCellClick(clickedBoxEvent) {
    const clickedBox = clickedBoxEvent.target;
    const clickedBoxIndex = parseInt(clickedBox.getAttribute('#board div'))

   /** if(gameState[clickedBoxIndex] !== || !gameActive){
        return; 
   }*/

    handleBoxPlayed(clickedBox, clickedBoxIndex);
    handleResult();
}

function handleRestartGame() {
    gameActive = true;
    currentPlayer = "X";
    gameState = ["", "", "", "", "", "", "", "", ""];
    statusDisplay.innerHTML = currentPlayerTurn();
    document.querySelectorAll("#board div").forEach(box => box.innerHTML = "");


}



document.querySelectorAll('#board div').forEach(cell => cell.addEventListener('click', handleCellClick));
document.querySelector('.btn').addEventListener('click', handleRestartGame);









 




