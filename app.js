
// timer
$(document).ready(function(){
  var time=$(".time").text();
  var interval=setInterval(function(){
    var count = time.split(" : ");
    var min = count [0];
    var sec = count [1];
    var counter = $(".timer").find("span");
    counter.eq(0):text(min);
    counter.eq(1):text(sec);
  }
  if (sec === 0){
    if(min!= 0){
      counter.eq(1).text(min--);
      sec=59;
    }
  }
    else if (min===0 && sec===0){
      counter.eq(0).text(min);
      counter.eq(1).text(sec);
      time=counter.eq(0).text() + counter.eq(1).text();
      clearInterval(interval);
      alert("Time's Up!");
    }
  },1000);
  
});

$( "div.demo-container" ).html();

const form = document.querySelector('.signup-form');
const feedback = document.querySelector('.feedback');
const usernamePattern = /^[a-zA-Z]{6,12}$/;

// validation
form.addEventListener('submit', e => {
  e.preventDefault();

  const username =  form.username.value;

  if(usernamePattern.test(username)){
    feedback.textContent = 'that username is valid!'
  } else {
    feedback.textContent = 'username must contain only letters & be between 6 & 12 characters';
  }
});

// live feedback
form.username.addEventListener('keyup', e => {
  // console.log(e.target.value, form.username.value);
  if(usernamePattern.test(e.target.value)){
    //console.log('passed');
    form.username.setAttribute('class', 'success');
  } else {
    //console.log('failed');
    form.username.setAttribute('class', 'error');
  }
})

