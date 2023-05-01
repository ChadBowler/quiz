var score = 0;

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
        question: "What is the CSS property for setting the font size of an element?",
        answers: [
          "font-size",
          "font-weight",
          "font-family",
          "color"
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
          "&#60;a&#62;",
          "&#60;b&#62;",
          "&#60;i&#62;",
          "&#60;u&#62;"
        ],
        correct_answer: 1
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
        question: "What is the JavaScript function for adding an event listener to an element?",
        answers: [
          "document.getElementById('element').addEventListener('click', function() { });",
          "document.getElementById('element').onclick = function() { };"
        ],
        correct_answer: 1
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
          "width",
          "height",
          "margin",
          "padding"
        ],
        correct_answer: 1
      },
      {
        number: 12,
        question: "What is the JavaScript function for creating a new event?",
        answers: [
          "new Event('click')",
          "new Event('mousedown')",
          "new Event('mousemove')",
          "new Event('mouseup')"
        ],
        correct_answer: 1
      },
      {
        number: 13,
        question: "What is the HTML tag for a list?",
        answers: [
          "&#60;ul&#62;",
          "&#60;ol&#62;",
          "&#60;il&#62;",
          "&#60;di&#62;"
        ],
        correct_answer: 1
      },
      {
        number: 14,
        question: "What is the CSS property for setting the list style type of a list?",
        answers: [
          "list-style-type",
          "list-style-position",
          "list-style-image",
          "list-style-image"
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
          "&#60;img&#62;",
          "&#60;video&#62;",
          "&#60;audio&#62;",
          "&#60;canvas&#62;"
        ],
        correct_answer: 1
      },
      {
        number: 17,
        question: "What is the CSS property for setting the height of an image?",
        answers: [
          "height",
          "width",
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
          "new Canvas()",
          "new Audio()",
          "new Video()"
        ],
        correct_answer: 1
      },
      {
        number: 19,
        question: "What is the HTML tag for a form?",
        answers: [
          "&#60;form&#62;",
          "&#60;input&#62;",
          "&#60;textarea&#62;",
          "&#60;select&#62;"
        ],
        correct_answer: 1
      },
      {
        number: 20,
        question: "What is the CSS property for setting the border of an element?",
        answers: [
          "border",
          "border-width",
          "border-color",
          "border-style"
        ],
        correct_answer: 1
      }
    
    ]
    
var current = 0;
var answerButton1 ="";
var answerButton2 ="";
var answerButton3 ="";
var answerButton4 ="";
function startGame(){
    
    var quizbutton = document.getElementById("quizbutton");
    var readyHeader = document.getElementById("readyheader"); 
    quizbutton.style.display = "none";
    readyHeader.style.display = "none";
    
    var answerButton1 = document.getElementById("answerbutton1");
    var answerButton2 = document.getElementById("answerbutton2");
    var answerButton3 = document.getElementById("answerbutton3");
    var answerButton4 = document.getElementById("answerbutton4");
    answerButton1.style.display = "block";
    answerButton2.style.display = "block";
    answerButton3.style.display = "block";
    answerButton4.style.display = "block";

    quizQuestion(current);
}


function quizQuestion(current){
  
  
  function getAnswer1(){
    answerButton1.removeEventListener("click", getAnswer1);
    answerButton2.removeEventListener("click", getAnswer2);
    answerButton3.removeEventListener("click", getAnswer3);
    answerButton4.removeEventListener("click", getAnswer4);
    var count = current;
    var answer = 1;
    checkAnswer(count, answer);
  }
  function getAnswer2(){
    answerButton1.removeEventListener("click", getAnswer1);
    answerButton2.removeEventListener("click", getAnswer2);
    answerButton3.removeEventListener("click", getAnswer3);
    answerButton4.removeEventListener("click", getAnswer4);
    var count = current;
    var answer = 2;
    checkAnswer(count, answer);
  }
  function getAnswer3(){
    answerButton1.removeEventListener("click", getAnswer1);
    answerButton2.removeEventListener("click", getAnswer2);
    answerButton3.removeEventListener("click", getAnswer3);
    answerButton4.removeEventListener("click", getAnswer4);
    var count = current;
    var answer = 3;
    checkAnswer(count, answer);
  }
  function getAnswer4(){
    answerButton1.removeEventListener("click", getAnswer1);
    answerButton2.removeEventListener("click", getAnswer2);
    answerButton3.removeEventListener("click", getAnswer3);
    answerButton4.removeEventListener("click", getAnswer4);
    var count = current;
    var answer = 4;
    checkAnswer(count, answer);
  }
  

  answerButton1 = document.getElementById("answerbutton1")
  answerButton2 = document.getElementById("answerbutton2")
  answerButton3 = document.getElementById("answerbutton3")
  answerButton4 = document.getElementById("answerbutton4")

    
    document.getElementById("number").innerHTML = questions[current].number;
    document.getElementById("question").innerHTML = questions[current].question;
    document.getElementById("answer1").innerHTML = questions[current].answers[0];
    document.getElementById("answer2").innerHTML = questions[current].answers[1];
    document.getElementById("answer3").innerHTML = questions[current].answers[2];
    document.getElementById("answer4").innerHTML = questions[current].answers[3];
      
    answerButton1.addEventListener("click", getAnswer1); 
    answerButton2.addEventListener("click", getAnswer2);
    answerButton3.addEventListener("click", getAnswer3);
    answerButton4.addEventListener("click", getAnswer4);
  
    
}



function checkAnswer(current, answer){
  
    console.log("Current Question number "+(current+1));
    console.log("You answered: " + answer);
    console.log("Correct answer: "+questions[current].correct_answer);

    if(answer==questions[current].correct_answer){
       score+=1;
        console.log("correct"); 
        console.log("Your score: "+score);  
    } else{
        console.log("incorrect"); 
        console.log("Your score: "+score);  
    }
    if(current<questions.length){
        current+=1;

        quizQuestion(current);
    }
    else{
        console.log("Game Over");               
    }
    // return current;
    
}

// async function checkAnswer(questions){
//     let clickedButton;
//     clickedButton= document.getElementById("answerbutton1").addEventListener("click", function(){
//         clickedButton = 1;
//         console.log("correct");
//     });
//     document.getElementById("answerbutton2").addEventListener("click", function(){
//         clickedButton = 2;
//     });
//     document.getElementById("answerbutton3").addEventListener("click", function(){
//         clickedButton = 3;
//     });
//     document.getElementById("answerbutton4").addEventListener("click", function(){
//         clickedButton = 4;
//     });

//     await clickedButton;
//     if(clickedButton == questions.correct_answer){
//         score +=1;
//     }
//     console.log(clickedButton);
//     return score;
// }
// console.log(score);









//   console.log(questions[0]);

//   for(var i=0;i<questions.length;i++){
//     // console.log(questions[i].correct_answer);
//     for(var x=0;x<questions[i].answers.length;x++){
//         if((x+1)==questions[i].correct_answer){ 
//             console.log(questions[i].question);
//             console.log(questions[i].answers[x]);
//         }
        // else{
        //     console.log('huh?')
        // }
//     }
//   }

//   const obj = [{
//         hero: "Superman",
//         powers:["Strength", "Speed", "Heat Vision", "Cold Breath"],
//         powerlvl: 85
//     },
//     {
//         hero: "Wonder Woman",
//         powers:["Strength", "Speed", "Lasso of Truth", "Invisible Jet"],
//         powerlvl: 95
//     }
//   ]
//     console.log(obj[1]);

  
