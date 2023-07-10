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
let initialName = document.querySelector(".initialName");
let countdonw_time = document.querySelector(".countdonw_time");
let btn_1 = document.querySelectorAll(".btn_1");
let btn_2 = document.querySelectorAll(".btn_2");
let btn_3 = document.querySelectorAll(".btn_3");
let btn_4 = document.querySelectorAll(".btn_4");
let btn_5 = document.querySelectorAll(".btn_5");
let btn_submit = document.querySelector(".btn_submit");
let btn_1_correct = document.getElementById("btn_1_correct");
let btn_2_correct = document.getElementById("btn_2_correct");
let btn_3_correct = document.getElementById("btn_3_correct");
let btn_4_correct = document.getElementById("btn_4_correct");
let btn_5_correct = document.getElementById("btn_5_correct");
let result = document.createElement("section");

function checkAnswer(btn, num) {
  function correctAnswer() {
    let correctAnswer = document.createElement("span");
    main.appendChild(correctAnswer).textContent = "Correct!";
    setTimeout(function () {
      correctAnswer.setAttribute("style", "display:none");
    }, 700);
  }
  function incorrectAnswer() {
    let correctAnswer = document.createElement("span");
    main.appendChild(correctAnswer).textContent = "Wrong!";
    setTimeout(function () {
      correctAnswer.setAttribute("style", "display:none");
    }, 700);
  }
  let score = 0;
  if (btn.matches(`#btn_${num}_correct`)) {
    score++;
    console.log(score);
    return correctAnswer();
  } else {
    return incorrectAnswer();
  }
}

let num = 10;
let start_countdown;
function count_down() {
  console.log("start counting down");
  start_countdown = setInterval(function () {
    num--;
    if (num === 0) {
      window.location.href = "./gameover.html";
    }
    countdonw_time.innerText = `Time: ${num}`;
  }, 1000);
}
btn_start.addEventListener("click", function () {
  count_down();
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
    clearInterval(start_countdown);
  });
}

// localStorage.setItem("score", score);

btn_submit.addEventListener("click", function (event) {
  event.preventDefault();
  var highScore = {
    initialName: initialName.value,
    score: score,
  };
  localStorage.setItem("highScore", JSON.stringify(highScore));
  window.location.href = "./highscore.html";
});
