let btn_clear = document.querySelector('.clear')
let ul = document.querySelector('ul')
function showHighScore() { 
    // let initialNamename = '';
    // let score = 0;
    let highScore = JSON.parse(localStorage.getItem('highScore'))
    
  
    
    initialName = highScore.initialName;
    score = highScore.score;
    ul.innerHTML = `
    ${initialName} -- ${score}
    `
}
showHighScore()
btn_clear.addEventListener('click', function () { 
    console.log('!!!');
    ul.innerHTML = '';
    localStorage.removeItem(highScore)
})
