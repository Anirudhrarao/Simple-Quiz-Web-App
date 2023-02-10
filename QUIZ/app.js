const questions = [
    {
        'que' : 'Which of the following is markup language?',
        'a' : 'HTML',
        'b' : 'CSS',
        'c' : 'JavSript',
        'd' : 'PHP',
        'correct' : 'a'
    },
    {
        'que' : 'CSS stand for?',
        'a' : 'HyperText Markup',
        'b' : 'Cascding Style Sheet',
        'c' : 'Json',
        'd' : 'Python language',
        'correct' : 'b'
    }
]

let index = 0;
let total = questions.length;
let right = 0, wrong = 0;
const quesBox = document.getElementById('questionBox');
const optionInputs = document.querySelectorAll('.options')
const loadQuestion = () => {
    if (index===total){
        return endQuiz()
    }
    reset();
    const data = questions[index];
    quesBox.innerText = (index+1)+ ") " + data.que;
    optionInputs[0].nextElementSibling.innerHTML = data.a
    optionInputs[1].nextElementSibling.innerHTML = data.b
    optionInputs[2].nextElementSibling.innerHTML = data.c
    optionInputs[3].nextElementSibling.innerHTML = data.d
}

const submitQuiz = () => {
    const data = questions[index];
    const ans = getAnswer()
    if (ans === data.correct){
        right++;
    }else {
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () => {
    let answer;
    optionInputs.forEach (
        (input) => {
            if (input.checked){ 
                answer = input.value;
            }
        }
    )
    return answer;
}

const reset = () => {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
}

const endQuiz = () =>{
    document.getElementById('box').innerHTML = right + '/' + total
}

loadQuestion();