let btn_submit = document.querySelector(".btn_submit");
let initialName = document.querySelector(".initialName");
let gameover = document.querySelector(".gameover");
let span = document.createElement("span");
let score = localStorage.getItem("score");
gameover.appendChild(span).textContent = `Your score is ${score}`;
span.setAttribute(
  "style",
  "display:flex; flex-direction: column; width:auto; height:auto; justify-content:center; align-items: center; font-family: Cormorant Garamond; "
);
btn_submit.addEventListener("click", function (event) {
  event.preventDefault();
  var highScore = {
    initialName: initialName.value,
    score: localStorage.getItem("score"),
  };
  localStorage.setItem("highScore", JSON.stringify(highScore));
  window.location.href = "./highscore.html";
});
