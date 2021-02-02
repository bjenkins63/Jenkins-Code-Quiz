  var score = document.querySelector(".win");
  var lose = document.querySelector(".lose");
  var timerElement = document.querySelector(".timer-count");
  var startButton = document.querySelector(".start-button");

  var scoreCounter = 0;
  var timer;
  var timerCount;

  // var questions = [
  //   {
  //     q: "what is this?",
  //     a: [
  //       "right answer", value = "1",
  //       "nope", value = "0",
  //       "nope", value = "0",
  //       "nope", value = "0",
  //     ]
  //   },
  //   {
  //     q: "Question 2",
  //     a: [
  //       "right answer", value = "1",
  //       "nope", value = "0",
  //       "nope", value = "0",
  //       "nope", value = "0",
  //     ]
  //   },
  //   {
  //     q: "Question 3",
  //     a: [
  //       "right answer", value = "1",
  //       "nope", value = "0",
  //       "nope", value = "0",
  //       "nope", value = "0",
  //     ]
  //   },
  //   {
  //     q: "Question 4",
  //     a: [
  //       "right answer", value = "1",
  //       "nope", value = "0",
  //       "nope", value = "0",
  //       "nope", value = "0",
  //     ]
  //   },
  //   {
  //     q: "Question 5",
  //     a: [
  //       "right answer", value = "1",
  //       "nope", value = "0",
  //       "nope", value = "0",
  //       "nope", value = "0",
  //     ]
  //   },
  //   {
  //     q: "Question 6",
  //     a: [
  //       "right answer", value = "1",
  //       "nope", value = "0",
  //       "nope", value = "0",
  //       "nope", value = "0",
  //     ]
  //   },

  // ];

  var questions = [];
  var ansers = ["variable", "array", "modulus", "object", "function", "string", "boolean"];

  startButton.addEventListener("click", startGame);
  // Calls init() so that it fires when page opened
  init();
  scoreCounter = 0;
  setScore()
  function setScore() {
    score.textContent = scoreCounter;
    localStorage.setItem("scoreCount", scoreCounter);
  }

  function startTimer() {
    // Sets timer
    timer = setInterval(function () {
      timerCount--;
      timerElement.textContent = timerCount;

      if (timerCount === 0)
        // Clears interval
        clearInterval(timer);
        loseGame();
      }
    , 1000);
  }

  function startGame() {
    timerCount = 20;
    startButton.disabled = true;
    startTimer()
  }

  // These functions are used by init
  function getWins() {
    // Get stored value from client storage, if it exists
    var storedWins = localStorage.getItem("winCount");
    // If stored value doesn't exist, set counter to 0
    if (storedWins === null) {
      winCounter = 0;
    } else {
      // If a value is retrieved from client storage set the winCounter to that value
      winCounter = storedWins;
    }
    //Render win count to page
    win.textContent = winCounter;
  }


  // function getlosses() {
  //   var storedLosses = localStorage.getItem("loseCount");
  //   if (storedLosses === null) {
  //     loseCounter = 0;
  //   } else {
  //     loseCounter = storedLosses;
  //   }
  //   lose.textContent = loseCounter;
  // }


  // The winGame function is called when the win condition is met
  // function winGame() {
  //   wordBlank.textContent = "YOU WON!!! ";
  //   winCounter++
  //   startButton.disabled = false;
  //   setWins()
  // }

  // The loseGame function is called when timer reaches 0
  // function loseGame() {
  //   wordBlank.textContent = "GAME OVER";
  //   loseCounter++
  //   startButton.disabled = false;
  //   setLosses()
  // }

  // The setTimer function starts and stops the timer and triggers winGame() and loseGame()

  // function checkWin() {
  //   // If the word equals the blankLetters array when converted to string, set isWin to true
  //   if (chosenWord === blanksLetters.join("")) {
  //     // This value is used in the timer function to test if win condition is met
  //     isWin = true;
  //   }
  // }

  // // Tests if guessed letter is in word and renders it to the screen.
  // function checkLetters(letter) {
  //   var letterInWord = false;
  //   for (var i = 0; i < numBlanks; i++) {
  //     if (chosenWord[i] === letter) {
  //       letterInWord = true;
  //     }
  //   }
  //   if (letterInWord) {
  //     for (var j = 0; j < numBlanks; j++) {
  //       if (chosenWord[j] === letter) {
  //         blanksLetters[j] = letter;
  //       }
  //     }
  //     wordBlank.textContent = blanksLetters.join(" ");
  //   }
  // }

  // // Attach event listener to document to listen for key event
  // document.addEventListener("keydown", function(event) {
  //   // If the count is zero, exit function
  //   if (timerCount === 0) {
  //     return;
  //   }
  //   // Convert all keys to lower case
  //   var key = event.key.toLowerCase();
  //   var alphabetNumericCharacters = "abcdefghijklmnopqrstuvwxyz0123456789 ".split("");
  //   // Test if key pushed is letter
  //   if (alphabetNumericCharacters.includes(key)) {
  //     var letterGuessed = event.key;
  //     checkLetters(letterGuessed)
  //     checkWin();
  //   }
  // });

    // function startGame() {
  //   timerCount = 10;
  //   // Prevents start button from being clicked when round is in progress
  //   startButton.disabled = true;
  //   startTimer()
  // }

  // The init function is called when the page loads 
  // function init() {
  //   getWins();
  // }



