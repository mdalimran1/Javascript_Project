const questions = [
  {
    question: "What is the capital of Canada?",
    answer: [
      { text: "Ottawa", correct: true },
      { text: "Los Angeles", correct: false },
      { text: "New York", correct: false },
      { text: "London", correct: false },
    ],
  },
  {
    question: "What is the longest river in the world?",
    answer: [
      { text: "The Amazon", correct: false },
      { text: "The Yangtze", correct: false },
      { text: "The Nile", correct: true },
      { text: "The Huang", correct: false },
    ],
  },
  {
    question: "What country has the most natural lakes?",
    answer: [
      { text: "India", correct: false },
      { text: "Canada", correct: true },
      { text: "Bangladesh", correct: false },
      { text: "Usa", correct: false },
    ],
  },
  {
    question: "What is the smallest country in the world?",
    answer: [
      { text: "Vatical City", correct: true },
      { text: "Manaco", correct: false },
      { text: "Nauru", correct: false },
      { text: "San Marino", correct: false },
    ],
  },
  {
    question: "What is the biggest beach in the world?",
    answer: [
      { text: "Cox's Bazar", correct:false },
      { text: "praia Mile", correct: true },
      { text: "Ninety  Mile", correct: false },
      { text: "padre Island National", correct: false },
    ],
  }
];

const questionsEle = document.querySelector("#question");
const quizbuttons = document.querySelector(".quizBtn");
const nextBtn = document.querySelector("#next");

let currentQuesIndex = 0;
let score = 0;

const quizStart = () => {
  currentQuesIndex = 0;
  score = 0;
  nextBtn.innerHTML = "Next";

  //this function declear for show question no and questions
  showQuestion();
};

const showQuestion = () => {

  //this function declear for reset html answer 
  resetState();

  let currentQues = questions[currentQuesIndex];

  let questionNo = currentQuesIndex + 1;

  questionsEle.innerText = questionNo + " ." + currentQues.question;

  

  currentQues.answer.forEach((answer) => {
    let button = document.createElement("button");
    button.innerHTML = answer.text;
    button.classList.add("btn");
    quizbuttons.appendChild(button);

    if(answer.correct){
      button.dataset.correct = answer.correct;
    }

    // this addEventListener creat for select answer
    button.addEventListener('click',(e) =>{
      const selectBtn = e.target;
      const isCorrect = selectBtn.dataset.correct === 'true';
      if(isCorrect){
        selectBtn.classList.add('correct');
        score++;
      }else{
        selectBtn.classList.add('incorrect');
      }


      Array.from(quizbuttons.children).forEach(button=>{

        if(button.dataset.correct === 'true'){
          button.classList.add('correct');
        }
        button.disabled =true;
      });
      nextBtn.style.display ='block';

    })


  });
};


const resetState = () =>{

  nextBtn.style.display ='none';
  while(quizbuttons.firstChild){
    quizbuttons.removeChild(quizbuttons.firstChild);
  }
}

//for show score
const showScore =()=>{
  resetState();
  questionsEle.innerHTML=`Your scored ${score} out of   ${questions.length} !`;
  nextBtn.innerHTML ='Play Again';
  nextBtn.style.display='block';
}




//handle next button
const handleQuiz = ()=>{
  currentQuesIndex++;
  if(currentQuesIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}




//for next button
nextBtn.addEventListener('click',()=>{
  if(currentQuesIndex < questions.length){
    handleQuiz();
  }else{
    quizStart();
  }
});


quizStart();
