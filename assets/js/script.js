//storing the HTML elements in javascript
var questionListEl = document.querySelector("#questionList");
var startBtn = document.querySelector("#start");
var timerEl = document.querySelector("#timer")

var index = 0;
var timer = 45;

// Array of object to store all the static text
var questions = [{
        questionText: "how many players from one team are allow to play inside the field?",
        a: "22",
        b: "18",
        c: "11",
        d: "9",
        answer: "c",
    },
    {
        questionText: "What is a soccer field called??",
        a: "Pitch",
        b: "Box",
        c: "Court",
        d: "Paddock",
        answer: "a",
    },
    {
        questionText: "How long does a soccer game last?",
        a: "45 minutes",
        b: "90 minutes",
        c: "120 minutes",
        d: "60 minutes",
        answer: "b",
    },
    {
        questionText: "Who can add time in a soccer game?",
        a: "Referee",
        b: "Coach",
        c: "Team Captain",
        d: "Stadium Officer",
        answer: "a",
    },
    {
        questionText: "Which country won the most FIFA World Cup titles?",
        a: "Germany",
        b: "England",
        c: "Brazil",
        d: "Argentina",
        answer: "c",
    }
]


function startQuiz(event){
    event.preventDefault();
    console.log("lets go!");

    hideStartbn();
    renderTimer();
    renderedQuestion();

}

function renderTimer(){
    timerEl.textContent = timer;

    var countdown = setInterval(()=>{

        if(timer > 0){
            timer--;
            timerEl.textContent = timer;
        } else {
            clearInterval(countdown);
            clearQuestion();
        }
        
        }, 1000);
}

// remove question from the DOM
function clearQuestion(){
   var element = questionListEl.children[0];
   console.log(element);
   element.remove();
}

//render questions
function renderedQuestion(event) {

    //check if is that was the last question and end the Quiz
    if(index === questions.length){
        return;
    }

    //create elements and append them to each other
    var newQuestion = document.createElement("li");
    questionListEl.append(newQuestion);

    var newQuestionTitle = document.createElement("h3");
    var newQuestionOptionsList = document.createElement("ul");
    newQuestion.append(newQuestionTitle,newQuestionOptionsList);

    var newOpt_a = document.createElement("li");
    newOpt_a.setAttribute("class","a");
    var newOpt_b = document.createElement("li");
    newOpt_b.setAttribute("class","b");
    var newOpt_c = document.createElement("li");
    newOpt_c.setAttribute("class","c");
    var newOpt_d = document.createElement("li");
    newOpt_d.setAttribute("class","d");
    newQuestionOptionsList.append(newOpt_a,newOpt_b,newOpt_c,newOpt_d);

    //store the value of our array into the HTML elements
    newQuestionTitle.textContent = questions[index].questionText;
    newOpt_a.textContent = `A: ${questions[index].a}`;
    newOpt_b.textContent = `B: ${questions[index].b}`;
    newOpt_c.textContent = `C: ${questions[index].c}`;
    newOpt_d.textContent = `D: ${questions[index].d}`;

}

//hide start button after quiz had began
function hideStartbn (){
startBtn.setAttribute("style","display: none");
}

function checkSolution(event){

    //check which option the user selected
    var userChoiceEl = event.target;
    var userChoice = userChoiceEl.getAttribute("class");
    console.log(userChoice);

    //check if the answer is correct
    if(userChoice === questions[index].answer){
        console.log("correct the answer is: " + questions[index].answer)
        timer++;
        renderTimer();
    } else {
            console.log ("incorrect");
    }

    //add new index to generate a new question next time
    console.log(index);
    index ++;

    clearQuestion();
    renderedQuestion();

}

// **** Event Listeners ****
//start quiz
startBtn.addEventListener("click",startQuiz);

questionListEl.addEventListener("click", checkSolution);


