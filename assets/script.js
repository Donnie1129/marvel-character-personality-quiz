//This is the question and answers for the quiz iteslf
const questions = [
    {
        question: 'Where would you go on a dream vacation? ',
        answers: ['Undisclosed location', 'New York City', 'Hawaii', 'Paris', 'I am Groot'],
        
      },
      {
        question: 'Which personality trait(s) resonates with you the most?',
        answers: ['Calm, cool, and collected', 'Friendly', 'Sarcastic', 'Patriotic', 'I am Groot'],
        
      },
      {
        question: 'If you were a superhero, what would be your signature weapon/ability?',
        answers: ['Glock 26', 'Spiderwebs', 'Katana blades', 'Shield', 'I am Groot'],
        
      },
      {
        question: 'Who would you want to fight crime with?',
        answers: ['Natasha Romanoff', 'Peter Parker', 'Wade Winston Wilson', 'Steve Rogers', 'I am Groot'],
        
      },
      {
        question: 'What is your favorite MCU movie?',
        answers: ['Black Widow', 'Spiderman', 'Deadpool', 'Captain America', 'Guardians of the Galaxy'],
        
      }
];
const characters = ["Deadpool", "Captain America", "Groot", "Spider-Man (Peter Parker)", "Black Widow"]; //variable that stores the characters names as an array


let ts = new Date().getTime();
const privateKey = "c25596d5c722b3ccb5c94d495df884a0e237d83e";
const publicKey = "80daa3778422ffa68ae1546ef689f700";
let hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
const baseUrl = "https://gateway.marvel.com/v1/public/characters";

let characterData = [];

characters.forEach(character => { // a fetch function that runs for each of the 5 characters to query their character information

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
    
 
  // On clicking "start quiz button", eventlistener #1 + runs function clearOutAndAskName
    const getStartedButton = document.getElementById ("get-started-btn");
    const submitNameButton = document.createElement ('button'); // used in submitFirstName function and is the event listener #2


    getStartedButton.addEventListener ('click', submitFirstName);
    function submitFirstName () {
      // TO DO: clears out the landing page, clear out the elements on the landing page (or set css element to hide/none)
      let firstNameModal = document.createElement('input'); // creates input element; this is the modal, but we'll style with tailwind later
      firstNameModal.className = "firsNameModal"; // use this class name for styling via tailwind or css file
      submitNameButton.className = 'theButtonClass' // add some display with styling
      // TO DO: Add placeholder value "Insert your first name here"

      // After adding name and clicking "start", eventlistener #2
      submitNameButton.addEventListener ('click', startQuizFunction)
    }

    function startQuizFunction () {
    // Get elementbyID and save as a variable in local storage
    // startQuiz() --> similar to the coding quiz challenge

    }


    
   



  let firstNameInput = document.createElement('input');
  firstNameInput.type = 'text';
