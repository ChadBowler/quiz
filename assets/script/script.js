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
      seconds--;
    
      if(seconds<20){
        timer.setAttribute("class", "timerlow");
      }
  
      if(seconds<1){
        timer.innerText = "TIME'S UP!"
        timer.setAttribute("class", "timeup");
        console.log("Your score: "+score);
      };

      if(seconds<-3){
        stopTimer();
        try{
          endGame();
        }
        catch{
          console.log("oops");
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
  document.getElementById("answer1").innerHTML = questions[current].answers[0];
  document.getElementById("answer2").innerHTML = questions[current].answers[1];
  document.getElementById("answer3").innerHTML = questions[current].answers[2];
  document.getElementById("answer4").innerHTML = questions[current].answers[3];
  
  for(var j=0; j<answerButtons.length; j++){
    console.log(j);
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
    } else{
        seconds-=5;  
    }
    if(current<(questions.length-1)){
        current+=1;

        quizQuestion(current, answerButtons);
    }
    else{
        endGame();              
    }   
}

function endGame(){
  const answerContainer = document.getElementById("answerscontainer");
  const submitForm = document.getElementById("submitinits");
  const questionNumber = document.getElementById("number");
  const hstext = document.getElementById("highscoretext");
  const question = document.getElementById("question");
  const clearTimer = document.getElementById("timer");
  


  if(seconds<=0){
    highScore = 0;
  }
  else{
    highScore = seconds;
  }
  console.log(highScore);
  questionNumber.remove();
  question.remove();
  answerContainer.remove(); 
  clearTimer.remove();
  hstext.innerText = "Congratulations! Your score is: " + highScore;
  submitForm.style.display = "block";
  
}

function processForm(){
  //getting elements
  const quizContainer = document.getElementById("quizcontainer");
  const submitForm = document.getElementById("submitinits");
  const hsHeader = document.createElement("h1")
  hsHeader.innerText = "HIGH SCORES";
  // const hsButton = document.getElementById("hsbutton");
  const scoreContainer = document.getElementById("scorecontainer");
  var initials = document.getElementById("inits");
  const scoresList = document.createElement("ol");
  scoresList.setAttribute("id", "scoreslist");
  scoreContainer.appendChild(scoresList);
  //adding scores and initials to high score list
  players.push({
    playerName: initials.value,
    score: highScore    
  });

  localStorage.setItem("highScoresList", JSON.stringify(players));

  console.log(players);
  for(var i=0;i<10;i++){
    if(scoresList.childNodes.length >= 9){
      break;
    }
    try{
    var setScore = document.createElement("li");
    scoresList.appendChild(setScore);
    setScore.innerText = " " + players[i].playerName + " -  " + players[i].score;
    }
    catch{
      var setScore = document.createElement("li");
      scoresList.appendChild(setScore);
    }
  }
  submitForm.remove();
  quizContainer.insertBefore(hsHeader, scoreContainer);
  scoreContainer.style.display = "block";
  
  
}