//storing the HTML elements in javascript
var questionListEl = document.querySelector("#questionList");
var startBtn = document.querySelector("#start");
var timerEl = document.querySelector("#timer")

var index = 0;
var timer = 45;

//answer to the quiz
var answers = ["c","a","b","a","c"];

// Array of object to store all the static text
var questions = [{
        questionText: "how many players from one team are allow to play inside the field?",
        a: "22",
        b: "18",
        c: "11",
        d: "9"
    },
    {
        questionText: "What is a soccer field called??",
        a: "Pitch",
        b: "Box",
        c: "Court",
        d: "Paddock"
    },
    {
        questionText: "How long does a soccer game last?",
        a: "45 minutes",
        b: "90 minutes",
        c: "120 minutes",
        d: "60 minutes"
    },
    {
        questionText: "Who can add time in a soccer game?",
        a: "Referee",
        b: "Coach",
        c: "Team Captain",
        d: "Stadium Officer"
    },
    {
        questionText: "Which country won the most FIFA World Cup titles?",
        a: "Germany",
        b: "England",
        c: "Brazil",
        d: "Argentina"
    }
]


function startQuiz(event){
    event.preventDefault();
    console.log("lets go!");

    renderedNewQuestion();
    hideStartbn();
    startTimer();
}

function startTimer(){
    timerEl.textContent = timer;
}

// remove question from the DOM
function clearQuestion(){
   var element = questionListEl.children[0];
   console.log(element);
   element.remove();
}

//render questions
function renderedNewQuestion(event) {

    

    //check if the quiz has started
    if(index > 0){
        clearQuestion();
        //check which option the user selected
        var userChoiceEl = event.target;
        var userChoice = userChoiceEl.getAttribute("class");
    }
    
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

    //add new index to generate a new question next time
    index ++;
    console.log(index);

    questionListEl.addEventListener("click", renderedNewQuestion);

}

//hide start button after quiz had began
function hideStartbn (){
startBtn.setAttribute("style","display: none");
}

// **** Event Listeners ****
//start quiz
startBtn.addEventListener("click",startQuiz);


