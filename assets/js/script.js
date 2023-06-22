//storing the HTML elements in javascript
var questionListEl = document.querySelector("#questionList");
var highscoreListEl = document.querySelector('#highscoreList');
var inputTextEl = document.querySelector('#initials');
var scoreMsgEl = document.querySelector("#scoreMsg");
var timerEl = document.querySelector("#timer")
var formEl = document.querySelector("#initialsForm")
var highscoreformEl = document.querySelector("#highscoreForm")

var submitBtn = document.querySelector('#submit');
var startBtn = document.querySelector("#start");
var clearBtn = document.querySelector("#clear");
var backBtn = document.querySelector("#back");
var viewHighScoreBtn = document.querySelector("#viewHighScore");


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

    hideStartbn();
    renderTimer();
    renderedQuestion();

}

//hide start button after quiz had began
function hideStartbn (){
    startBtn.setAttribute("style","display: none");
}
    
//Show start button after quiz had began
function showStartbn (){
        startBtn.setAttribute("style","display: block");
}

//render timer and calls endOfQuiz
function renderTimer(){
    timerEl.textContent = timer;

    var countdown = setInterval(()=>{

        if(timer <= 0 || index === questions.length){ 
                      
            clearInterval(countdown);
            endOfQuiz();
            return timer;

        } else {
            timer--;
            timerEl.textContent = timer;
        }
        }, 1000);
        
}

//render questions
function renderedQuestion() {

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

function checkSolution(event){

    //check which option the user selected
    var userChoiceEl = event.target;
    var userChoice = userChoiceEl.getAttribute("class");
    console.log(userChoice);

    //check if the answer is correct
    if(userChoice === questions[index].answer){
        console.log("correct the answer is: " + questions[index].answer)
        timer = timer + 10;
        timerEl.textContent = timer;
    } else {
            console.log ("incorrect");
            timer = timer - 10;
            timerEl.textContent = timer;
            if (timer <= 0){
                return timer;
            }     
    }

    //add new index to generate a new question next time
    console.log(index);
    index ++;

    //check if is that was the last question and end the Quiz
    if(index === questions.length){
        return index;
    } else{
        clearQuestion();
        renderedQuestion();
    }

}

function clearQuestion(){
    var element = questionListEl.children[0];
    
    element.remove();

}

function endOfQuiz(){

    if(index <= questions.length){
    clearQuestion();
    }

    formEl.setAttribute("class","show");
    scoreMsgEl.textContent = `Your score is ${timer}`;
    

}

function LocalStoreInitials(event){

    event.preventDefault();
    
    //store the high score in localstorage
    localStorage.setItem("initials", (inputTextEl.value).toUpperCase() );
    localStorage.setItem("score",timer);

    formEl.setAttribute("class","hide");

    renderHighscore();

}


function renderHighscore(event){

    //creates highscores in HTML
    var newHighscore = document.createElement("li");
    highscoreListEl.append(newHighscore);
    newHighscore.textContent = ` ${localStorage.getItem("initials")}  ====  ${localStorage.getItem("score")}`;

    highscoreformEl.setAttribute("class","show");

}

function clearScores(){
    localStorage.clear();
    
}

function backToQuiz(){
    index = 0;
    timer = 45;
    showStartbn();
    highscoreformEl.setAttribute("class","hide");

}

function viewScores(){

    if(highscoreListEl.children.length === 0){
        renderHighscore();
    }else{
    highscoreformEl.setAttribute("class","show");
    };
}

// **** Event Listeners ****

//start quiz
startBtn.addEventListener("click",startQuiz);

//sees user choice per question
questionListEl.addEventListener("click", checkSolution);

//stores initials into localstorage
submitBtn.addEventListener("click",LocalStoreInitials);

//clear scores from localstorage
clearBtn.addEventListener("click",clearScores);

//go back and start the game again
backBtn.addEventListener("click", backToQuiz);

//Show the Highscore
viewHighScoreBtn.addEventListener("click", viewScores);