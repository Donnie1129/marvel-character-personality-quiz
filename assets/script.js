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

    const overlay = document.getElementById('overlay'); // used for blur effect
    const submitNameButton = document.createElement('button'); // used in submitFirstName function and is the event listener #2

    const firstNameModal = document.getElementById('name'); // creates input element; this is the modal, but we'll style with tailwind later

    let firstName = ''; // declaring firstName variable 
    const nextButton = document.createElement('button'); // used in startQuizFunction 
    // getStartedButton.addEventListener('click', submitFirstName);
    nextButton.addEventListener('click', showQuestion);
  

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
    }

    // Event listener for the 'Get Started' button
    getStartedButton.addEventListener('click', showNameInput);

    // end of test



    // let firstName = ''; // declaring firstName variable 
    // const nextButton = document.createElement('button'); // used in startQuizFunction 
    getStartedButton.addEventListener('click', submitFirstName);
    // nextButton.addEventListener('click', showQuestion);
    // let firstNameModal = document.getElementById('name'); // creates input element; this is the modal, but we'll style with tailwind later
    let paragraph = document.getElementsByClassName('text-2xl');


    function submitFirstName () {
      // TO DO: clears out the landing page, clear out the elements on the landing page (or set css element to hide/none)
      firstNameModal.className = "show"; // use this class name for styling via tailwind or css file
      // submitNameButton.className = 'theButtonClass' // add some display with styling
      getStartedButton.textContent = 'Start Quiz';
     

      
      // After adding name and clicking "start", eventlistener #2
      getStartedButton.addEventListener('click', startQuizFunction)
    }

    function startQuizFunction () {
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
      getStartedButton.textContent = 'next question';
      for (let i = 0; i < paragraph.length; i++) {
        paragraph[i].style.display = "none";
      }
      console.log('it worked');
    }