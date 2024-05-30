/*
    getComputerChoice() Function that returns a random string between rock paper scissors
    @Return String Computer's weapon choice
*/
function getComputerChoice() {
    const rand = Math.floor(Math.random() * 3); //to hold either 0, 1, or 2
    return rand; //0 is rock, 1 is paper, 2 is scissors
}

/*
    playRound() Function that starts a round of the game and returns the winner
    @Return String To let user know if they won the round or not
*/
function playRound(player, computer) {

    //if both have the same weapon, then tie
    if (player === computer) {
        return "It's a Tie!";
    }
    //if user has rock...
    else if (player === 0) {
        //...and computer has paper, then user loses
        if (computer === 1)
            return "You Lose! Kartana (paper) beats Golmon (rock)!";
        //...and computer has scissors, then user wins
        else
            return "You Win! Golmon (rock) beats Mega Scizor (scissors)!";
    }
    //if user has paper...
    else if (player === 1) {
        //...and computer has rock, then user wins
        if (computer === 0)
            return "You Win! Kartana (paper) beats Golmon (rock)!";
        //...and computer has scissors, then user loses
        else
            return "You Lose! Mega Scizor (scissors) beat Kartana (paper)!";
    } //Mega Scizor
    //if user has scissors...
    else if (player === 2) {
        //...and computer has paper, user wins
        if (computer === 1)
            return "You Win! Mega Scizor (scissors) beat Kartana (paper)!";
        //...and computer has rock, user loses
        else
            return "You Lose! Golmon (rock) beats Mega Scizor (scissors)!";
    }
    //if user has wrong input, then error
    else
        return "Error: Player did not choose weapon correctly."
}

/*
    game() Function that starts a new game and returns the winner of the entire game
    @Return String To let user know if they won the game or not
*/
function game(player) {

    if (playerPoints === 5 || computerPoints === 5) {
        return;
    }

    rounds++;
    roundNum.textContent += "\nRound " + rounds;
    //loop 5 times for 5 rounds per game
    let computer = getComputerChoice(); //get computer input

    // Play the Rock Throw sound if the player selects Golem
    if (player === 0) {
        const rockThrowSound = document.getElementById('rockThrowSound');
        rockThrowSound.currentTime = 2; // Start from the second 2 of the audio file
        rockThrowSound.play(); // Play the audio

        // Stop the playback after 2 second
        setTimeout(function() {
            rockThrowSound.pause();
        }, 2000);
    }

    // Play the Paper Cut sound if the player selects Kartana
    if (player === 1) {
        const paperThrowSound = document.getElementById('paperThrowSound');
        paperThrowSound.currentTime = 1; // Start from the second 1 of the audio file
        paperThrowSound.play(); // Play the audio

        // Stop the playback after 1 second
        setTimeout(function() {
            paperThrowSound.pause();
        }, 1000);
    }

    // Play the Scissors Cut sound if the player selects Mega Scizor
    if (player === 2) {
        const scissorsThrowSound = document.getElementById('paperThrowSound');
        scissorsThrowSound.currentTime = 5.5; // Start from the second 5.5 of the audio file
        scissorsThrowSound.play(); // Play the audio

        // Stop the playback after 1 second
        setTimeout(function() {
            scissorsThrowSound.pause();
        }, 1000);
    }

    // Display player's choice
    if (player === 0) {
        const para = document.createElement("p");
        para.textContent = "Rock";
        pChoice.appendChild(para);
    } else if (player === 1) {
        const para = document.createElement("p");
        para.textContent = "Paper";
        pChoice.appendChild(para);
    } else {
        const para = document.createElement("p");
        para.textContent = "Scissors";
        pChoice.appendChild(para);
    }

    // Display computer's choice
    if (computer === 0) {
        const para = document.createElement("p");
        para.textContent = "Rock";
        cChoice.appendChild(para);
    } else if (computer === 1) {
        const para = document.createElement("p");
        para.textContent = "Paper";
        cChoice.appendChild(para);
    } else {
        const para = document.createElement("p");
        para.textContent = "Scissors";
        cChoice.appendChild(para);
    }

    let s = playRound(player, computer); //start round

    //console.log(s); //display winner of round
    roundNum.textContent = s;
    //if player wins, then add point
    if (s.includes('Win'))
        playerPoints++;
    //if computer wins, then add point
    else if (s.includes('Lose'))
        computerPoints++;
    //if tie, add point to both
    else if (s.includes('Tie')) {
    }
    //if error, then error
    else
        return;

    score.textContent = playerPoints + " - " + computerPoints;


    if (playerPoints === 5 || computerPoints === 5) {
        roundNum.textContent = checkWinner();
    }

}

//start game
//console.log(game());
const rock = document.querySelector('.rock');
const paper = document.querySelector('.paper');
const scissors = document.querySelector('.scissors');
const pChoice = document.querySelector('.player-log');
const cChoice = document.querySelector('.computer-log');
const score = document.querySelector('.score');
const roundNum = document.querySelector('.round-number');


let rounds = 0;
let playerPoints = 0; //to hold player points
let computerPoints = 0; //to hold computer points


rock.addEventListener('click', function () {
    game(0);
});

paper.addEventListener('click', function () {
    game(1);
});

scissors.addEventListener('click', function () {
    game(2);
});

function checkWinner() {
    //if player points is greater than computer points, then player wins
    if (playerPoints > computerPoints) {
        return "You beat Team Rocket! You are the Winner!!! :D";
    }
    //if computer points is greater than player points, then computer wins
    else if (playerPoints < computerPoints) {
        return "Team Rocket Wins! Better Luck Next Time! :(";
    }
    //else, it is a tie (should not be possible)
    else
        return "ERROR: It's a tie?"
}

// Get the reset button element
const resetButton = document.getElementById('resetButton');

// Add event listener to the reset button
resetButton.addEventListener('click', function() {
    // Reload the window
    window.location.reload();
});


/**
 * Play, pause, and stop background music when buttons is clicked
 */
// Get the audio element with the ID 'backgroundMusic'
const backgroundMusic = document.getElementById('backgroundMusic');

// Get the button elements for play, pause, and stop
const playButton = document.getElementById('playButton');
const pauseButton = document.getElementById('pauseButton');
const stopButton = document.getElementById('stopButton');

// Add an event listener to the play button
playButton.addEventListener('click', function() {
    // When the play button is clicked, start playing the background music
    backgroundMusic.play();
});

// Add an event listener to the pause button
pauseButton.addEventListener('click', function() {
    // When the pause button is clicked, pause the background music
    backgroundMusic.pause();
});

// Add an event listener to the stop button
stopButton.addEventListener('click', function() {
    // When the stop button is clicked,
    // pause the background music and reset its playback position to the beginning
    backgroundMusic.pause();
    backgroundMusic.currentTime = 0; // Reset the audio to the beginning
});
