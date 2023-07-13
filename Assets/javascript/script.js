const questionEle = document.getElementById('question');
const selectAnswer = document.getElementById('answer-btn'); 
const result = document.getElementById('result');
const answer1 = document.querySelector("#ans1"); 
const answer2 = document.querySelector("#ans2");
const answer3 = document.querySelector("#ans3");
const answer4 = document.querySelector("#ans4");
let ANS = [answer1, answer2,answer3,answer4];
let questionindex = 0;
let userscore = 0;

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
    Quest: "What the capital of Maine?",
    ans: ["Atlanta","Tallahassee","Augusta","Frankfort"],
    correctanswer: "Augusta"
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

function finalscore(finalplayer,finalplayerscore){
  timer.remove();
  document.getElementById('container1').style.display = "none"; //hide quiz game.
  document.getElementById('finalscore').style.display = "contents"; //reveal final-score screen
  
  //delete the code below (will loop from local file) @@@@@@@@@@ 
  let abc = document.getElementById('currentuserdata');  
  abc.textContent = finalplayer;
  let xyz = document.getElementById('htmluserscore');
  xyz.textContent = finalplayerscore;
  
  let userdata = {
    'player': finalplayer,
    'score': finalplayerscore,
  };

  //below is just a test code.
  let userdata00 = {
    'player': players,
    'score': scores,
  };

  //get all the players and their scores from local storage
  let localscore = JSON.parse(localStorage.getItem("userdata",userdata));
  console.log("local score storage: "+ localscore);
  // JSON.parse(localStorage.getItem("userdata", userdata)));

  //if localstorage not empty, then add userdata to local lists
  if (localscore !==null) {
    localStorage.setItem('userdata',JSON.stringify(userdata));
    //if localstorage is empty, push userdata to local. 
  } else {
    localStorage.setItem('userdata',JSON.stringify(userdata));
  }
  console.log("local score storage: "+ localscore);
  // localStorage.setItem("users", JSON.stringify(users));
}

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
}, 1500);

//eventlistener when user click on any four answers options.
selectAnswer.addEventListener("click",function(event){
  let useranswer = event.target; 

  if(questionindex < QandA.length-1){  //might be wrong.
    if(useranswer.textContent == QandA[questionindex].correctanswer){
      userscore +=5;
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
    else{//just incase timer goes negative due to bug.
      timerscore = 0;
    } 
    userscore += timerscore;
  let userName = prompt("Please enter you name.");
  if(userName===""){userName = "anonymous";} //if name is blank, then "anonymous"
    finalscore(userName,userscore);
  }
})

//start-button. Initize the game. Hides the start menu items, and reveal contents of the quiz. 
let selectStart = document.getElementById('start-btn');
selectStart.onclick = function(){
  document.getElementById('intro2').style.display = "none"; 
  document.getElementById('container1').style.display = "contents";
  setTimer();
  DisplayQuestionAnswers();
}

//delete me below:
