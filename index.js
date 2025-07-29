

let userScore=0;
let compScore=0;
const userScore_span= document.getElementById("user-score");
const compScore_span= document.getElementById("comp-score");
const scoreBoard_div=document.querySelector(".score-board");
const result_div=document.querySelector(".result");
const rock_b=document.getElementById("r")
const paper_b=document.getElementById("p")
const scissors_b=document.getElementById("s")



function getComputerChoices(){
    const choices =["r","p","s"];
   const randomNumber=Math.floor(Math.random()*3);
   return choices[randomNumber];
    

}
function converToWord(letter){
    if(letter==="r") return "Rock";
    else if(letter==="p") return "Paper";
    else return "Scissors";
}
function win(userChoice,computerChoice){
    userScore++;
    userScore_span.innerHTML= userScore;
    const smallUserWord="user".fontsize(3).sup();
    const smallCompWord="comp".fontsize(3).sup();

    result_div.innerHTML=`You win ${converToWord(userChoice)}${smallUserWord} beats ${converToWord(computerChoice)}${smallCompWord}!`;
    
    document.getElementById(userChoice).classList.add('green-glow');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('green-glow');
    }, 300);
    checkGameOver()
}
function lose(userChoice,computerChoice){
    compScore++;
    compScore_span.innerHTML=compScore;
    const smallUserWord="user".fontsize(3).sup();
    const smallCompWord="comp".fontsize(3).sup();
    result_div.innerHTML=`You lost ${converToWord(computerChoice)}${smallCompWord} beats ${converToWord(userChoice)}${smallUserWord}!`;
    document.getElementById(userChoice).classList.add('green-red');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('green-red');
    }, 300);
    checkGameOver()
}
function draw(userChoice,computerChoice){
    const smallUserWord="user".fontsize(3).sup();
    const smallCompWord="comp".fontsize(3).sup();
    result_div.innerHTML=`It's draw ${converToWord(userChoice)}${smallUserWord} equals ${converToWord(computerChoice)}${smallCompWord}!`;
    document.getElementById(userChoice).classList.add('green-grey');
    setTimeout(() => {
        document.getElementById(userChoice).classList.remove('green-grey');
    }, 300);
}
console.log(getComputerChoices())
function game(userChoice){
    const computerChoice = getComputerChoices();
    switch(userChoice+computerChoice){
        case"rs":
        case"sp":
        case"pr":
            win(userChoice,computerChoice);
            break;
        case"rp":
        case"ps":
        case"sr":
            lose(userChoice,computerChoice);
            break;
        case"rr":
        case"pp":
        case"ss":
            draw(userChoice,computerChoice);
            break;
    }
    
    
}
function checkGameOver() {
    if (userScore === 5) {
        result_div.innerHTML = "🎉 You reached 5 points and won the game! Game will reset.";
        resetGame();
    } else if (compScore === 5) {
        result_div.innerHTML = "💀 Computer reached 5 points. You lost the game! Game will reset.";
        resetGame();
    }
}
function resetGame() {
    setTimeout(() => {
        userScore = 0;
        compScore = 0;
        userScore_span.innerHTML = userScore;
        compScore_span.innerHTML = compScore;
        result_div.innerHTML = "Game reset. Make your move!";
    }, 1000); // изчаква 2.5 секунди, за да се покаже съобщението
}
function main(){
rock_b.addEventListener('click',function()
{
    game("r");
    
})
paper_b.addEventListener('click',function()
{
    game("p");
})
scissors_b.addEventListener('click',function()
{
game("s");
})
};

main();