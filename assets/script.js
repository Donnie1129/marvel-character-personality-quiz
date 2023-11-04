//This is the question and answers for the quiz iteslf
const questions = [
  {
      question: 'Where would you go on a dream vacation? ',
      answers: [
        {text: "Undisclosed location", character: BlackWidow},
        {text: "New York City", character: SpiderMan},
        {text: "Hawaii", character: DeadPool},
        {text: "Paris", character: CaptainAmerica},
        {text: "I am Groot", character: Groot},
      ]
      
    },

    {
      question: 'Which personality trait(s) resonates with you the most?',
      answers: [
        {text: "Calm, cool, and collected", character: BlackWidow},
        {text: "Friendly", character: SpiderMan},
        {text: "Sarcastic", character: DeadPool},
        {text: "Patriotic", character: CaptainAmerica},
        {text: "I am Groot", character: Groot},
      ]
      
    },

    {
      question: 'If you were a superhero, what would be your signature weapon/ability?',
      answers: [
        {text: "Glock 26", character: BlackWidow},
        {text: "Spiderwebs", character: SpiderMan},
        {text: "Katana blades", character: DeadPool},
        {text: "Shield", character: CaptainAmerica},
        {text: "I am Groot", character: Groot},
      ]
      
    },

    {
      question: 'Who would you want to fight crime with?',
      answers: [
        {text: "Natasha Romanoff", character: BlackWidow},
        {text: "Peter Parker", character: SpiderMan},
        {text: "Wade Winston Wilson", character: DeadPool},
        {text: "Steve Rogers", character: CaptainAmerica},
        {text: "I am Groot", character: Groot},
      ]
      
    },

    {
      question: 'What is your favorite MCU movie?',
      answers: [
        {text: "Black Widow", character: BlackWidow},
        {text: "Spiderman", character: SpiderMan},
        {text: "Deadpool", character: DeadPool},
        {text: "Captain America", character: CaptainAmerica},
        {text: "I am Groot", character: Groot},
      ]
      
    }
];

var BlackWidow = "Black Widow";
var SpiderMan = "Spider-Man (Peter Parker)";
var DeadPool = "Deadpool";
var CaptainAmerica = "Captain America";
var Groot = "Groot";

const character = ["Deadpool", "Captain America", "Groot", "Spider-Man (Peter Parker)", "Black Widow"]; //variable that stores the characters names as an array
let currentQuestionIndex = 0;
let BlackWidowScore = 0;
let SpiderManScore = 0;
let DeadPoolScore = 0;
let CaptainAmericaScore = 0;
let GrootScore = 0;

// Marvel API
let ts = new Date().getTime();
const privateKey = "c25596d5c722b3ccb5c94d495df884a0e237d83e";
const publicKey = "80daa3778422ffa68ae1546ef689f700";
let hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
const baseUrl = "https://gateway.marvel.com/v1/public/characters";

let characterData = [];

character.forEach(character => { // a fetch function that runs for each of the 5 characters to query their character information

  fetch(`${baseUrl}?name=${character}&ts=${ts}&apikey=${publicKey}&hash=${hash}`)
      .then(response => response.json())
      .then(data => {
              console.log(data.data.results)
      })
      .catch(error => {
          console.log('Error:', error);
      });
});

fetch(`${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
.then(response => response.json())
.then(data => {
  console.log(data);
})
.catch(error => {
  console.log('Error:', error);
});



// on loading the page, we'll need to come back to this and likely create
// a window.onload = function (resets the quiz)
  

  const getStartedButton = document.getElementById('get-started-btn');
  const StartQuizButton = document.getElementById('start-quiz-button');

  const overlay = document.getElementById('overlay'); // used for blur effect
  // const submitNameButton = document.createElement('button'); // used in submitFirstName function and is the event listener #2

  const firstNameModal = document.getElementById('name'); // creates input element; this is the modal, but we'll style with tailwind later

  let firstName = ''; // declaring firstName variable 
  // const nextButton = document.createElement('button'); // used in startQuizFunction 
  // getStartedButton.addEventListener('click', submitFirstName);
  // nextButton.addEventListener('click', showQuestion);


  // Function to show the name input and apply blur effect to background
  function showNameInput() {
    // Toggle classes to scale up the input and show it
    firstNameModal.classList.toggle('transform');
    firstNameModal.classList.toggle('scale-100');
    firstNameModal.classList.toggle('opacity-100');
    firstNameModal.classList.toggle('hidden');
  
    const interactiveArea = document.getElementById('interactive-area');
  
    // Ensure to remove the original margin-bottom when positioning it fixed
    interactiveArea.classList.remove('mb-40');
  
    // Apply flexbox centering
    interactiveArea.classList.toggle('flex');
    interactiveArea.classList.toggle('flex-col');
    interactiveArea.classList.toggle('items-center');
    interactiveArea.classList.toggle('justify-center');
  
    // Apply fixed positioning and centering
    interactiveArea.classList.toggle('fixed');
    interactiveArea.classList.toggle('inset-0');
    interactiveArea.classList.toggle('mx-auto');
    interactiveArea.classList.toggle('top-1/2');
    interactiveArea.classList.toggle('left-1/2');
    interactiveArea.classList.toggle('-translate-x-1/2');
    interactiveArea.classList.toggle('-translate-y-1/2');
    interactiveArea.classList.toggle('z-10');
  
    // Toggle classes to show and apply blur effect to the overlay
    overlay.classList.toggle('hidden');
    overlay.classList.toggle('backdrop-blur-xl');
    overlay.classList.toggle('custom-blur');
  
    // Adjust the width and height of the input and button
    firstNameModal.classList.add('w-64', 'h-20');
    getStartedButton.classList.add('w-64', 'h-10');
    getStartedButton.classList.add("hidden");
    StartQuizButton.classList.remove("hidden");
    submitFirstName ()
    //StartQuizButton.addEventListener('click', submitFirstName);
  }

  // Event listener for the 'Get Started' button
  getStartedButton.addEventListener('click', showNameInput);
  // end of test



  // let firstName = ''; // declaring firstName variable 
  // const nextButton = document.createElement('button'); // used in startQuizFunction 
  
  // nextButton.addEventListener('click', showQuestion);
  // let firstNameModal = document.getElementById('name'); // creates input element; this is the modal, but we'll style with tailwind later
  let paragraph = document.getElementsByClassName('text-2xl');


  function submitFirstName () {
    // TO DO: clears out the landing page, clear out the elements on the landing page (or set css element to hide/none)
    firstNameModal.className = "show"; // use this class name for styling via tailwind or css file
    // submitNameButton.className = 'theButtonClass' // add some display with styling


    
    // After adding name and clicking "start", eventlistener #2
    StartQuizButton.addEventListener('click', startQuizFunction);
  }

  function startQuizFunction () {
    overlay.classList.add('hidden');
    console.log("quiz started");
    // Get elementbyID and save as a variable in local storage
    const firstNameInput = document.getElementById('name').value ;
    localStorage.setItem('firstName', firstNameInput);
    // startQuiz() --> similar to the coding quiz challenge
    showQuestion (); 
    
  }

  var bodyElement = document.body;
// TO DO: create showQuestion function
  function showQuestion () {
    bodyElement.style.backgroundImage = 'url("assets/images/questionBackground.jpg")';
    firstNameModal.style.display = "none";
    StartQuizButton.textContent = 'next question';
    StartQuizButton.classList.add('hidden');
    for (let i = 0; i < paragraph.length; ++i) {
      paragraph[i].style.display = "none";
    }


const answerChoicesContainer = document.getElementById('answer-choices');

// Clear the previous answer choices
answerChoicesContainer.innerHTML = '';

// Check if there are more questions
if (currentQuestionIndex < questions.length) {
  const currentQuestion = questions[currentQuestionIndex];
  const currentQuestionText = currentQuestion.question;
  document.getElementById('quiz-question').textContent = currentQuestionText;

  // Create and display answer choices
  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.textContent = answer.text;
    button.value = answer.character; // You can use this value to track the selected answer
    button.classList.add('answer-button', 'block', 'w-full', 'py-2', 'px-4', 'text-center', 'custom-color', 'text-white', 'rounded-md', 'hover-custom-color-2', 'my-2'); // Add classes for styling
    button.addEventListener('click', handleAnswerSelection); // Add a click event listener
    answerChoicesContainer.appendChild(button);
  });

  // Update the "Get Started" button text


  // Move to the next question
  currentQuestionIndex++;
} else {
  // Handle the end of the quiz or any other logic
}

}
// Cocktail DB API
// TODO: finish logic and test functionality
const cocktailBaseUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const cocktailPublicKey = '1';

function fetchCocktailData(selectedCharacter) {
  fetch(`${cocktailBaseUrl}/filter.php?i=${selectedCharacter}`)
      .then(response => response.json())
      .then(data => {
          // Process the retrieved data and display relevant information
          console.log(data);
      })
      .catch(error => {
          console.log('Error:', error);
      });
 // return data; need to store keys for instructions, drink name, image etc into indivudal variables
 // and then return those variables to the function that called it so that data can be accessed later
 // in other fx's eg showResults
}
// end API 

function handleAnswerSelection(event) {
  // You can access the selected answer using event.target.value
  const selectedCharacter = event.target.value;
  // Add your logic to update scores or do something with the selected answer
  // Move to the next question
  showQuestion();  
  fetchCocktailData(selectedCharacter);

}