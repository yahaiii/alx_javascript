// print all characters of a Star Wars movie based on the Movie ID using 'request' module in Node.js

const request = require('request');


const movieID = process.argv[2];

if (!movieID) {
    console.error('Please enter a valid movie id');
    process.exit(1);
}

const api = `https://swapi-api.alx-tools.com/api/films/${movieID}`;

response = request.get(api, (error, response, body) => {
    if (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error('Failed to fetch movie details. Status code:', response.statusCode);
        process.exit(1);
    }

    try {
        const movie = JSON.parse(body);
        
        if (!movie.title) {
            console.error('Movie title not found.');
            process.exit(1);
        }

        if (movie.characters && Array.isArray(movie.characters)) {
            movie.characters.forEach((characterUrl) => {
                request.get(characterUrl, (charError, charResponse, charBody) => {
                    if (!charError && charResponse.statusCode === 200) {
                        const character = JSON.parse(charBody);
                        console.log(character.name);
                    } else {
                        console.error(charError);
                    }
                });
            });
        } else {
            console.error('No characters found.');
        }
    } catch (parseError) {
        console.error('Error parsing JSON response:', parseError.message);
        process.exit(1);
    }
});

