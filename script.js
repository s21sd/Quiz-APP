const questions = document.querySelector(".questions");
const option1 = document.querySelector("#opt-1");
const option2 = document.querySelector("#opt-2");
const option3 = document.querySelector("#opt-3");
const option4 = document.querySelector("#opt-4");
const difficulty = document.querySelector(".difficulty")
const next_btn = document.querySelector(".next-btn");

const result_div = document.querySelector(".result-show");
const result = document.querySelector(".result")
const reset_btn = document.querySelector(".restart");

let one = document.querySelector("#one");
let two = document.querySelector("#two");
let three = document.querySelector("#three");
let four = document.querySelector("#four");

let input1 = document.querySelector("#radio1");
let input2 = document.querySelector("#radio2");
let input3 = document.querySelector("#radio3");
let input4 = document.querySelector("#radio4");
let questions_Count = document.querySelector(".questions_Count");

var correctOption = null;
let count = 0;
let questiosLoad = 1;
const url = 'https://the-trivia-api.com/v2/questions';
const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': '720245f4bfmsha05ea578a776e3dp123fd5jsn247d215c36ba',
        'X-RapidAPI-Host': 'ases-quiz-api1.p.rapidapi.com'
    }
};
const loadQuestions = () => {

    input1.checked = false;
    input2 = checked = false;
    input3.checked = false;
    input4.checked = false;

    one.style.pointerEvents = "initial";
    two.style.pointerEvents = "initial";
    three.style.pointerEvents = "initial";
    four.style.pointerEvents = "initial";



    fetch(url, options)
        .then(response => response.json())
        .then(data => {

            questions.innerHTML = data[0].question.text;
            option1.innerHTML = data[0].incorrectAnswers[0]
            option2.innerHTML = data[0].incorrectAnswers[1]
            option3.innerHTML = data[0].incorrectAnswers[2]
            option4.innerHTML = data[0].correctAnswer;
            difficulty.innerHTML = data[0].difficulty;
            correctOption = data[0].correctAnswer;

            questiosLoad++;
        })
}
loadQuestions();

const nextQuestion = () => {
    if (questiosLoad === 6) {
        result.innerHTML = `You answered ${count}/5 questions right`
        result_div.style.display = "block"
        reset_btn.addEventListener("click", () => {
            location.reload();
        })

    }
    else {

        loadQuestions();
    }
    questions_Count.innerHTML = (questiosLoad - 1)
}

next_btn.addEventListener("click", nextQuestion);



const checkforCorrect = (e) => {

    if (e === correctOption) {
        count++;
        

    }

}

one.addEventListener("click", () => {
    input1.checked = true;
    two.style.pointerEvents = "none";
    three.style.pointerEvents = "none";
    four.style.pointerEvents = "none";
    checkforCorrect(option1.innerHTML);


})

two.addEventListener("click", () => {

    input2.checked = true;
    one.style.pointerEvents = "none";
    three.style.pointerEvents = "none";
    four.style.pointerEvents = "none";
    checkforCorrect(option2.innerHTML);

})

three.addEventListener("click", () => {

    input3.checked = true;
    one.style.pointerEvents = "none";
    two.style.pointerEvents = "none";
    four.style.pointerEvents = "none";
    checkforCorrect(option3.innerHTML);


})
four.addEventListener("click", () => {
    input4.checked = true;
    one.style.pointerEvents = "none";
    two.style.pointerEvents = "none";
    three.style.pointerEvents = "none";
    checkforCorrect(option4.innerHTML);

})

