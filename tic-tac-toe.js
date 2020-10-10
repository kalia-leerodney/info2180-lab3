"use strict"

window.onload = function() {

    var currentPlayer = "X";
    let gameState = ["", "", "", "", "", "", "", "", ""];
    let elem = document.querySelectorAll("#board div");
    var statusDisplay = document.querySelector("#status");
    const winnings = [[0, 1, 2], [3, 4, 5], [6, 7, 8], [0, 3, 6], [1, 4, 7], [2, 5, 8], [0, 4, 8], [2, 4, 6]];

    

    for (let i=0; i < elem.length ; i++){
        elem[i].classList.add("square");
        elem[i].addEventListener('click', function() {
            console.log('Square ' + i + " clicked");
            elem[i].textContent = currentPlayer;

            for (let m = 0; m < elem.length; m++){
                if (this == elem[m]){
                    gameState[i] = currentPlayer;
                }
            }

            currentPlayer = currentPlayer === "X" ? "O":"X";
            /*statusDisplay.innerHTML = currentPlayerTurn();*/


            if (currentPlayer == "X"){
                this.classList.add("X");
                this.innerHTML = "X";
                this.style.pointerEvents = 'none';
                statusDisplay.textContent = "It's X's Turn";
            }

            else {
                this.classList.add("O");
                this.textContent = "O";
                statusDisplay.textContent = "It's O's Turn";
                this.style.pointerEvents = 'none';
            }

        

            
            if (
                gameState[0] == currentPlayer && gameState[1] == currentPlayer && gameState[2] == currentPlayer ||
                gameState[3] == currentPlayer && gameState[4] == currentPlayer && gameState[5] == currentPlayer ||
                gameState[6] == currentPlayer && gameState[7] == currentPlayer && gameState[8] == currentPlayer ||
                gameState[0] == currentPlayer && gameState[3] == currentPlayer && gameState[6] == currentPlayer ||
                gameState[1] == currentPlayer && gameState[4] == currentPlayer && gameState[7] == currentPlayer ||
                gameState[3] == currentPlayer && gameState[4] == currentPlayer && gameState[5] == currentPlayer ||
                gameState[2] == currentPlayer && gameState[5] == currentPlayer && gameState[8] == currentPlayer ||
                gameState[0] == currentPlayer && gameState[4] == currentPlayer && gameState[8] == currentPlayer ||
                gameState[2] == currentPlayer && gameState[4] == currentPlayer && gameState[6] == currentPlayer 
                ){
                    statusDisplay.classList.add("you-won");

                    if (currentPlayer == "X"){
                        statusDisplay.textContent = "Congradulations O has won"
                    }

                    else if (currentPlayer =="O") {
                        statusDisplay.textContent = "Congradulations X has won"
                    }

                    else{
                        statusDisplay.innerHTML = "Draw";
                    }
  
                
                }
                
           

    
        });

        elem[i].addEventListener('mouseover', function(){
            this.classList.add("hover");
        });

        elem[i].addEventListener('mouseout', function(){
            this.classList.remove('hover');
        })

        let reset = document.querySelector(".btn");
        let beginningMsg = document.querySelector("#status div");
        reset.addEventListener("click", function(){
            for (let r =0 ; r < elem.length; r++){
                elem[r].classList.remove('X');
                elem[r].classList.remove("O");
                elem[r].textContent = "";
                elem[r].style.pointerEvents = 'auto';
            }
            currentPlayer = "X";
            statusDisplay.innerHTML = beginningMsg.getAttribute();
            gameState = ["", "", "", "", "", "", "", "", ""];
            statusDisplay.textContent = "Move your mouse over a square and click to place X or O";
          
        })

        
           
    } 
    
}
        

                








