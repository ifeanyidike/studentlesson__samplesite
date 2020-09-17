//stores the list of guesses

//stores the correct number

//stores the random number



//1. Initialize the game with default values

function initializeGame() {
    //1. set correct number to the random no.
    //2. initialize guesses to empty array
    //3. reset the result content
    //4. rest the guess input
}

//2. Play the game

function playGame() {

    //1. push the guessed number (no. in the .guess__input) to guesses array
    //2. display the history.
    //3. display the result
}

//3. Display history in HTML
function displayHistory() {
    //1. set index to the index of guesses
    //2. create an unordered list. call it list. Give it a bootstrap class of list-group
    //3. create a while loop as long as index >=0.
    //4. add each list item with class list-group-item and value "You guessed + [each guess]"
    //5. decrement the index
    //6. close the unordered list
    //7. add this to the list history's inner html
}

//4 Set up the displayResult
function displayResult(guessedNum) {
    //If the guessed Number is great than correct number + 20, show a warning that its too high
    //If the guessed Number is less than correct number - 20, show a warning that its too low
    //If the guessed Number is great than correct number, show a warning that its high
    //If the guessed Number is less than correct number, show a warning that its low
    //if  the user got it, show that he won

    //if the list of guesses is up to 10, show the user that he lost. reset the game.

}

//when the window loads
window.onload = function () {
    //first initialize the game

    //if the user clicks the check button, play the game.

    //if hte user clicks restart, re-initialize the game.

}