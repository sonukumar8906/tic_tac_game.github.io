 const boxes = document.querySelectorAll('.box');
const reset =document.getElementById('reset');
let music = new Audio("run.mp3");
let over = new Audio("over.mp3");
let audioTurn = new Audio("turn.mp3");
let turn = 'x';
let gameOver = false;

const turnChange = () =>{
    return turn === "x"? "0" : "x";
}

// Function check for win
const checkWin = () => {
 const boxText = document.getElementsByClassName('text');
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [0,4,8],
    ]
    // console.log(wins[4]);
    wins.forEach(e =>{
    if((boxText[e[0]].innerText === boxText[e[1]].innerText) && 
    (boxText[e[2]].innerText === boxText[e[1]].innerText) && boxText[e[0]].innerText !==""){
        document.getElementById('info').innerText = boxText[e[0]].innerText + " has won"
        gameOver = true;
        document.querySelector('#imgbox').getElementsByTagName('img')[0].style.width="70px";
    }
    })
}


// game logic
Array.from(boxes).forEach(e =>{
    e.addEventListener('click', () =>{
        const textBox = e.querySelector('.text');
       if(textBox.innerText === ''){
        textBox.innerText = turn;
        turn = turnChange(); 
        audioTurn.play();
        checkWin();
        if(!gameOver){
            document.getElementById('info').innerText = "turn for" + turn;
           }
       }
    });
})
    
reset.addEventListener('click', () =>{
    const text = document.querySelectorAll('.text');
    text.forEach(e => {
        e.innerText = "";
    })
     turn = "x";
     gameOver = false;
     document.getElementById('info').innerText = "turn for" + turn; 
     document.querySelector('#imgbox').getElementsByTagName('img').style.width="0px";   
});