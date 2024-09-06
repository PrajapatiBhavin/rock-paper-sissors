

console.log("Rock Paper Sissors");

//Global variables to hold scores of each party (PC and Player)
let pc_score = 0; p_score = 0;

const game_values = ["Rock", "Paper", "Sissors", "Incorrect option"];

// Function to get computer's choice
function getComputerChoice(){
let pc_choice = Math.floor(Math.random() * 3);
console.log("Computer: " + game_values[pc_choice]);
return pc_choice;
}

//Funtion to get Player"s choice
function getUserChoice(){
let option =  prompt("Enter your choice (Rock, Paper, Sissors):").toLowerCase();
switch (option){
    case "rock":
        p_choice = 0;
        break;

    case "paper":
        p_choice = 1;
        break;

    case "sissors":
        p_choice = 2; 
        break;

    default:
        //console.log("Enter correct option");
        p_choice = 3;
        break;
}
console.log("Player: " + game_values[p_choice]);
return p_choice;
}

//Funtion for Game logic
/* 
0 --> Rock
1 --> Paper
2 --> Sissors
3 --> invalid option

***Rules***
Rock (0)    > Sissors (2)
Paper (1)   > Rock(0)
Sissors (2) > Paper(1)
*/

function playGame(user_input, pc_input){
    if ((user_input == 0 && pc_input == 2) || (user_input == 1 && pc_input == 0) || (user_input == 2 && pc_input == 1)) {
        console.log("You won! " + game_values[user_input] + " beats " + game_values[pc_input]);
        p_score = p_score + 1;
    }
    else if (user_input == pc_input || user_input == 3){
        console.log ("It's a tie or the user entered incorrect option");
    }
    else{
        console.log("You loose! " + game_values[pc_input] + " beats " + game_values[user_input]);
        pc_score = pc_score + 1;
    }
}

// Main flow of code execution. 
for(let count = 0; count< 5; count++){
    const user_selection = getUserChoice();
    const computer_selection = getComputerChoice();
    
    playGame(user_selection, computer_selection);
}
console.log(`Final scores are as follows: \n Player: ${p_score} \n Computer: ${pc_score}`);

//Wohu!!! it works! ;)

