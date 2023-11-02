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
    const submitNameButton = document.createElement('button'); // used in submitFirstName function and is the event listener #2
    let firstName = ''; // declaring firstName variable 
    const nextButton = document.createElement('button'); // used in startQuizFunction 
    getStartedButton.addEventListener('click', submitFirstName);
    nextButton.addEventListener('click', showQuestion);

    function submitFirstName () {
      // TO DO: clears out the landing page, clear out the elements on the landing page (or set css element to hide/none)
      let firstNameModal = document.getElementsById('name'); // creates input element; this is the modal, but we'll style with tailwind later
      firstNameModal.className = "show"; // use this class name for styling via tailwind or css file
      submitNameButton.className = 'theButtonClass' // add some display with styling
     
      
      // After adding name and clicking "start", eventlistener #2
      submitNameButton.addEventListener('click', startQuizFunction)
    }

    function startQuizFunction () {
      // Get elementbyID and save as a variable in local storage
      const firstNameInput = document.getElementById('input').value ;
      firstName = localStorage.setItem(firstName, firstNameInput);
      // startQuiz() --> similar to the coding quiz challenge
      showQuestion (); 
      
    }

// TO DO: create showQuestion function
    function showQuestion () {
      console.log('it worked');
    }
  
