
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
const characters = ["Deadpool", "Captain America", "Groot", "Spider-Man (Peter Parker)", "Black Widow"];

let ts = new Date().getTime();
const privateKey = "c25596d5c722b3ccb5c94d495df884a0e237d83e";
const publicKey = "80daa3778422ffa68ae1546ef689f700";
let hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();
const baseUrl = "https://gateway.marvel.com/v1/public/characters";

let characterData = [];

characters.forEach(character => {
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
