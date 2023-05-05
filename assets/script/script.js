//questions object
const questions =
  [ 
    {
      number: 1,
      question: "What is the HTML tag for the most important heading?",
      answers: [
        "&#60;h4&#62;",
        "&#60;h2&#62;",
        "&#60;h3&#62;",
        "&#60;h1&#62;"
      ],
      correct_answer: 4
    },
    {
      number: 2,
      question: "What is the CSS property for setting the text size of an element?",
      answers: [
        "font-size",
        "font-weight",
        "font-family",
        "text-size"
      ],
      correct_answer: 1
    },
    {
      number: 3,
      question: "What is the JavaScript function for creating a new element?",
      answers: [
        "document.getElementById()",
        "document.appendChild()",
        "document.createElement()",
        "document.removeChild()"
      ],
      correct_answer: 3
    },      {
      number: 4,
      question: "What is the HTML tag for a paragraph?",
      answers: [
        "&#60;span&#62;",
        "&#60;div&#62;",
        "&#60;p&#62;",
        "&#60;ul&#62;"
      ],
      correct_answer: 3
    },
    {
      number: 5,
      question: "What is the CSS property for setting the background color of an element?",
      answers: [
        "background-image",
        "background-color",
        "background-repeat",
        "background-position"
      ],
      correct_answer: 2
    },
    {
      number: 6,
      question: "What is the JavaScript function for getting the value of an input element?",
      answers: [
        "document.getElementById('input').value",
        "document.getElementById('input').innerHTML",
        "document.getElementById('input').className",
        "document.getElementById('input').style"
      ],
      correct_answer: 1
    },
    {
      number: 7,
      question: "What is the HTML tag for a link?",
      answers: [
        "&#60;b&#62;",
        "&#60;i&#62;",
        "&#60;u&#62;",
        "&#60;a&#62;"
      ],
      correct_answer: 4
    },
    {
      number: 8,
      question: "What is the CSS property for setting the text alignment of an element?",
      answers: [
        "text-align",
        "text-decoration",
        "text-transform",
        "text-shadow"
      ],
      correct_answer: 1
    },
    {
      number: 9,
      question: "Which HTML tag will display text in italics?",
      answers: [
        "&#60;em&#62;",
        "&#60;sharp&#62;",
        "&#60;i&#62;",
        "both a and c"
      ],
      correct_answer: 4
    },
    {
      number: 10,
      question: "What is the HTML tag for a table?",
      answers: [
        "&#60;table&#62;",
        "&#60;tr&#62;",
        "&#60;td&#62;",
        "&#60;th&#62;"
      ],
      correct_answer: 1
    },
    {
      number: 11,
      question: "What is the CSS property for setting the width of an element?",
      answers: [
        "wide",
        "length",
        "margin",
        "width"
      ],
      correct_answer: 4
    },
    {
      number: 12,
      question: "What is the JavaScript syntax for creating a new event object?",
      answers: [
        "new.Event('event')",
        "document.createEvent(type)",
        "event.newEvent(event)",
        "var Event('type')"
      ],
      correct_answer: 2
    },
    {
      number: 13,
      question: "What is the HTML tag for a list item?",
      answers: [
        "&#60;ul&#62;",
        "&#60;ol&#62;",
        "&#60;li&#62;",
        "&#60;di&#62;"
      ],
      correct_answer: 3
    },
    {
      number: 14,
      question: "What is the CSS property for setting the type of list-item marker in a list?",
      answers: [
        "list-style-type",
        "list-style-position",
        "list-style-image",
        "list-style-marker"
      ],
      correct_answer: 1
    },
    {
      number: 15,
      question: "What is the JavaScript function for getting the number of elements in an array?",
      answers: [
        "array.length",
        "array.push()",
        "array.pop()",
        "array.sort()"
      ],
      correct_answer: 1
    },
    {
      number: 16,
      question: "What is the HTML tag for an image?",
      answers: [
        "&#60;jpg&#62;",
        "&#60;img&#62;",
        "&#60;pic&#62;",
        "&#60;canvas&#62;"
      ],
      correct_answer: 2
    },
    {
      number: 17,
      question: "What is the CSS property for setting the height of an image?",
      answers: [
        "height",
        "tall",
        "margin",
        "padding"
      ],
      correct_answer: 1
    },
    {
      number: 18,
      question: "What is the JavaScript function for creating a new image?",
      answers: [
        "new Image()",
        "document.createElement('IMG')",
        "both a and b",
        "neither a nor b"
      ],
      correct_answer: 3
    },
    {
      number: 19,
      question: "What is the HTML tag for a form?",
      answers: [
        "&#60;input&#62;",
        "&#60;textarea&#62;",
        "&#60;form&#62;",
        "&#60;select&#62;"
      ],
      correct_answer: 3
    },
    {
      number: 20,
      question: "How do you use CSS borders to create a circle?",
      answers: [
        "border-radius",
        "border-width",
        "border-color",
        "border-style"
      ],
      correct_answer: 1
    }
  ]
//setting global variables
var players = []
var score = 0;    
var current = 0;
var seconds = 0;
var highScore = 0;
var answerButton1 ="";
var answerButton2 ="";
var answerButton3 ="";
var answerButton4 ="";

const highScoreContainer = document.getElementById("highscorecontainer");
const bigContainer = document.getElementById("bigcontainer");

// try {
//   highScoreContainer.addEventListener("pageshow", displayHighScores);
    
// } catch (error) {
  
// }
const submitButton = document.getElementById("buttonsubmit");
try {
  submitButton.addEventListener("click", processForm);  
} catch (error) {
  
}

function startGame(){
    //clear screen
    var quizbutton = document.getElementById("quizbutton");
    var readyHeader = document.getElementById("readyheader"); 
    quizbutton.style.display = "none";
    readyHeader.style.display = "none";

    //create timer
    createTimer();
    
    //display answer buttons
    const answerButtons = [
      answerButton1 = document.getElementById("answerbutton1"),
      answerButton2 = document.getElementById("answerbutton2"),
      answerButton3 = document.getElementById("answerbutton3"),
      answerButton4 = document.getElementById("answerbutton4")
    ];
    for(var i=0;i<answerButtons.length;i++){
      answerButtons[i].style.display = "block";
    };
    //Start running through questions
    quizQuestion(current, answerButtons);
}

function createTimer(){
  const timer = document.createElement("div");
  document.getElementById("quizcontainer").appendChild(timer);
  timer.setAttribute("id", "timer");
  seconds = 100;
  const runTimer = setInterval(startTimer, 1000);

  function startTimer(){
    timer.innerText = seconds;
    if(highScore == 0){
      seconds--;
    } else {
      stopTimer();
    }
  
    if(seconds<20){
      timer.setAttribute("class", "timerlow");
    }

    if(seconds<0){
      timer.innerText = "TIME'S UP!"
      timer.setAttribute("class", "timeup");
      console.log("Your score: "+score);
    };

    if(seconds<-3){
      stopTimer();
      try{
        if(seconds<=0){
          highScore = 0;
        }
        else{
          highScore = seconds;
        }
        endGame();
      }
      catch{
        return;
      }
    }
  };

  function stopTimer(){
    clearInterval(runTimer);
  }
}


function quizQuestion(current, answerButtons){
  
  //display question and answers  
  document.getElementById("number").innerHTML = questions[current].number;
  document.getElementById("question").innerHTML = questions[current].question;
  //TODO: add for loop here later
  document.getElementById("answer1").innerHTML = questions[current].answers[0];
  document.getElementById("answer2").innerHTML = questions[current].answers[1];
  document.getElementById("answer3").innerHTML = questions[current].answers[2];
  document.getElementById("answer4").innerHTML = questions[current].answers[3];
  //adding event listeners to the buttons
  for(var j=0; j<answerButtons.length; j++){
    answerButtons[j].addEventListener("click", getAnswer); 
  }
   //clearing event listeners, assigning answer for checkAnswer
  //since I set the values of the buttons to letters, I added numbers as a data set for answer checking
  function getAnswer(event){
    for(var i=0;i<answerButtons.length;i++){
      answerButtons[i].removeEventListener("click", getAnswer)
    };
    var count = current;
    var answer = event.target.dataset.answer;
    checkAnswer(count, answer, answerButtons);
  }
    
}

function checkAnswer(current, answer, answerButtons){
  
    if(answer==questions[current].correct_answer){
       score+=1;
       //TODO: add in a correct/incorrect visually on the screen for the user
    } else{
        seconds-=5;  
    }
    if(current<(questions.length-1)){
        current+=1;

        quizQuestion(current, answerButtons);
    }
    else{
      if(seconds<=0){
        highScore = 0;
      }
      else{
        highScore = seconds;
      }
        endGame();              
    }   
}

//ends the game when the timer runs out. Displays the initials submit form
function endGame(){
  const answerContainer = document.getElementById("answerscontainer");
  const submitForm = document.getElementById("submitinits");
  const questionNumber = document.getElementById("number");
  const hstext = document.getElementById("highscoretext");
  const question = document.getElementById("question");
  const clearTimer = document.getElementById("timer");
  
  
  

  try {
    answerContainer.remove();
    questionNumber.remove(); 
    clearTimer.remove();
    question.remove();
  } catch (error) {
    
  }
  if(highScore == 0){
    const slugHead = document.createElement("p");
    slugHead.setAttribute("class","highscoretext");
    submitForm.insertBefore(slugHead, submitForm.children[1]);
    hstext.innerText = "Your score is: " + highScore
    slugHead.innerText = " Better Luck next time...slughead!"
  }   else{
  hstext.innerText = "Congratulations! Your score is: " + highScore;
  }
  submitForm.style.display = "block";
  try {
    submitButton.addEventListener("click", processForm);  
  } catch (error) {
    
  }
}




function processForm(event){
  event.preventDefault();
  submitButton.removeEventListener("click", processForm);
  //getting elements
  const quizContainer = document.getElementById("quizcontainer");
  const submitForm = document.getElementById("submitinits");
  const hsHeader = document.createElement("h1")
  hsHeader.innerText = "HIGH SCORES";
  const scoreContainer = document.getElementById("scorecontainer");
  var initials = document.getElementById("inits");
  const scoresList = document.createElement("ol");
  scoresList.setAttribute("id", "scoreslist");
  console.log("initials: " + initials.value);
  if(initials.value == ""){
    alert("Please submit your initials.");
    endGame();
  } else {

    scoreContainer.appendChild(scoresList);
    //adding scores and initials to high score list

    
    players = JSON.parse(localStorage.getItem("scoresList"));
    
    if(players!==null){
        
      players.push({
        playerName: initials.value,
        score: highScore    
      });
    } else {
      players = [];
      players.push({
        playerName: initials.value,
        score: highScore    
      });
    }

    players.sort(function(a, b){return b.score - a.score});
    localStorage.setItem("scoresList", JSON.stringify(players));
    window.location.assign("scores.html");
  }
  // for(var i=0;i<players.length;i++){
  //   if(scoresList.childNodes.length >= 9){
  //     break;
  //   }
  //   try{
  //   var setScore = document.createElement("li");
  //   scoresList.appendChild(setScore);
  //   setScore.innerText = " " + players[i].playerName + " -  " + players[i].score;
  //   }
  //   catch{
  //     var setScore = document.createElement("li");
  //     scoresList.appendChild(setScore);
  //   }
  // }
  // submitForm.remove();
  // quizContainer.insertBefore(hsHeader, scoreContainer);
  // scoreContainer.style.display = "block";
  
}



function displayHighScores(){
  bigContainer.removeEventListener("mouseover", displayHighScores);
  
  const highScoresList = document.createElement("ol");
  highScoresList.setAttribute("id", "highscoreslist");
  highScoreContainer.appendChild(highScoresList);
  
  
  players = JSON.parse(localStorage.getItem("scoresList"));
  
  if(players!==null){
    for(var i=0;i<players.length;i++){
      if(highScoresList.childNodes.length >= 10){
        break;
      }
      try{
      var setScore = document.createElement("li");
      highScoresList.appendChild(setScore);
      setScore.innerText = " " + players[i].playerName + " -  " + players[i].score;
      }
      catch{
        var setScore = document.createElement("li");
        highScoresList.appendChild(setScore);
      }
    }
    highScoreContainer.style.display = "block";
  } else {
    highScoreContainer.innerText = "No high scores to display";
  }
}

