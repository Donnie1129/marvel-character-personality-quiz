//This is the question and answers for the quiz iteslf

var BlackWidow = "Black Widow";
var SpiderMan = "Spider-Man (Peter Parker)";
var DeadPool = "Deadpool";
var CaptainAmerica = "Captain America";
var Groot = "Groot";

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



const character = ["Deadpool", "Captain America", "Groot", "Spider-Man (Peter Parker)", "Black Widow"]; //variable that stores the characters names as an array
let currentQuestionIndex = 0;
let BlackWidowScore = 0;
let SpiderManScore = 0;
let DeadPoolScore = 0;
let CaptainAmericaScore = 0;
let GrootScore = 0;
let globalHighestScoreCharacter = '';


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
    StartQuizButton.classList.add('w-64', 'h-10');

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
// Cocktail DB API metadata
const cocktailBaseUrl = "https://www.thecocktaildb.com/api/json/v1/1/random.php"; // this particular link randomly selects a drink; using this for simplicity purposes
const cocktailPublicKey = '1'; //API website states we use this API key for testing purposes

// This function is used for a cocktail database API Get Request.
// It returns the JSON data for drinkName, drinkRecipe, drinkImage, and drinkIngredients.
function fetchCocktailAPI () {
  fetch(`${cocktailBaseUrl}/filter.php?i=`)
      .then(response => response.json())
      .then(data => {
        if (data.drinks && data.drinks.length > 0) {
          const drink = data.drinks[0]; // accessing the first drink object 
          // extracting relevant JSON data
          const drinkName = drink.strDrink; 
          const drinkRecipe = drink.strInstructions; 
          const drinkImage = drink.strDrinkThumb; 
          const drinkIngredients = []; // creating list/array of all drink ingredients 
          
          // Using a For Loop to extract each ingredient from json data and adding it to the drinkIngredient array
          for (let i = 1; i <= 15; i++) {
              const ingredient = drink[`strIngredient${i}`];
              if (ingredient) {
                  drinkIngredients.push(ingredient);
              } else {
                  break; // Stop the loop if we encounter a null value
              }
          }
          // verifying data is retrieved
          console.log(drinkName);
          console.log(drinkRecipe);
          console.log(drinkIngredients);
          console.log(drinkImage);

          return (drinkName, drinkRecipe, drinkIngredients, drinkImage);
          }
          
        })
      .catch(error => {
          console.log('Error:', error);
      });
      
    };
// end API 

function handleAnswerSelection(event) {
  // You can access the selected answer using event.target.value
  const selectedCharacter = event.target.value;

  // Increase the score for the selected character
  switch (selectedCharacter) {
    case BlackWidow:
      BlackWidowScore++;
      console.log('Black Widow score increased!');
      break;
    case SpiderMan:
      SpiderManScore++;
      console.log('Spider-Man score increased!');
      break;
    case DeadPool:
      DeadPoolScore++;
      console.log('Deadpool score increased!');
      break;
    case CaptainAmerica:
      CaptainAmericaScore++;
      console.log('Captain America score increased!');
      break;
    case Groot:
      GrootScore++;
      console.log('Groot score increased!');
      break;
    default:
      console.log('No character score updated');
  }

  if (currentQuestionIndex < questions.length) {
    showQuestion(); 
  } else {
      calculateCharacterScore();  }
  }

function calculateCharacterScore() {
    // Create an array of score objects for each character
    const scores = [
      { character: BlackWidow, score: BlackWidowScore },
      { character: SpiderMan, score: SpiderManScore },
      { character: DeadPool, score: DeadPoolScore },
      { character: CaptainAmerica, score: CaptainAmericaScore },
      { character: Groot, score: GrootScore }
    ];
  
    // Sort the scores array based on the score in descending order
    // If two characters have the same score, the first one in the array stays first
    scores.sort((a, b) => b.score - a.score);
  
    // Now the first object in the array has the highest score
    // If there's a tie, it would be the first among the highest due to our sorting method
    const highestScoreCharacter = scores[0];
    globalHighestScoreCharacter = highestScoreCharacter.character;
  
    // You can return this character or do something with it
    console.log('Character with highest score:', highestScoreCharacter.character);
  
    // If you want to proceed with displaying results or further processing, you can call those functions here
    characterResults(globalHighestScoreCharacter);
  
    // For now, let's just return the character with the highest score
    return highestScoreCharacter;
};


function characterResults (globalHighestScoreCharacter){
  console.log ('here is your character');

  //code to change the innerhtml conent of the paragraph/header
  const questionHeader = document.getElementById ('quiz-question');
  questionHeader.innerHTML = `You matched with: ${globalHighestScoreCharacter}`; 
  //code to hide the answer buttons
  const answerChoicesContainer = document.getElementById('answer-choices');
  answerChoicesContainer.innerHTML = '';

  fetchMarvelData(globalHighestScoreCharacter);
}

function fetchMarvelData(globalHighestScoreCharacter) {
  // Ensure that the character name is a string and not undefined or null
  if (typeof globalHighestScoreCharacter !== 'string' || globalHighestScoreCharacter.trim() === '') {
    console.error('Invalid character name:', globalHighestScoreCharacter);
    return;
  }
  
  // Encode the character name to handle spaces and special characters
  const encodedCharacterName = encodeURIComponent(globalHighestScoreCharacter.trim());
  
  // Construct the full URL with the necessary query parameters
  const fullUrl = `${baseUrl}?name=${encodedCharacterName}&ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  // Use the constructed URL to fetch data
  fetch(fullUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.json();
    })
    .then(data => {
      // Assuming the Marvel API returns a list of characters, we need to find the correct one
      const characterArray = data.data.results;
      const character = characterArray.find(char => char.name === globalHighestScoreCharacter);
      if (character) {
        displayCharacterData(character);
      } else {
        console.log('Character not found:', globalHighestScoreCharacter);
      }
    })
    .catch(error => console.error('Error fetching Marvel data:', error));
}

function displayCharacterData(characterData) {
  const answerChoicesContainer = document.getElementById('answer-choices');
  // Assuming characterData has the properties: name, description, thumbnail, and resourceURI
  const htmlContent = `
    <h1>${characterData.name}</h1>
    <p>${characterData.description}</p>
    <img src="${characterData.thumbnail.path}.${characterData.thumbnail.extension}" alt="${characterData.name}">
    <p>More info: <a href="${characterData.resourceURI}">Click here</a></p>
  `;

  answerChoicesContainer.innerHTML = htmlContent;
}


fetchCocktailAPI();