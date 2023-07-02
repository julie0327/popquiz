let btn_start = document.querySelector('.btn-start');
let main = document.querySelector('main');
let container=document.querySelector('.container')

let question_1 = document.createElement('div');
    let answer_1_btn1 = document.createElement('button')
    let answer_1_btn2 = document.createElement('button')
    let answer_1_btn3=document.createElement('button')
    let answer_1_btn4 = document.createElement('button')
    let questions=document.createElement('div')

function startQuiz() { 
    console.log('!!!!!');
    
    
    question_1.textContent = 'Which one is not primitive js type?'
    answer_1_btn1.textContent = 'Boolen'
    answer_1_btn2.textContent = 'Object'
    answer_1_btn3.textContent = 'String'
    answer_1_btn4.textContent = 'Number'
    
    container.appendChild(questions)
    questions.appendChild(question_1)
    questions.appendChild(answer_1_btn1)
    questions.appendChild(answer_1_btn2)
    questions.appendChild(answer_1_btn3)
    questions.appendChild(answer_1_btn4)
    main.setAttribute('style', 'display:none')
questions.setAttribute('style','display: flex; flex-direction: column; width:auto; height:auto; align-items:center; font-family: Cormorant Garamond;')
answer_1_btn1.setAttribute('style','width:90px;height:40px; border:none; color:#f9f0ff; border-radius: 5px; background-color:#722ed1; font-size: 25px; margin:15px;box-shadow: 0px 0px 2px 2px #9254de;')
answer_1_btn2.setAttribute('style','width:90px;height:40px; border:none; color:#f9f0ff; border-radius: 5px; background-color:#722ed1; font-size: 25px; margin:15px;box-shadow: 0px 0px 2px 2px #9254de;')
answer_1_btn3.setAttribute('style','width:90px;height:40px; border:none; color:#f9f0ff; border-radius: 5px; background-color:#722ed1; font-size: 25px; margin:15px;box-shadow: 0px 0px 2px 2px #9254de;')
answer_1_btn4.setAttribute('style','width:90px;height:40px; border:none; color:#f9f0ff; border-radius: 5px; background-color:#722ed1; font-size: 25px; margin:15px;box-shadow: 0px 0px 2px 2px #9254de;')

    answer_1_btn2.addEventListener('click', function () {
        let correctAnser=document.createElement('span')
        question_1.appendChild(correctAnser).textContent = 'Correct!'
        correctAnser.setAttribute('style', 'display:flex; flex-direction: column; align-items:center')

        question_1.textContent = 'In JavaScript, functions attached to objects are called:'
        answer_1_btn1.textContent = 'Methods'
        answer_1_btn2.textContent = 'Object'
        answer_1_btn3.textContent = 'String'
        answer_1_btn4.textContent = 'Boolean'
        container.appendChild(questions)
        questions.appendChild(question_1)
        questions.appendChild(answer_1_btn1)
        questions.appendChild(answer_1_btn2)
        questions.appendChild(answer_1_btn3)
        questions.appendChild(answer_1_btn4)
        main.setAttribute('style', 'display:none')


        answer_1_btn1.addEventListener('click', function () {
        let correctAnser=document.createElement('span')
        question_1.appendChild(correctAnser).textContent = 'Correct!'
        correctAnser.setAttribute('style', 'display:flex; flex-direction: column; align-items:center')

        question_1.textContent = 'In the browser, the global execution context is:'
        answer_1_btn1.textContent = 'Object'
        answer_1_btn2.textContent = 'Window'
        answer_1_btn3.textContent = 'Function'
        answer_1_btn4.textContent = 'None od Above'
        container.appendChild(questions)
        questions.appendChild(question_1)
        questions.appendChild(answer_1_btn1)
        questions.appendChild(answer_1_btn2)
        questions.appendChild(answer_1_btn3)
        questions.appendChild(answer_1_btn4)
        main.setAttribute('style', 'display:none')

    })
    })
       
        

   
        
    
    
}

btn_start.addEventListener('click', startQuiz);