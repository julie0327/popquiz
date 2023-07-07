let btn_start = document.querySelector(".btn-start");
let intro = document.querySelector(".intro");
let container = document.querySelector(".container");
let main = document.querySelector("main");
let question_1 = document.querySelector(".question_1");
let question_2 = document.querySelector(".question_2");
let question_3 = document.querySelector(".question_3");
let question_4 = document.querySelector(".question_4");
let question_5 = document.querySelector(".question_5");
let yourName = document.querySelector(".yourName");
let btn_1 = document.querySelectorAll(".btn_1");
let btn_2 = document.querySelectorAll(".btn_2");
let btn_3 = document.querySelectorAll(".btn_3");
let btn_4 = document.querySelectorAll(".btn_4");
let btn_5 = document.querySelectorAll(".btn_5");
let btn_1_correct = document.getElementById("btn_1_correct");
let btn_2_correct = document.getElementById("btn_2_correct");
let btn_3_correct = document.getElementById("btn_3_correct");
let btn_4_correct = document.getElementById("btn_4_correct");
let btn_5_correct = document.getElementById("btn_5_correct");
let result = document.createElement("section");

let score = 0;
function checkAnswer(btn, num) {
  function correctAnswer() {
    let correctAnswer = document.createElement("span");
    main.appendChild(correctAnswer).textContent = "Correct!";
    setTimeout(function () {
      correctAnswer.setAttribute("style", "display:none");
    }, 1000);
  }
  function incorrectAnswer() {
    let correctAnswer = document.createElement("span");
    main.appendChild(correctAnswer).textContent = "Wrong!";
    setTimeout(function () {
      correctAnswer.setAttribute("style", "display:none");
    }, 1000);
  }
  if (btn.matches(`#btn_${num}_correct`)) {
    score++;
    console.log(score);
    return correctAnswer();
  } else {
    return incorrectAnswer();
  }
}

btn_start.addEventListener("click", function () {
  intro.setAttribute("style", "display:none");
  question_1.setAttribute(
    "style",
    "display:flex; flex-direction: column; width:auto; height:auto; align-items:center; font-family: Cormorant Garamond;"
  );
});

for (let i = 0; i < btn_1.length; i++) {
  btn_1[i].addEventListener("click", function () {
    question_1.setAttribute("style", "display:none");
    question_2.setAttribute(
      "style",
      "display:flex; flex-direction: column; width:auto; height:auto; align-items:center; font-family: Cormorant Garamond;"
    );
    checkAnswer(btn_1[i], 1);
  });
}

for (let i = 0; i < btn_2.length; i++) {
  btn_2[i].addEventListener("click", function () {
    question_2.setAttribute("style", "display:none");
    question_3.setAttribute(
      "style",
      "display:flex; flex-direction: column; width:auto; height:auto; align-items:center; font-family: Cormorant Garamond;"
    );
    checkAnswer(btn_2[i], 2);
  });
}

for (let i = 0; i < btn_3.length; i++) {
  btn_3[i].addEventListener("click", function () {
    question_3.setAttribute("style", "display:none");
    question_4.setAttribute(
      "style",
      "display:flex; flex-direction: column; width:auto; height:auto; align-items:center; font-family: Cormorant Garamond;"
    );
    checkAnswer(btn_3[i], 3);
  });
}

for (let i = 0; i < btn_4.length; i++) {
  btn_4[i].addEventListener("click", function () {
    question_4.setAttribute("style", "display:none");
    question_5.setAttribute(
      "style",
      "display:flex; flex-direction: column; width:auto; height:auto; align-items:center; font-family: Cormorant Garamond;"
    );
    checkAnswer(btn_4[i], 4);
  });
}

for (let i = 0; i < btn_5.length; i++) {
  btn_5[i].addEventListener("click", function () {
    question_5.setAttribute("style", "display:none");

    result.setAttribute(
      "style",
      "display:flex; flex-direction: column; width:auto; height:auto; align-items:center; font-family: Cormorant Garamond;"
    );
    checkAnswer(btn_5[i], 5);
    main.appendChild(result).textContent = `Your score is ${score}`;
    yourName.setAttribute("style", "display:flex");
  });
}

// let question_1 = document.createElement('div');
// let question_2 = document.createElement('div');
// let question_3 = document.createElement('div');
// let question_4 = document.createElement('div');
//     let answer_1_btn1 = document.createElement('button')
//     let answer_1_btn2 = document.createElement('button')
//     let answer_1_btn3=document.createElement('button')
//     let answer_1_btn4 = document.createElement('button')
//     let questions=document.createElement('div')

// function startQuiz() {
//     console.log('!!!!!');

//     question_1.textContent = 'Which one is not primitive js type?'
//     answer_1_btn1.textContent = 'Boolen'
//     answer_1_btn2.textContent = 'Object'
//     answer_1_btn3.textContent = 'String'
//     answer_1_btn4.textContent = 'Number'

//     container.appendChild(questions)
//     questions.appendChild(question_1)
//     questions.appendChild(answer_1_btn1)
//     questions.appendChild(answer_1_btn2)
//     questions.appendChild(answer_1_btn3)
//     questions.appendChild(answer_1_btn4)
//     main.setAttribute('style', 'display:none')
// questions.setAttribute('style','display: flex; flex-direction: column; width:auto; height:auto; align-items:center; font-family: Cormorant Garamond;')
// answer_1_btn1.setAttribute('style','width:90px;height:40px; border:none; color:#f9f0ff; border-radius: 5px; background-color:#722ed1; font-size: 25px; margin:15px;box-shadow: 0px 0px 2px 2px #9254de;')
// answer_1_btn2.setAttribute('style','width:90px;height:40px; border:none; color:#f9f0ff; border-radius: 5px; background-color:#722ed1; font-size: 25px; margin:15px;box-shadow: 0px 0px 2px 2px #9254de;')
// answer_1_btn3.setAttribute('style','width:90px;height:40px; border:none; color:#f9f0ff; border-radius: 5px; background-color:#722ed1; font-size: 25px; margin:15px;box-shadow: 0px 0px 2px 2px #9254de;')
// answer_1_btn4.setAttribute('style','width:90px;height:40px; border:none; color:#f9f0ff; border-radius: 5px; background-color:#722ed1; font-size: 25px; margin:15px;box-shadow: 0px 0px 2px 2px #9254de;')

//     answer_1_btn2.addEventListener('click', function (e) {
//         e.stopPropagation()
//         let correctAnser=document.createElement('span')
//         container.appendChild(correctAnser).textContent = 'Correct!'
//         correctAnser.setAttribute('style', 'display:flex; flex-direction: column; align-items:center')
//         setTimeout(function () {
//             correctAnser.setAttribute('style', 'display:none')
//         },1000)

//         question_2.textContent = 'In JavaScript, functions attached to objects are called:'
//         answer_1_btn1.textContent = 'Methods'
//         answer_1_btn2.textContent = 'Object'
//         answer_1_btn3.textContent = 'String'
//         answer_1_btn4.textContent = 'Boolean'
//         // container.appendChild(questions)
//         questions.appendChild(question_1)
//         question_1.appendChild(answer_1_btn1)
//         question_1.appendChild(answer_1_btn2)
//         question_1.appendChild(answer_1_btn3)
//         question_1.appendChild(answer_1_btn4)
//         main.setAttribute('style', 'display:none')

//         answer_1_btn1.addEventListener('click', function (e) {
//                 e.stopPropagation()
//             let correctAnser=document.createElement('span')
//             container.appendChild(correctAnser).textContent = 'Correct!'
//             correctAnser.setAttribute('style', 'display:flex; flex-direction: column; align-items:center')
//             setTimeout(function () {
//                 correctAnser.setAttribute('style', 'display:none')
//             },1000)

//             question_2.textContent = 'In the browser, the global execution context is:'
//             answer_1_btn1.textContent = 'Object'
//             answer_1_btn2.textContent = 'Window'
//             answer_1_btn3.textContent = 'Function'
//             answer_1_btn4.textContent = 'This'
//             // container.appendChild(questions)
//             question_1.appendChild(question_2)
//             question_2.appendChild(answer_1_btn1)
//             question_2.appendChild(answer_1_btn2)
//             question_2.appendChild(answer_1_btn3)
//             question_2.appendChild(answer_1_btn4)
//             main.setAttribute('style', 'display:none')

//             answer_1_btn2.addEventListener('click', function (e) {
//                 e.stopPropagation()
//                 console.log(e);
//                 let correctAnser=document.createElement('span')
//             container.appendChild(correctAnser).textContent = 'Correct!'
//             correctAnser.setAttribute('style', 'display:flex; flex-direction: column; align-items:center')
//             setTimeout(function () {
//                 correctAnser.setAttribute('style', 'display:none')
//             },1000)

//                 question_3.textContent = 'Which choice is not part of CSS box model: '
//                 answer_1_btn1.textContent = 'Margin'
//                 answer_1_btn2.textContent = 'Height'
//                 answer_1_btn3.textContent = 'Border'
//                 answer_1_btn4.textContent = 'Padding'
//                 // container.appendChild(questions)
//                 question_2.appendChild(question_3)
//                 question_3.appendChild(answer_1_btn1)
//                 question_3.appendChild(answer_1_btn2)
//                 question_3.appendChild(answer_1_btn3)
//                 question_3.appendChild(answer_1_btn4)
//                 main.setAttribute('style', 'display:none')

//                 answer_1_btn2.addEventListener('click', function (e) {
//                         e.stopPropagation()
//                     let correctAnser=document.createElement('span')
//                     container.appendChild(correctAnser).textContent = 'Correct!'
//                     correctAnser.setAttribute('style', 'display:flex; flex-direction: column; align-items:center')
//                     setTimeout(function () {
//                         correctAnser.setAttribute('style', 'display:none')
//                     },1000)

//                     question_4.textContent = 'Which attribute must have a unique value each time it is used in an HTML document? '
//                     answer_1_btn1.textContent = 'title'
//                     answer_1_btn2.textContent = 'class'
//                     answer_1_btn3.textContent = 'style'
//                     answer_1_btn4.textContent = 'id'
//                     // container.appendChild(questions)
//                     question_3.appendChild(question_4)
//                     question_4.appendChild(answer_1_btn1)
//                     question_4.appendChild(answer_1_btn2)
//                     question_4.appendChild(answer_1_btn3)
//                     question_4.appendChild(answer_1_btn4)
//                     main.setAttribute('style', 'display:none')

//                 })

//             })

//         })

//     })

// }

// btn_start.addEventListener('click', startQuiz);
