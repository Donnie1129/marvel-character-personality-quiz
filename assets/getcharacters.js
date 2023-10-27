function getAllCharacters () {
    fetch(`${baseUrl}?&ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=Sp&limit=100`)
        .then(response => response.json())
        .then(data => {
                console.log(data.data.results)
        })
        .catch(error => {
            console.log('Error:', error);
        });
};
getAllCharacters();