const questionEle = document.getElementById('question');
const selectAnswer = document.getElementById('answer-btn'); 
const result = document.getElementById('result');
const answer1 = document.querySelector("#ans1"); 
const answer2 = document.querySelector("#ans2");
const answer3 = document.querySelector("#ans3");
const answer4 = document.querySelector("#ans4");
let ANS = [answer1, answer2,answer3,answer4];
let questionindex = 0;
let score = 0;

//Questions & Answer List for the quiz
let QandA = [ 
  Q1 = {
    Quest: "What the capital of Minnesota? ",
    ans: ["	Juneau","Augusta","	Montpelier","Saint Paul"],
    correctanswer: "Saint Paul"
  },
  Q2 = {
      Quest: "What the capital of Alabama? ",
      ans: ["Atlanta", "Frankfort","Concord","Montgomery"],
      correctanswer: "Montgomery"
  },
  Q3 = {
    Quest: "What the capital of Wyoming?",
    ans: ["Cheyenne","Providence","Columbus","Concord"],
    correctanswer: "Cheyenne"
  },
  Q4 = {
    Quest: "What the capital of Wisconsin?",
    ans: ["Baton Rouge","Madison","Frankfort","Little Rock"],
    correctanswer: "Madison"
  },
  Q5 = {
    Quest: "What the capital of Nebraska?",
    ans: ["Austin","Lincoln","Lansing","Raleigh"],
    correctanswer: "Lincoln"
  },
  Q6 = {
    Quest: "What the capital of Kansas?",
    ans: ["Denver","Juneau","Tallahassee","Topeka"],
    correctanswer: "Topeka"
  },
  Q7 = {
    Quest: "What the capital of Massachusetts?",
    ans: ["Boston","Annapolis","Helena","Bismarck"],
    correctanswer: "Boston"
  },
  Q8 = {
    Quest: "What the capital of South Carolina?",
    ans: ["Richmond","Columbia","Harrisburg","Raleigh"],
    correctanswer: "Columbia"
  },
  Q9 = {
    Quest: "What the capital of Delaware?",
    ans: ["Dover","Hartford","Sacramento","Des Moines"],
    correctanswer: "Dover"
  },
  Q10 = {
    Quest: "What the capital of Massachusetts?",
    ans: ["Atlanta","Tallahassee","Frankfort","Boston"],
    correctanswer: "Boston"
  }

];

let secondsLeft = 60; //countdown timer, starts at 60 seconds. 
let timer = document.querySelector(".countdowntimer"); 

function setTimer() { //set timer for quiz, 60 seconds. Stops at zero.
  var timerInterval = setInterval(function() {
    secondsLeft--;
    timer.textContent = secondsLeft + " seconds";
    if(secondsLeft === 0) {     
      clearInterval(timerInterval);  
    }
  }, 1000);
}

// function finalscore(){  //program me!!! 
// }

//This display question & answers list in html
function DisplayQuestionAnswers (){
  let Qnum = questionindex+1;
  questionEle.textContent = "Q"+ Qnum + ". " +QandA[questionindex].Quest ; //ex. 'Q1. <insert question1>?' 

  for (i=0;i<4;i++){ 
    ANS[i].textContent = QandA[questionindex].ans[i];
  }
}

//work in progress. Phasing out "correct" or "Wrong" result. @@@@@@@@@@@@@@
setTimeout(()=>{
    const sometext = document.getElementById('result');
}, 2000);

//eventlistener when user click on any four answers options.
selectAnswer.addEventListener("click",function(event){
  let useranswer = event.target; 

  if(questionindex < QandA.length){  //might be wrong.
    if(useranswer.textContent == QandA[questionindex].correctanswer){
      score +=5;
      result.style.color = "green";
      result.textContent = "CORRECT!!";
    }
    else{
      result.style.color = "red";
      result.textContent = "WRONG!!";
      secondsLeft -=5;
    }
    questionindex++;
    DisplayQuestionAnswers();
  }
  else{
    let timerscore = 0;
    if(secondsLeft>0){
      timerscore = secondsLeft;
    }
    else{
      timerscore = 0;
    } 

    score += timerscore;
    prompt("Enter your name: "); //need work
    console.log("last question score: "+ score);
  }
  console.log("final score:" +score);
  console.log("timerscore:" +timerscore);
})

let selectStart = document.getElementById('start-btn');
selectStart.onclick = function(){
  console.log(document.getElementById('intro2'));
  document.getElementById('intro2').style.display = "none"; 
  document.getElementById('container1').style.display = "contents";
  console.log('start button is working');
  setTimer();
  DisplayQuestionAnswers();
}

if (questionindex == QandA.length - 1) {
  let userName = prompt("Please enter you name.");

  //get all the players and their scores from local storage
  let item = {
    player: userName,
    score: timeEl.textContent,
  };

  let users = JSON.parse(localStorage.getItem("users"));

  //if localstorage have players, then add to the existing lists
  if (users) {
    users.push(item);
    //if localstorage is empty, we will need to create a new list
  } else {
    users = [];
    users.push(item);
  }

  localStorage.setItem("users", JSON.stringify(users));
  // Go from questionnaire view  to highscore view
  navigateFromTo("questionnaire", "highscore");

  // return;
}