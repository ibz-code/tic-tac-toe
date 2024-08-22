let boxes = document.querySelectorAll(".box")
let reset = document.querySelector(".Reset")
let newGameBtn = document.querySelector(".newGame")
let msgContainer = document.querySelector(".msg-container")
let msg = document.querySelector("#msg")
let turn0 = true;

const winPatterns = [
    [0, 1, 2], [0, 3, 6], [0, 4, 8],
    [1, 4, 7], [2, 5, 8], [2, 4, 6],
    [3, 4, 5], [6, 7, 8]
]

let clicks = 1;
boxes.forEach((box) =>{
    box.addEventListener("click", () =>{
        if(turn0){
            box.innerText = "O";
            turn0 = false;
            box.style.color = "white";            
        }else{
            box.innerText = "X";
            turn0 = true;
            box.style.color = "black";
        }
        box.disabled = true;
        checkWiner();
        clicks++;
        
    })
})

const resetGame = () =>{
    clicks = 1
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide")
}

const showWinner = (winner) =>{
    msg.innerText = `Congratulations the winner is player ${winner}`
    msgContainer.classList.remove("hide")
}

const disableBoxes = () =>{
    for(let box of boxes){
        box.disabled = true;
    }
}

const enableBoxes = () =>{
    for(let box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}

const draw = () =>{
    msg.innerText = "The game is draw";
    msgContainer.classList.remove("hide");
}

const checkWiner = () =>{
    for (let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;
        if (pos1Val != "" && pos2Val != "" && pos3Val != ""){
            if(pos1Val === pos2Val && pos2Val === pos3Val){
                disableBoxes();
                showWinner(pos1Val);  
            }
        }
    }
    if(clicks === 9){
        draw();
    }
}

reset.addEventListener("click", resetGame);
newGameBtn.addEventListener("click", resetGame);