const words = ["3dhubs",
    "marvin",
    "print",
    "filament",
    "order",
    "layer"
]

var wrongGuess = []
var underscores = []
var correctGuess = []
var attempts = 4

//using math.random to generate a random integer we use to pick our word out of the array
var randomNumber = Math.floor(Math.random() * words.length)

var answerSection = document.getElementById('answer')
var wordround = document.getElementById('gameword')

// selecting a random word from the words array
var gameWord = wordround.innerHTML = String(words[randomNumber]);

console.log('this is gameWord' + gameWord)

//guessing functionality test
var guessed = document.getElementById('guessing').addEventListener("keydown",
    userGuess)

var letterUsed = document.getElementById('letterused')

//initalising the game to create the spaces required for guesses

function init() {
   

    gameWord.split('').forEach(() => {
        underscores.push('_');
    });
    answerSection.innerHTML = underscores.join(" ");
}
init()

function validateAnswer(char) {
    var charArray = []
    var letterArray = gameWord.split('')
    letterArray.forEach((letter, index) => {
        if (letter === char) {
            charArray.push(index)
        }
    });
    charArray.forEach(position => {
        underscores[position] = char
    });

    answerSection.innerHTML = underscores.join(" ");
}

function userGuess(e) {
    

    // if the guess array is longer 
    if (attempts < wrongGuess.length) {
        validateWin(underscores);
        
    }
   

    var char = String.fromCharCode(e.keyCode).toLowerCase()

    if (gameWord.includes(char)) {
        validateAnswer(char);

    } else {

        wrongGuess.push(char.toLowerCase());
        letterUsed.innerHTML = wrongGuess;

    }
    if (!underscores.includes('_')){
        alert('winner winner chicken dinner')
        recordScore()
    }
    console.log('this is underscores '+ underscores)

}


function validateWin(underscores) {
    underscores.forEach(undescore => {
        if (undescore === '_') {
            alert('you have lost the game')
            location.reload()

        }
    });
   
}

//recording a user score
function recordScore(){
    var score = sessionStorage.getItem(parseInt('score'));

    var scoreElement =document.getElementById('score');
    var currentScore = parseInt(score + 10);
    console.log('this is currentScore ' + currentScore)
    scoreElement.innerHTML = currentScore;

    sessionStorage.setItem('currentScore', scoreElement.innerHTML)
}

