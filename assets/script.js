
// this is Javascript

const questions = [
    {
        question: 'Where would you go on a dream vacation? ',
        answers: ['Undisclosed location', 'New York City', 'Hawaii', 'Paris', 'I am Groot'],
        
      },
      {
        question: 'placeholder question #2',
        answers: ['A', 'B', 'C', 'D', 'E'],
        
      },
      {
        question: 'placeholder question #3',
        answers: ['A', 'B', 'C', 'D', 'E'],
        
      },
      {
        question: 'placeholder question #4',
        answers: ['A', 'B', 'C', 'D', 'E'],
        
      },
      {
        question: 'placeholder question #5',
        answers: ['A', 'B', 'C', 'D', 'E'],
        
      }
];

let ts = new Date().getTime();
const privateKey = "c25596d5c722b3ccb5c94d495df884a0e237d83e";
const publicKey = "80daa3778422ffa68ae1546ef689f700";
let hash = CryptoJS.MD5(ts + privateKey + publicKey).toString();

const baseUrl = "https://gateway.marvel.com/v1/public/characters";

fetch(`${baseUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}`)
  .then(response => response.json())
  .then(data => {
    console.log(data);
  })
  .catch(error => {
    console.log('Error:', error);
  });

