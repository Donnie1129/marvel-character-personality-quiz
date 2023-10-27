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

// function getAllCharacters () {
//     fetch(`${baseUrl}?&ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=Sp&limit=100`)
//         .then(response => response.json())
//         .then(data => {
//                 console.log(data.data.results)
//         })
//         .catch(error => {
//             console.log('Error:', error);
//         });
// };
// getAllCharacters();