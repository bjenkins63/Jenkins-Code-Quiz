
var timerElement = document.querySelector(".timer-count");
var startButton = document.querySelector(".start-button");

var timer;
var timerCount = 20;


function startTimer() {
  timer = setInterval(function () {
    timerCount--;
    timerElement.textContent = timerCount;
    if (timerCount === 0) {
      clearInterval(timer);
    }
  }, 1000);
}

// function begin01() {
//   timerCount = 20;
//   startTimer()
// }


var q = ["If you score a 3 on a par 4, what did you make?<br /><br />", "How many holes on a regulation golf course?<br /><br />", "Who plays first?<br /><br />", "If you score a 6 on a par 5, what did you make?<br /><br />", "How many clubs can you have in your bag?<br /><br />", "Who holds the record for most Major tournament victories?<br /><br />", "where is the Masters Tournament held?<br /><br />", "What does it mean when you score an eagle?<br /><br />", "When can you mark your ball and pick it up?<br /><br />", "What is a mulligan?<br /><br />"];
        var a1 = ["<button class=buttons002 onclick=q1c()>Birdie</button>",
                  "<button class=buttons002 onclick=q2c()>18</button>",
                  "<button class=buttons002 onclick=q3i()>Flip a tee</button>",
                  "<button class=buttons002 onclick=q4i()>Birdie</button>",
                  "<button class=buttons002 onclick=q5i()>12</button>",
                  "<button class=buttons002 onclick=q6i()>Tiger Woods</button>",
                  "<button class=buttons002 onclick=q7i()>Los Angeles<button>",
                  "<button class=buttons002 onclick=q8i()>You won</button>",
                  "<button class=buttons002 onclick=q9i()>In a penalty area</button>",
                  "<button class=buttons002 onclick=q10i()>A stupid mistake</button>"];

        var a2 = ["<button class=buttons002 onclick=q1i()>Par</button>",
                  "<button class=buttons002 onclick=q2i()>9</button>",
                  "<button class=buttons002 onclick=q3c()>Furthest from the hole</button>",
                  "<button class=buttons002 onclick=q4c()>Bogey</button>",
                  "<button class=buttons002 onclick=q5c()>14</button>",
                  "<button class=buttons002 onclick=q6c()>Jack Nicklas</button>",
                  "<button class=buttons002 onclick=q7i()>Boston</button>",
                  "<button class=buttons002 onclick=q8i()>Penalty stroke</button>",
                  "<button class=buttons002 onclick=q9i()>In the rough</button>",
                  "<button class=buttons002 onclick=q10i()>A hole in one</button>"];

        var a3 = ["<button class=buttons002 onclick=q1i()>Bogey</button>",
                  "<button class=buttons002 onclick=q2i()>36</button>",
                  "<button class=buttons002 onclick=q3i()>Closest to the hole</button>",
                  "<button class=buttons002 onclick=q4i()>Double Bogey</button>",
                  "<button class=buttons002 onclick=q5i()>9</button>",
                  "<button class=buttons002 onclick=q6i()>Arnold Palmer</button>",
                  "<button class=buttons002 onclick=q7c()>Augusta</button>",
                  "<button class=buttons002 onclick=q8c()>You scored 2 under par on a hole</button>",
                  "<button class=buttons002 onclick=q9i()>In a pond</button>",
                  "<button class=buttons002 onclick=q10i()>A bad golfer</button>"];

        var a4 = ["<button class=buttons002 onclick=q1i()>Eagle</button>",
                  "<button class=buttons002 onclick=q2i()>12</button>",
                  "<button class=buttons002 onclick=q3i()>Better golfer</button>",
                  "<button class=buttons002 onclick=q4i()>Par</button>",
                  "<button class=buttons002 onclick=q5i()>10</button>",
                  "<button class=buttons002 onclick=q6i()>Bill Murray</button>",
                  "<button class=buttons002 onclick=q7i()>Ireland</button>",
                  "<button class=buttons002 onclick=q8i()>You parred the hole</button>",
                  "<button class=buttons002 onclick=q9c()>On the green</button>",
                  "<button class=buttons002 onclick=q10c()>A free replay</button>"];


        var n = 0;
        n++;
        var s = 0;
        s++;

        function begin001() {
            disappear001.innerHTML = "";
            message001.innerHTML = "";
            question001.innerHTML = q[0];
            option001.innerHTML = a1[0];
            option002.innerHTML = a2[0];
            option003.innerHTML = a3[0];
            option004.innerHTML = a4[0];
            number001.innerHTML = n++;
        }

        function q1c() {
            answer001.innerHTML = "<div id=green001>" + "Correct!" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
            score001.innerHTML = s++;
        }

        function q1i() {
            answer001.innerHTML = "<div id=red001>" + "No" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
        }

        function new002() {
            question001.innerHTML = q[1];
            option001.innerHTML = a1[1];
            option002.innerHTML = a2[1];
            option003.innerHTML = a3[1];
            option004.innerHTML = a4[1];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q2c() {
            answer001.innerHTML = "<div id=green001>" + "Yes!" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
            score001.innerHTML = s++;
        }

        function q2i() {
            answer001.innerHTML = "<div id=red001>" + "Um, no" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
        }

        function new003() {
            question001.innerHTML = q[2];
            option001.innerHTML = a1[2];
            option002.innerHTML = a2[2];
            option003.innerHTML = a3[2];
            option004.innerHTML = a4[2];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q3c() {
            answer001.innerHTML = "<div id=green001>" + "Nice shot!" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
            score001.innerHTML = s++;
        }

        function q3i() {
            answer001.innerHTML = "<div id=red001>" + "Are you kidding?" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
        }

        function new004() {
            question001.innerHTML = q[3];
            option001.innerHTML = a1[3];
            option002.innerHTML = a2[3];
            option003.innerHTML = a3[3];
            option004.innerHTML = a4[3];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q4c() {
            answer001.innerHTML = "<div id=green001>" + "You're a pro!" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
            score001.innerHTML = s++;
        }

        function q4i() {
            answer001.innerHTML = "<div id=red001>" + "Stay away from golf" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
        }

        function new005() {
            question001.innerHTML = q[4];
            option001.innerHTML = a1[4];
            option002.innerHTML = a2[4];
            option003.innerHTML = a3[4];
            option004.innerHTML = a4[4];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q5c() {
            answer001.innerHTML = "<div id=green001>" + "Correct!" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
            score001.innerHTML = s++;
        }

        function q5i() {
            answer001.innerHTML = "<div id=red001>" + "No" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new006()>Next</button>";
        }

        function new006() {
            question001.innerHTML = q[5];
            option001.innerHTML = a1[5];
            option002.innerHTML = a2[5];
            option003.innerHTML = a3[5];
            option004.innerHTML = a4[5];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q6c() {
            answer001.innerHTML = "<div id=green001>" + "YOU ROCK" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new007()>Next</button>";
            score001.innerHTML = s++;
        }

        function q6i() {
            answer001.innerHTML = "<div id=red001>" + "WOW, no" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new007()>Next</button>";
        }

        function new007() {
            question001.innerHTML = q[6];
            option001.innerHTML = a1[6];
            option002.innerHTML = a2[6];
            option003.innerHTML = a3[6];
            option004.innerHTML = a4[6];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q7c() {
            answer001.innerHTML = "<div id=green001>" + "Correct" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new008()>Next</button>";
            score001.innerHTML = s++;
        }

        function q7i() {
            answer001.innerHTML = "<div id=red001>" + "No" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new008()>Next</button>";
        }

        function new008() {
            question001.innerHTML = q[7];
            option001.innerHTML = a1[7];
            option002.innerHTML = a2[7];
            option003.innerHTML = a3[7];
            option004.innerHTML = a4[7];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q8c() {
            answer001.innerHTML = "<div id=green001>" + "Correct" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new009()>Next</button>";
            score001.innerHTML = s++;
        }

        function q8i() {
            answer001.innerHTML = "<div id=red001>" + "WRONG" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new009()>Next</button>";
        }

        function new009() {
            question001.innerHTML = q[8];
            option001.innerHTML = a1[8];
            option002.innerHTML = a2[8];
            option003.innerHTML = a3[8];
            option004.innerHTML = a4[8];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q9c() {
            answer001.innerHTML = "<div id=green001>" + "you got it" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new010()>Next</button>";
            score001.innerHTML = s++;
        }

        function q9i() {
            answer001.innerHTML = "<div id=red001>" + "Duh" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=new010()>Next</button>";
        }

        function new010() {
            question001.innerHTML = q[9];
            option001.innerHTML = a1[9];
            option002.innerHTML = a2[9];
            option003.innerHTML = a3[9];
            option004.innerHTML = a4[9];
            next001.innerHTML = "";
            answer001.innerHTML = "";
            number001.innerHTML = n++;
        }

        function q10c() {
            answer001.innerHTML = "<div id=green001>" + "Correct" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
            score001.innerHTML = s++;
        }

        function q10i() {
            answer001.innerHTML = "<div id=red001>" + "Go back to school" + "</div>";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
        }

        function end001() {
            message001.innerHTML = "End of Quiz.";
            question001.innerHTML = "";
            option001.innerHTML = "";
            option002.innerHTML = "";
            option003.innerHTML = "";
            option004.innerHTML = "";
            next001.innerHTML = "<div id=text001>" + "<button class=buttons001 onclick=repeat001()>Repeat</button>" + "</div>";
            answer001.innerHTML = "";
        }

        function repeat001() {
            location.reload();
        }
