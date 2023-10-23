// Adding class square to the boxes.
const elements= document.querySelector("#board").querySelectorAll("div");
for(const elem of elements){
    elem.classList.add("square");
    elem.addEventListener('mouseover',function e(){elem.classList.add("hover")});
    elem.addEventListener('mouseout',function f(){elem.classList.remove("hover")});
        }




let player='X';
const boxes=document.querySelectorAll(".square");
const gameArray=['','','','','','','','',''];// Array to store game values.
const wins=[[0,1,2],[3,4,5],[6,7,8],[2,4,6],[0,3,6],[1,4,7],[2,5,8],[0,4,8]] //Possible winning combinations


// When a box is clicked.
function whenClicked(event){
    const box=event.target
    const boxIndex= Array.from(boxes).indexOf(box)
    
    if (gameArray[boxIndex]==''){

        // Adding css class to X and O
        if (player=='X'){box.classList.add("X");}
        else if(player=='O'){ box.classList.add("O")}

        gameArray[boxIndex]=player;
        box.innerHTML=player;
        console.log(gameArray)

        // If a player wins, the game ends.
        if(ifwon(player)){
           document.querySelector("#status").innerHTML=`Congratulations! ${player} is the Winner!`;
           boxes.forEach(box=>(box.removeEventListener('click',whenClicked)))

        }
        // If not, the other player enters a value.
        else {player= player== 'X'?'O':'X'
            
            }

    }
}

// Verifies if a player has won
function ifwon(game){
 for (const comb of wins){
   if (comb.every(ind=> gameArray[ind]===game)){
     return true;
   }
}
return false;
}


//Adds functionality to the boxes.
boxes.forEach(box => (box.addEventListener('click',whenClicked)))
        

// Allows the page to be refreshed for a new game.
document.querySelector(".btn").addEventListener('click',function a(){
    for(const elem of boxes){
       location.reload()

    }
})