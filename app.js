function golfQuiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.currentQuestionIndex = 0;
}

function timeout() {
    setInterval(function(){
     if(timeLeft <=0 ) {
        showResult();
        clearInterval(timeLeft = 0)
     }
     timeLeftDisplay.innerHTML = timeLeft   
     timeLeft -=1;
    }, 1000)
}

document.getElementById("gameStart").addEventListener("click", function(){
    var timeleft = 15;

    var downloadTimer = setInterval(function function1(){
    document.getElementById("countdown").innerHTML = timeleft + 
    "&nbsp"+"seconds remaining";

    timeleft -= 1;
    if(timeleft <= 0){
        clearInterval(downloadTimer);
        document.getElementById("countdown").innerHTML = "Time is up!"
    }
    }, 1000);

    console.log(countdown);
});

golfQuiz.prototype.getCurrentQuestion = function() {
  return this.questions[this.currentQuestionIndex];
}

golfQuiz.prototype.nextQuestion = function() {
  this.currentQuestionIndex++;
}

golfQuiz.prototype.hasEnded = function() {
  if (this.currentQuestionIndex === this.questions.length)
    return true;
}

golfQuiz.prototype.guess = function(guess) {
  var currentQuestion = this.questions[this.currentQuestionIndex];
  if (currentQuestion.isCorrect(guess)) {
    this.score++;
  }
  this.nextQuestion();
}

// Define question object
function Question(question, choices, correct) {
  this.question = question;
  this.choices = choices;
  this.correct = correct;
};

Question.prototype.isCorrect = function(guess) {
  if (guess === this.correct)
    return true;
};

var golfQuizUI = {
	displayNext : function(){
		if (golfQuiz.hasEnded())
			this.displayScore();
		else{
			this.displayQuestion();
			this.displayChoices();
	}
},

	displayQuestion: function(){
		var question = golfQuiz.getCurrentQuestion().question;
		this.setText("question",question);
	},
	displayChoices: function(){
		var choices = golfQuiz.getCurrentQuestion().choices;
		for (var i = 0 ; i < choices.length; i++){
			this.setText("choice"+i , choices[i]);
			this.guessHandler("guess"+i,i);
		}
	},
	displayScore : function(){
		var gameOverHTML = "<h1>Game Over</h1>";
        gameOverHTML += "<h2> Your score is: " + quiz.score + "</h2>";
        this.setText("quiz", gameOverHTML);
	},
	setText: function(id,text){
		var element= document.getElementById(id);
		// innerHTML is a property, not function
		element.innerHTML = text;
	},
	
	guessHandler : function(id,guess){

		var choiceButton = document.getElementById(id);
		choiceButton.onclick = function(){

			golfQuiz.guess(guess);
			golfQuizUI.displayNext();
		}
	}
}
var question1 = new Question("Who is the Greatest Golfer of all time?", ["Jack Nicklas", "Tiger Woods", "Brian Jenkins", "Brad Faxon"], 0);
var question2 = new Question("Where is The Masters held?", ["Scotland", "Ireland", "Texas", "Georgia"], 3);
var question3 = new Question("How many Major tournaments are there?", ["7", "12", "4", "2"], 2);
var question4 = new Question("something else?", ["Scotland", "Ireland", "Texas", "Georgia"], 0);
var question5 = new Question("last question?", ["Scotland", "Ireland", "Texas", "Georgia"], 2);

//scoreText = game.add.text(5, 5, 'Points: 0', { font: '18px Arial', fill: '#0095DD' });

//function correctAnswer() {
//	currentQuestion.isCorrect();
//	Score += 5;
//	scoreText.setText('Points: '+Score);
//}


var golfQuiz = new golfQuiz(
  [question1, question2, question3, question4, question5]
);
golfQuizUI.displayNext();