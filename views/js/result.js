// Complete Logic Of Game Inside This Function
const game = () => {
    let playerScore = 0;
    let computerScore = 0;
    let moves = 0;

    const playGame = () => {
        const rockBtn = document.querySelector('.rock');
        const paperBtn = document.querySelector('.paper');
        const scissorBtn = document.querySelector('.scissor');
        const playerOptions = [rockBtn, paperBtn, scissorBtn];
        const computerOptions = ['Rock', 'Paper', 'Scissors']
        const remainingMoves = document.querySelector('.remainingMoves');
        var currentMoves;

        remainingMoves.addEventListener('change', function(e) {
            currentMoves = e.target.value;

            // Hide Option Until User Enters Number Of Moves
            if (currentMoves > 0 && typeof(parseInt(currentMoves)) == 'number') {

                document.getElementsByClassName("options")[0].style.display = 'inline-block';
                document.getElementsByClassName("move")[0].style.display = 'inline-block';
                document.getElementsByClassName("movesleft")[0].style.display = 'inline-block';
                currentGame(currentMoves);
            } else {
                document.getElementsByClassName("options")[0].style.display = 'none';
                document.getElementsByClassName("move")[0].style.display = 'none';
                document.getElementsByClassName("movesleft")[0].style.display = 'inline-block';

            }

        })


        // Calculate Current Number Of Moves Remaining
        const currentGame = (currentMoves) => {
            playerOptions.forEach(option => {

                option.addEventListener('click', function() {
                    const movesLeft = document.querySelector('.movesleft');
                    moves++;
                    movesLeft.innerText = `Moves Left: ${currentMoves - moves}`;
                    const choiceNumber = Math.floor(Math.random() * 3);
                    const computerChoice = computerOptions[choiceNumber];

                    // Function To Check Who Wins
                    winner(this.innerText, computerChoice)

                    // Calling "gameOver" Function After User Has Completed His Moves
                    if (moves == currentMoves) {
                        gameOver(playerOptions, movesLeft);
                    }
                })
            })

        }
    }

    // Function To Decide The Winner
    const winner = (player, computer) => {
        const result = document.querySelector('.result');
        const selection = document.querySelector('.selection');
        const playerScoreBoard = document.querySelector('.p-count');
        const computerScoreBoard = document.querySelector('.c-count');


        if (player === computer) {
            result.textContent = 'Tie';
            selection.textContent = "Computer Choice: " + computer;

        } else if (player == 'Rock') {
            if (computer == 'Paper') {
                result.textContent = 'Computer Won';
                computerScore++;
                selection.textContent = "Computer Choice: " + computer;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won'
                playerScore++;
                selection.textContent = "Computer Choice: " + computer;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player == 'Scissors') {
            if (computer == 'Rock') {
                result.textContent = 'Computer Won';
                computerScore++;
                selection.textContent = "Computer Choice: " + computer;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                selection.textContent = "Computer Choice: " + computer;
                playerScoreBoard.textContent = playerScore;
            }
        } else if (player == 'Paper') {
            if (computer == 'Scissors') {
                result.textContent = 'Computer Won';
                computerScore++;
                selection.textContent = "Computer Choice: " + computer;
                computerScoreBoard.textContent = computerScore;
            } else {
                result.textContent = 'Player Won';
                playerScore++;
                selection.textContent = "Computer Choice: " + computer;
                playerScoreBoard.textContent = playerScore;
            }
        }
    }

    // Function To Run When Game Is Over
    const gameOver = (playerOptions, movesLeft) => {
        const chooseMove = document.querySelector('.move');
        const result = document.querySelector('.result');
        const reloadBtn = document.querySelector('.reload');

        playerOptions.forEach(option => {
            option.style.display = 'none';
        })
        chooseMove.innerText = 'Game Over!!'
        movesLeft.style.display = 'none';

        if (playerScore > computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Won The Game'
            result.style.color = '#308D46';
        } else if (playerScore < computerScore) {
            result.style.fontSize = '2rem';
            result.innerText = 'You Lost The Game';
            result.style.color = 'red';
        } else {
            result.style.fontSize = '2rem';
            result.innerText = 'Tie';
            result.style.color = 'grey'
        }
        reloadBtn.innerText = 'Restart';
        reloadBtn.style.display = 'flex'
        reloadBtn.addEventListener('click', () => {
            window.location.reload();
        })
    }


    // Calling "playGame" Function Inside the "game"
    playGame();

}

// Calling The Game Function
game();