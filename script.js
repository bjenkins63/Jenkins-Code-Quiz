var score = document.querySelector(".score");
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var scoreCounter = 0;
var timer;
var timerCount = "";


function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

function startGame() {
  isScore = false;
  timerCount = 20;
  start-button.disabled; true;
  startTimer()
}

var quiz = {

  data: [
    {
      q: "Which player has won the most major championships in his career? (18)",
      o: ["Arnold Palmer", "Jack Nicklas", "Brad Faxon", "Tiger Woods"],
      a: 1
    },
    {
      q: "Which year was golf’s last appearance at the Olympic Games before returning to the line-up of sports in 2016?",
      o: ["1962", "1976", "1890", "1904"],
      a: 3
    },
    {
      q: "How many times has Tiger Woods won The Masters?",
      o: ["7", "12", "5", "2"],
      a: 2
    },
    {
      q: "The 11th, 12th and 13th holes at Augusta National are collectively known by what nickname?",
      o: ["Amen Corner", "The Snake Pit", "Magnolia Lane", "Hell on Earth"],
      a: 0
    },
    {
      q: "How many clubs are golfers allowed to carry in their bag during a professional competition?",
      o: ["10", "17", "11", "14"],
      a: 3
    }
  ],

  // (A2) HTML ELEMENTS
  hWrap: null, // HTML quiz container
  hQn: null, // HTML question wrapper
  hAns: null, // HTML answers wrapper

  // (A3) GAME FLAGS
  now: 0, // current question
  score: 0, // current score

  // (B) INIT QUIZ HTML
  init: function () {
    // (B1) WRAPPER
    quiz.hWrap = document.getElementById("quizWrap");

    // (B2) QUESTIONS SECTION
    quiz.hQn = document.createElement("div");
    quiz.hQn.id = "quizQn";
    quiz.hWrap.appendChild(quiz.hQn);

    // (B3) ANSWERS SECTION
    quiz.hAns = document.createElement("div");
    quiz.hAns.id = "quizAns";
    quiz.hWrap.appendChild(quiz.hAns);

    // (B4) GO!
    quiz.draw();
  },

  // (C) DRAW QUESTION
  draw: function () {
    // (C1) QUESTION
    quiz.hQn.innerHTML = quiz.data[quiz.now].q;

    // (C2) OPTIONS
    quiz.hAns.innerHTML = "";
    for (let i in quiz.data[quiz.now].o) {
      let radio = document.createElement("input");
      radio.type = "radio";
      radio.name = "quiz";
      radio.id = "quizo" + i;
      quiz.hAns.appendChild(radio);
      let label = document.createElement("label");
      label.innerHTML = quiz.data[quiz.now].o[i];
      label.setAttribute("for", "quizo" + i);
      label.dataset.idx = i;
      label.addEventListener("click", quiz.select);
      quiz.hAns.appendChild(label);
    }
  },

  select: function () {
    // (D1) DETACH ALL ONCLICK
    let all = quiz.hAns.getElementsByTagName("label");
    for (let label of all) {
      label.removeEventListener("click", quiz.select);
    }

    // (D2) CHECK IF CORRECT
    let correct = this.dataset.idx == quiz.data[quiz.now].a;
    if (correct) {
      quiz.score++;
      this.classList.add("correct");
    } else {
      this.classList.add("wrong");
    }

    // (D3) NEXT QUESTION OR END GAME
    quiz.now++;
    setTimeout(function () {
      if (quiz.now < quiz.data.length) { quiz.draw(); }
      else {
        quiz.hQn.innerHTML = `You have answered ${quiz.score} of ${quiz.data.length} correctly.`;
        quiz.hAns.innerHTML = "";
      }
    }, 1000);
  }
};
window.addEventListener("load", quiz.init);
