let userscore = 0;
let compscore = 0;
let drawscore = 0;

const choices = document.querySelectorAll(".choice");
let Uscore = document.querySelector("#user-score");
let Cscore = document.querySelector("#comp-score");
let Dscore = document.querySelector("#draw-score");

const genrateComp = () => {
    const option = ["Rock","Paper","Scissor"];
    const randIdx = Math.floor(Math.random() * 3);
    return option[randIdx];
};
const playGame = (userChoice) =>{
    console.log("user choice = " , userChoice);
    let compChoice = genrateComp();
    console.log("Computer choice = " , compChoice);
    if(userChoice === compChoice){
        console.log("draw");
        drawscore ++ ;
    }
    else if(userChoice == "Paper" && compChoice == "Scissor"){
        console.log("Computer is winner");
        compscore ++ ;
    }
    else if(userChoice == "Paper" && compChoice == "Rock"){
        console.log("You are winner");
        userscore ++ ;
    }
    else if(userChoice == "Rock" && compChoice == "Paper"){
        console.log("Computer is winner");
        compscore ++ ;
    }
    else if(userChoice == "Rock" && compChoice == "Scissor"){
        console.log("You are winner");
        userscore ++ ;
    }
    else if(userChoice == "Scissor" && compChoice == "Rock"){
        console.log("Computer is winner");
        compscore ++ ;
    }
    else if(userChoice == "Scissor" && compChoice == "Paper"){
        console.log("You are winner");
        userscore ++ ;
    }
;
}
choices.forEach((choice)=>{
    choice.addEventListener("click",() =>{
        const userChoice = choice.getAttribute("id");
        console.log("choice was made");
        playGame(userChoice);
        Uscore.innerText = userscore;
        Cscore.innerText = compscore;
        Dscore.innerText = drawscore;
        
    });
});