let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector(".Resetbutton");
let newGamebtn = document.querySelector('.newgamebtn');
let ms = document.querySelector(".msg");
let msg = document.querySelector(".msgg");

let turn0 = true;//palyerO

const showWinner = (winner) => {
    msg .innerHTML=`Congratulations, Winner is ${winner} `;
    msgg.classList.remove("hide");
}

const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => 
{
    box.addEventListener("click" , () => 
    {
        console.log("box was clicked");
        //box.innerText = "A";
        if(turn0 === true)
            {
                box.innerText = "O";
                turn0 = false;
            }
            else
            {
                box.innerText = "X";
                turn0 = true;
            }
            box.disabled = true;

            checkWinner();
    });
});

const checkWinner = () => 
    {
        for(let patterns of winPatterns)
            {
                let pos0val = boxes[patterns[0]].innerText;
                let pos1val = boxes[patterns[1]].innerText;
                let pos2val = boxes[patterns[2]].innerText;

                if(pos0val != "" && pos0val != "" && pos0val != "")
                    {
                        if(pos0val === pos1val && pos1val === pos2val)
                            {
                                showWinner(pos0val);
                            }
                    }
            }
    };