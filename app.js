var q = ["What is the term Albatross mean in golf?", "Tiger Wood studied at which college?", 
          "What is 2 over par on a hole called?<br /><br />", "Where is The Masters tournament played?<br /><br />", 
          "How many major tournament titles does Jack Nicklas have?<br /><br />"];

var a1 = ["<button class=buttons002 onclick=q1i()>A flock of birds</button>",
  "<button class=buttons002 onclick=q1c()>A 2 on a par 5</button>",
  "<button class=buttons002 onclick=q1i()>A dogleg left</button>",
  "<button class=buttons002 onclick=q1i()>A poor golfer</button>", ,
];

var a2 = ["<button class=buttons002 onclick=q1i()>Dartmouth</button>",
  "<button class=buttons002 onclick=q2i()>Duke</button>",
  "<button class=buttons002 onclick=q3c()>Stanford</button>",
  "<button class=buttons002 onclick=q4i()>Keene State</button>"
];

var a3 = ["<button class=buttons002 onclick=q1i()>Disqualified</button>",
  "<button class=buttons002 onclick=q2i()>Out of bounds</button>",
  "<button class=buttons002 onclick=q3c()>A double bogey</button>",
  "<button class=buttons002 onclick=q4i()>A penalty</button>"
];

var a4 = ["<button class=buttons002 onclick=q1i()>Boston</button>",
  "<button class=buttons002 onclick=q2i()>Ireland</button>",
  "<button class=buttons002 onclick=q3i()>Australia</button>",
  "<button class=buttons002 onclick=q4c()>Agusta, Georgia</button>"
];

var a5 = ["<button class=buttons002 onclick=q1i()>eight</button>",
  "<button class=buttons002 onclick=q2i()>twenty-four</button>",
  "<button class=buttons002 onclick=q3c()>eighteen</button>",
  "<button class=buttons002 onclick=q4i()>eleven</button>"
];

var n = 0;
n++;
var s = 0;
s++;


function timer001() {
  timerBj();
  if (c < 20) {
    timer001.innerHTML = c;
  }

  if (c < 1) {
    window.clearInterval(update);
    c = 20;
    message001.innerHTML = "Time's UP";
    message002.innerHTML = "";
    message003.innerHTML = "";
    message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";

  }


function timer001() {
  c = c - 1;
  if (c < 200) {
      time001.innerHTML = c;
  }

  if (c < 1) {
      window.clearInterval(update);
      message001.innerHTML = "Time's up";
      message002.innerHTML = "";
      message003.innerHTML = "";
      message004.innerHTML = "<button class=buttons002 onclick=repeat001()>Repeat</button>";
  }

update = setInterval("timer001()", 1000);
}
}

function begin001() {
  c = 20;
  disappear001.innerHTML = "";
  message001.innerHTML = "";
  question001.innerHTML = q[0];
  option001.innerHTML = a1[0];
  option002.innerHTML = a1[1];
  option003.innerHTML = a1[2];
  option004.innerHTML = a1[3];
  number001.innerHTML = n++;
  next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
}

var timeLeft = 20;
var counter001 = 0;
var timer001 = '';
timer001.html(timeLeft - counter);
function TimeIt() {
  couner001++;
  timer001.html(counter0);
}


function q1c() {
  answer001.innerHTML = "<div id=green001>correct</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
  score001.innerHTML = s++;
}

function q1i() {
  answer001.innerHTML = "<div id=red001>wrong</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new002()>Next</button>";
}

function new002() {
  question001.innerHTML = q[1];
  option001.innerHTML = a2[0];
  option002.innerHTML = a2[1];
  option003.innerHTML = a2[2];
  option004.innerHTML = a2[3];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
  next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";

}

function q2c() {
  answer001.innerHTML = "<div id=green001>correct</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
  score001.innerHTML = s++;
}

function q2i() {
  answer001.innerHTML = "<div id=green001>wrong</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new003()>Next</button>";
}

function new003() {
  question001.innerHTML = q[2];
  option001.innerHTML = a3[0];
  option002.innerHTML = a3[1];
  option003.innerHTML = a3[2];
  option004.innerHTML = a3[3];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
}

function q3c() {
  answer001.innerHTML = "<div id=green001>correct</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
  score001.innerHTML = s++;
}

function q3i() {
  answer001.innerHTML = "<div id=red001>wrong</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";
}

function new004() {
  question001.innerHTML = q[3];
  option001.innerHTML = a4[0];
  option002.innerHTML = a4[1];
  option003.innerHTML = a4[2];
  option004.innerHTML = a4[3];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
  next001.innerHTML = "<button class=buttons001 onclick=new004()>Next</button>";

}

function q4c() {
  answer001.innerHTML = "<div id=green001>correct</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
  score001.innerHTML = s++;
}

function q4i() {
  answer001.innerHTML = "<div id=red001>wrong</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=new005()>Next</button>";
}

function new005() {
  question001.innerHTML = q[4];
  option001.innerHTML = a5[0];
  option002.innerHTML = a5[1];
  option003.innerHTML = a5[2];
  option004.innerHTML = a5[3];
  next001.innerHTML = "";
  answer001.innerHTML = "";
  number001.innerHTML = n++;
  next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
}

function q5c() {
  answer001.innerHTML = "<div id=green001>correct</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
  score001.innerHTML = s++;
}

function q5i() {
  answer001.innerHTML = "<div id=red001>wrong</div>";
  option001.innerHTML = "";
  option002.innerHTML = "";
  option003.innerHTML = "";
  option004.innerHTML = "";
  number001.innerHTML = n++;
  next001.innerHTML = "<button class=buttons001 onclick=end001()>End of Quiz</button>";
}

function end001() {
  window.clearInterval(update);
  c = "-";
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

