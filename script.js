// Declare userScore and computerScore variables and set default score to 0
let userScore = 0;
let computerScore = 0;
// Declare userScore_div and computerScore_div and use getElementId so the program can grab and change the div
const userScore_div = document.getElementById("player-current-score");
const computerScore_div = document.getElementById("computer-current-score");
// Declare result_div variable and use querySelector so program can change the result text after each round
const result_h2 = document.querySelector(".score-counts > .result > h2");
// Declare rock paper and scissors divs variables and use getElementId so the program knows which elements are which
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");


while ((userScore <= 5) && (computerScore <= 5)) {
    // getHumanChoice function that calls playRound function passing either r, p, or s as an argument for humanChoice's value
    function getHumanChoice() {
        // If user clicks on rock image, register in program they clicked on rock image
        // Then pass rock as an argument for userChoice for playRound function
        rock_div.addEventListener("click", function () {
            playRound("rock");
        });
        // If user clicks on paper image, register in program they clicked on paper image
        // Then pass paper as an argument for userChoice for playRound function
        paper_div.addEventListener("click", function () {
            playRound("paper");
        });
        // If user clicks on scissors image, register in program they clicked on scissors image
        // Then pass scissors as an argument for userChoice for playRound function     
        scissors_div.addEventListener("click", function () {
            playRound("scissors");
        });
    }
    
    // Function that gets the computersChoice and simply returns it (used in playRound function)
    function getComputerChoice() {
        // Create options array with rock, paper, and scissors
        const options = ["rock", "paper", "scissors"];
        // Declare computerSelection variable - random number 1 through 3
        const computerSelection = Math.floor(Math.random() * 3);
        // Return options array element at index of computerSelection
        return options[computerSelection];
    }
    
    // Function to return the string, but with the first letter capitalized
    function toCapitalize(word) {
        if (word === "rock") {
            return "Rock";
        } else if (word === "paper") {
            return "Paper";
        } else {
            return "Scissors";
        }
    }
    
    // Function that gets called if user wins the round in playRound function
    function win(userChoice, computerChoice) {
        console.log("You win!")
        // Increase userScore by one
        userScore++;
        // Updated user's score on the webpage instead of just console logging it
        userScore_div.innerHTML = userScore;
        // Updated computer's score on the webpage instead of just console logging it
        computerScore_div.innerHTML = computerScore;  
        // Print in the results box that userChoice var beats computerChoice var
        result_h2.innerHTML = toCapitalize(userChoice) + " beats " + toCapitalize(computerChoice);  
    }
    
    // Function that gets called if user loses the round in playRound function
    function lose(userChoice, computerChoice) {
        console.log("You lose!");
        // Increase computerScore by one
        computerScore++;
        // Updated computer's score on the webpage instead of just console logging it
        userScore_div.innerHTML = userScore;
        // Updated computer's score on the webpage instead of just console logging it
        computerScore_div.innerHTML = computerScore;  
        // Print in the results box that computerChoice var beats userChoice var
        result_h2.innerHTML = toCapitalize(computerChoice) + " beats " + toCapitalize(userChoice);  
    }
    
    // Function that gets called if user and computer ties the round in playRound function
    function tie(userChoice, computerChoice) {
        console.log("It was a tie! Scores will not be effected.");
        // Print in the results box that userChoice var ties with computerChoice var
        result_h2.innerHTML = toCapitalize(userChoice) + " ties " + toCapitalize(computerChoice);
    }
    
    // playRound function, compares the values of humanChoice and computerChoice to determine who wins
    function playRound(userChoice) {
        // Call getComputerChoice function and store it's result in computerChoice var
        let computerChoice = getComputerChoice();
        // Series of switch cases that determine whether tie, win, or lose functions are called
        // With every function call, userChoice and computerChoice are passed as arguments
        switch (userChoice + " " + computerChoice) {
            case "rock rock":
            case "paper paper":
            case "scissors scissors":
                tie(userChoice, computerChoice);
                break;
            case "rock scissors":
            case "paper rock":
            case "scissors paper":
                win(userChoice, computerChoice);
                break;
            case "rock paper":
            case "paper scissors":
            case "scissors rock":
                lose(userChoice, computerChoice);
                break;
        }
    }
    // humanChoice var stores value returned from getHumanChoice function call
    const humanChoice = getHumanChoice();
    // Call playRound function
    // AT THE MOMENT I CAN'T FIGURE OUT WHY THIS KEEPS RUNNING, IT'S SUPPOSED TO STOP AFTER SOMEONE REACHES 5 WINS
    playRound(humanChoice);
    // Break from function -- DOESN'T WORK AT THE MOMENT --
    break;
}

// Check to see who won the game and print so accordinly
if (userScore > computerScore) {
    result_h2.innerHTML = "Congrats, you won!";
} else if (userScore < computerScore) {
    result_h2.innerHTML = "Sorry, you lost!";
} else {
    result_h2.innerHTML = "Wow, you both tied!";
}

