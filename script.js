var startBtnEl = document.querySelector("#startBtn");
var introEL = document.querySelector(".intro");
var questionTitle = document.getElementById("questionTitle");
var initialsEl = document.querySelector(".initials");
var highscoreEl = document.querySelector("highscore");
var timeEl = document.querySelector("#time");
var choicesEl = document.querySelectorAll(".choices");
var questionDisplay = document.querySelector("#questionDisplay");

var timeId;
var currentQuestion = 0;

var timeLeft = 75;

var questionBank = [
  {
    question: "The condition in an if/else statement is enclosed with ______.",
    answers: ["quotes", "curly brackets", "square brackets", "parantheses"],
    correct: "parantheses",
  },
  {
    question: "Arrays in javascript can be used to store _______.",
    answers: ["numbers & strings", "booleans", "alerts", "all the above"],
    correct: "all the above",
  },

  {
    question: "a very useful tool used in development and debugging for printing content to the debugger is:",
    answers: ["javascript", "for loops", "terminal", "console.log"],
    correct: "console.log",
  },
  {
    question: "String values must be enclosed in _______ when being assigned to variables",
    answers: ["commas", "curly brackets", "quotes", "parantheses"],
    correct: "quotes",
  }
];
console.log(questionBank[currentQuestion].question);
startBtnEl.addEventListener("click", function () {
  introEL.classList.add("hide");
  showQuestion();
  timeId = setInterval(startClock, 1000);
});
function showQuestion() {
  questionDisplay.classList.remove("hide");

  
  questionDisplay.innerHTML= `
    <h2 id="questionTitle">
     ${questionBank[currentQuestion].question}
   </h2>
   <button id="btn-0" class = "choices">${questionBank[currentQuestion].answers[0]} </button> <br>
   <button id="btn-1" class = "choices">${questionBank[currentQuestion].answers[1]}</button> <br>
    <button id="btn-2" class = "choices">${questionBank[currentQuestion].answers[2]}</button> <br>
    <button id="btn-3" class = "choices">${questionBank[currentQuestion].answers[3]}</button> <br>
    `

    var choicesEl = document.querySelectorAll(".choices")
  
  for (let i = 0; i <  choicesEl.length; i++) {

  
    // questionTitle.textContent = questionBank[currentQuestion].question;
    // document.getElementById("btn-" + i).textContent =
    //   questionBank[currentQuestion].answers[i];
   
      
       choicesEl[i].addEventListener("click", function () {
  

   
      if (this.textContent === questionBank[currentQuestion].correct) {
       
      } else {
        console.log("Wrong Answer");
        timeLeft = timeLeft - 15;
       
      }

      currentQuestion = currentQuestion + 1;
      if(currentQuestion < questionBank.length){
        showQuestion();

      }
      else{
         clearInterval(timeId) 
        questionDisplay.classList.add("hide")

         initialsEl.classList.remove("hide")
      }
    });



  }
}
function hideQuestion() {
  // questionsEl[index].classList.add("hide")
}
function startClock() {
  timeEl.textContent = timeLeft;
  timeLeft--;
}

// for (let i = 0; i < choicesEl.length; i++) {
//   choicesEl[i].addEventListener("click", function () {
//     hideQuestion();
//     index++;
//     showQuestion();
//   });
// }
