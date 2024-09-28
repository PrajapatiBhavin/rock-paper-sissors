

//console.log("Rock Paper Scissors");

//Global variables to hold scores of each party (PC and Player)
let pc_score = 0; p_score = 0;

const game_values = ["Rock", "Paper", "Scissors", "Incorrect option"];

// Function to get computer's choice
function getComputerChoice() {
    let pc_choice = Math.floor(Math.random() * 3);
    //console.log("Computer: " + game_values[pc_choice]);
    return pc_choice;
}

//Funtion to get Player"s choice
function getUserChoice(e) {
    /*let option = prompt("Enter your choice (Rock, Paper, Scissors):").toLowerCase();
    switch (option) {
        case "rock":
            p_choice = 0;
            break;

        case "paper":
            p_choice = 1;
            break;

        case "scissors":
            p_choice = 2;
            break;

        default:
            //console.log("Enter correct option");
            p_choice = 3;
            break;
    }
    console.log("Player: " + game_values[p_choice]);
    return p_choice;
    */

    let target = e.target;
    switch (target.id) {
        case 'rock':
            user_selection = 0;
            //console.log("Player: Rock");
            break;
        case 'paper':
            user_selection = 1;
            //console.log("Player: Paper");
            break;
        case 'scisssors':
            user_selection = 2;
            //console.log("Player: Scissors");
            break;
        default:
            //console.log("Enter correct option");
            user_selection = 3; // since we are now using buttons, there is no need to uncheck for wrong keypress
            break;
    }
    const computer_selection = getComputerChoice();
    playGame(user_selection, computer_selection);
}

//Funtion for Game logic
/* 
0 --> Rock
1 --> Paper
2 --> Scissors
3 --> invalid option

***Rules***
Rock (0)    > Scissors (2)
Paper (1)   > Rock(0)
Scissors (2) > Paper(1)
*/

function playGame(user_input, pc_input) {
    if ((user_input == 0 && pc_input == 2) || (user_input == 1 && pc_input == 0) || (user_input == 2 && pc_input == 1)) {
        //console.log("You won! " + game_values[user_input] + " beats " + game_values[pc_input]);
        document.getElementsByClassName("result")[0].textContent = `Result: You won! ${game_values[user_input]} beats ${game_values[pc_input]}`;

        p_score = p_score + 1;
    }
    else if (user_input == pc_input) {
        //console.log("It's a tie or the user entered incorrect option");
        document.getElementsByClassName("result")[0].textContent = `Result: It's a tie...`;
    }
    else {
        //console.log("You loose! " + game_values[pc_input] + " beats " + game_values[user_input]);
        document.getElementsByClassName("result")[0].textContent = `Result: You loose! ${game_values[pc_input]} beats ${game_values[user_input]}`;
        pc_score = pc_score + 1;
    }
    document.getElementsByClassName("playerMove")[0].textContent = `Player score: ${p_score}----------Player choose: ${game_values[user_input]}`;
    document.getElementsByClassName("pcMove")[0].textContent = `Computer score: ${pc_score}----------Computer choose: ${game_values[pc_input]}`;

    if(p_score == 5 || pc_score == 5){
        if(p_score == 5){
            document.getElementsByClassName("result")[0].textContent = `Result: Game Over. You won this game! Woho!!!`;
        }
        else{
            document.getElementsByClassName("result")[0].textContent = `Result: Game Over. You loose this game! Better luck next time...`;
        }
        p_score = pc_score = 0;
    }
}

/*
// Main flow of code execution. 
for (let count = 0; count < 5; count++) {
    const user_selection = getUserChoice();
    const computer_selection = getComputerChoice();

    playGame(user_selection, computer_selection);
}
console.log(`Final scores are as follows: \n Player: ${p_score} \n Computer: ${pc_score}`);

//Wohu!!! it works! ;)
*/

// Adding JS and UI to play the game!
let user_selection = 0;
let allOpt = document.querySelector('#all');
allOpt.addEventListener("click", getUserChoice);
//console.log(`allOpt value ${user_selection}`);

