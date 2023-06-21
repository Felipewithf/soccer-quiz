//storing the HTML elements in javascript
var questionListEl = document.querySelector("#questionList");
var startBtn = document.querySelector("#start");

var index = 0;

// create an array of object where I store all the static text - make it easier in the future to add more questions
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
}

// remove question from the DOM
function clearQuestions(){
   var element = questionListEl.firstChild;
   console.log(element);
   element.remove();
}

//render questions
function renderedNewQuestion() {

    //clear the previous question if the quiz has started
    //clearQuestions();

    if(index == questions.length){
        return;
    }

    //create elements and append them to each other
    var newQuestion = document.createElement("li");
    questionListEl.append(newQuestion);

    var newQuestionTitle = document.createElement("h3");
    var newQuestionOptionsList = document.createElement("ul");
    newQuestion.append(newQuestionTitle,newQuestionOptionsList);

    var newOpt_a = document.createElement("li");
    var newOpt_b = document.createElement("li");
    var newOpt_c = document.createElement("li");
    var newOpt_d = document.createElement("li");
    newQuestionOptionsList.append(newOpt_a,newOpt_b,newOpt_c,newOpt_d);

    //store the value of our array into the HTML elements
    newQuestionTitle.textContent = questions[index].questionText;
    newOpt_a.textContent = `A: ${questions[index].a}`;
    newOpt_b.textContent = `B: ${questions[index].b}`;
    newOpt_c.textContent = `C: ${questions[index].c}`;
    newOpt_d.textContent = `D: ${questions[index].d}`;

    index ++;
    console.log(index);

}

//hide start button after quiz had began
function hideStartbn (){
startBtn.setAttribute("style","display: none");
}

// **** Event Listeners ****
//start quiz
startBtn.addEventListener("click",startQuiz);
questionListEl.addEventListener("click", renderedNewQuestion);