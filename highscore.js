let btn_clear = document.querySelector(".clear");
let ul = document.querySelector("ul");
function showHighScore() {
  // let initialName = "";
  // let score = 0;
  let highScore = JSON.parse(localStorage.getItem("highScore"));

  ul.innerHTML = `
    ${highScore.initialName} -- ${highScore.score}
    `;
}
showHighScore();

btn_clear.addEventListener("click", function () {
  console.log("!!!");
  ul.innerHTML = "";
  localStorage.removeItem("highScore");
});
