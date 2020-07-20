// Variables
const quizContainer = document.getElementById('quiz');
const resultsContainer = document.getElementById('results');
const submitButton = document.getElementById('submit');
const myQuestions = [
  {
    question: "What is the title of the first album released by Jimi Hendrix?",
    answers: {
      a: "Bold as Love",
      b: "Disraeli Gears",
      c: "Are You Experienced",
      d: "Who's Next"
    },
    correctAnswer: "c"
  },
  {
    question: "Who is the song, 'More Than a Feeling,' by?",
    answers: {
      a: "Kansas",
      b: "AC/DC",
      c: "Pink Floyd",
      d: "Boston"
    },
    correctAnswer: "d"
  },
  {
    question: "What is Van Halen singer, David Lee Roth's, nickname?",
    answers: {
      a: "Diaper David",
      b: "Diamond Dave",
      c: "Rusty Roth",
      d: "Dynamite Dave"
    },
    correctAnswer: "b"
  },
  {
    question: "What band did Angus Young play guitar for?",
    answers: {
      a: "Rush",
      b: "AC/DC",
      c: "Led Zeppelin",
      d: "The Rolling Stones"
    },
    correctAnswer: "b"
  },
  {
    question: "Which band had the legendary drummer, Neil Peart?",
    answers: {
      a: "Def Leppard",
      b: "Lynyrd Skynyrd",
      c: "Rush",
      d: "Queen"
    },
    correctAnswer: "c"
  },
  {
    question: "Which band named their first few albums 'I, II, III, and IV?''",
    answers: {
      a: "Grateful Dead",
      b: "The Beatles",
      c: "The Doors",
      d: "Led Zeppelin"
    },
    correctAnswer: "d"
  },
  {
  question: "Which band is known for their long beards and dressing sharp in tuxedos?",
    answers: {
      a: "Pink Floyd",
      b: "Aerosmith",
      c: "ZZ Top",
      d: "The Eagles"
    },
    correctAnswer: "c"
}
];

// Functions
(function(){
    
    function buildQuiz(){
      // variable to store the HTML output
      const output = [];
  
      // for each loop for questions
      myQuestions.forEach(
        (currentQuestion, questionNumber) => {
  
          // variable to store the list of possible answers
          const answers = [];
  
          // and for each available answer
          for(letter in currentQuestion.answers){
  
            //add an HTML radio button
            answers.push(
              `<label>
                <input type="radio" name="question${questionNumber}" value="${letter}">
                ${letter} :
                ${currentQuestion.answers[letter]}
              </label>`
            );
          }
  
          // add this question and its answers to the output
          output.push(
            `<div class="slide">
              <div class="question"> ${currentQuestion.question} </div>
              <div class="answers"> ${answers.join("")} </div>
            </div>`
          );
        }
      );
  
      //combine output list into one string of HTML and put it on the page
      quizContainer.innerHTML = output.join('');
    }
  
    function showResults(){
  
      // get answer containers from our quiz
      const answerContainers = quizContainer.querySelectorAll('.answers');
  
      // Log user's answers
      let numCorrect = 0;
  
      // for each question
      myQuestions.forEach( (currentQuestion, questionNumber) => {
  
        // find selected answer
        const answerContainer = answerContainers[questionNumber];
        const selector = `input[name=question${questionNumber}]:checked`;
        const userAnswer = (answerContainer.querySelector(selector) || {}).value;
  
        // if answer is correct
        if(userAnswer === currentQuestion.correctAnswer){
          // add to the number of correct answers
          numCorrect++;
        }
      });
  
      // show number of correct answers out of total
      resultsContainer.innerHTML = `${numCorrect} correct out of ${myQuestions.length} questions!`;
    }
  
    function showSlide(n) {
      slides[currentSlide].classList.remove('active-slide');
      slides[n].classList.add('active-slide');
      currentSlide = n;
      if(currentSlide === 0){
        previousButton.style.display = 'none';
      }
      else{
        previousButton.style.display = 'inline-block';
      }
      if(currentSlide === slides.length-1){
        nextButton.style.display = 'none';
        submitButton.style.display = 'inline-block';
      }
      else{
        nextButton.style.display = 'inline-block';
        submitButton.style.display = 'none';
      }
    }
  
    function showNextSlide() {
      showSlide(currentSlide + 1);
    }

    function showPreviousSlide() {
      showSlide(currentSlide - 1);
    }
  
    
  
    // Start Quiz
    buildQuiz();
  
    // Pagination
    const previousButton = document.getElementById("previous");
    const nextButton = document.getElementById("next");
    const slides = document.querySelectorAll(".slide");
    let currentSlide = 0;
  
    // Show the first slide
    showSlide(currentSlide);
  
    // Event listeners
    previousButton.addEventListener("click", showPreviousSlide);
    submitButton.addEventListener('click', showResults);
    nextButton.addEventListener("click", showNextSlide);
  })();