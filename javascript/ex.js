let imps = document.getElementsByClassName("guess__input")


//stores the list of guesses
let guesses;

//stores the correct number
let correctNumber;

//stores the random number
let getRandomNumber = Math.floor((Math.random() * 100) + 1)

const tooHigh = "Your guess is too high!"
const high = "Your guess is high!"
const tooLow = "Your guess is too low!"
const low = "Your guess is low!"
const victory = "Awesome job, you got it!";


//1. Initialize the game with default values
function initializeGame() {
    correctNumber = getRandomNumber;
    guesses = [];
    displayHistory()
    resetResultContent()
    document.querySelector(".guess__input").value = "";
    document.getElementsByClassName("guess__result").innerHTML = ""
}

//2. Play the game

function playGame() {
    let guessedNum = document.querySelector(".guess__input").value;
    guesses.push(guessedNum);
    displayHistory();
    displayResult(guessedNum)
}

//Display history in HTML
function displayHistory() {
    let index = guesses.length - 1;
    let list = "<ul class='list-group'>"
    while (index >= 0) {
        list +=
            "<li class='list-group-item'>" +
            "You guessed " + guesses[index] +
            "</li>";
        index -= 1
    }
    list += '</ul>'
    document.getElementById("history").innerHTML = list;
}


function displayResult(guessedNum) {
    if (guessedNum > correctNumber + 20) {
        showNumResult(tooHigh, "warning");
    } else if (guessedNum < correctNumber - 20) {
        showNumResult(tooLow, "warning");
    } else if (guessedNum > correctNumber) {
        showNumResult(high, "warning");
    } else if (guessedNum < correctNumber) {
        showNumResult(low, "warning");
    } else {
        showNumResult(victory, "won");
    }

    if (guesses.length >= 10) {
        showNumResult("You Lost", "lost");
        initializeGame()
        return
    }

}


function showNumResult(text, info) {
    let dialog = getDialog(info, text)
    document.querySelector(".guess__result").innerHTML = dialog
}

function getDialog(dialogType, text) {
    let dialog;
    switch (dialogType) {
        case "warning":
            dialog = "<div class='alert alert-warning' role='alert'>"
            break;
        case "won":
            dialog = "<div class='alert alert-success' role='alert'>"
            break
        case "lost":
            dialog = "<div class='alert alert-danger' role='alert'>"
            break
    }
    dialog += text + "</div>";
    return dialog
}

function resetResultContent() {
    document.querySelector(".guess__result").innerHTML = ""
}


window.onload = function () {
    initializeGame();
    document.getElementById("check").addEventListener("click", playGame);
    document.getElementById("restart").addEventListener("click", initializeGame)

}

