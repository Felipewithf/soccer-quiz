//storing the elements in HTML
var questionListEl = document.getElementById("#questionList");

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





// create an array of object where I store all the static text - make it easier in the future to add more questions
var questions = [{
        questionText: "how many players from one team are allow to play inside the field?",
        a: "22",
        b: "18",
        c: "11",
        d: "9"
    },
    {
        questionText: "how many players from one team are allow to play inside the field?",
        a: "22",
        b: "18",
        c: "11",
        d: "9"
    },
    {
        questionText: "how many players from one team are allow to play inside the field?",
        a: "22",
        b: "18",
        c: "11",
        d: "9"
    },
    {
        questionText: "how many players from one team are allow to play inside the field?",
        a: "22",
        b: "18",
        c: "11",
        d: "9"
    },
    {
        questionText: "how many players from one team are allow to play inside the field?",
        a: "22",
        b: "18",
        c: "11",
        d: "9"
    }
]


//store the value of our array into the HTML elements
newQuestionTitle.textContent = questions[0].questionText;
newOpt_a.textContent = `A: ${questions[0].a}`;
newOpt_b.textContent = `B: ${questions[0].b}`;
newOpt_c.textContent = `C: ${questions[0].c}`;
newOpt_d.textContent = `D: ${questions[0].d}`;

console.log (questionListEl);

console.log (questions);
