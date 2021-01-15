function golfQuiz(questions) {
  this.questions = questions;
  this.score = 0;
  this.currentQuestionIndex = 0;
}

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

var QuizUI = {
	displayNext : function(){
		if (golfQuiz.hasEnded())
			this.displayScore();
		else{
			this.displayQuestion();
			this.displayChoices();
			this.displayProgress();
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
			QuizUI.displayNext();
		}
	}
}
var question1 = new Question("Who is the Greatest Golfer of all time?", ["Jack Nicklas", "Tiger Woods", "Brian Jenkins", "Brad Faxon"], 0);
var question2 = new Question("Where is The Masters held?", ["Scotland", "Ireland", "Texas", "Georgia"], 3);
var question3 = new Question("How many Major tournaments are there?", ["7", "12", "4", "2"], 2);
var question4 = new Question("something else?", ["Scotland", "Ireland", "Texas", "Georgia"], 0);
var question5 = new Question("last question?", ["Scotland", "Ireland", "Texas", "Georgia"], 2);


var golfQuiz = new golfQuiz(
  [question1, question2, question3, question4, question5]
);
QuizUI.displayNext();