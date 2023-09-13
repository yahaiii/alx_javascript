const request = require('request');

const url = process.argv[2];

if (!url) {
    console.error('Please enter a valid URL');
    process.exit(1);
}

function fetchData(url) {
    return new Promise((resolve, reject) => {
        request.get(url, (error, response, body) => {
            if (error) {
                reject(error);
            } else if (response.statusCode !== 200) {
                reject(new Error('Failed to fetch movie details. Status code:', response.statusCode));
            } else {
                resolve(JSON.parse(body));
            }
        });
    });
}

async function countFilmsWithWedgeAntilles(url) {
    try {
        const films = await fetchData(url);
        const characterId =  '18'; // Wedge Antilles

        // Filter movies with Wedge Antilles
        const filmsWithWedgeAntilles = films.results.filter((film) => {
            return film.characters.some(characterUrl => {
                const characterIdMatch = characterUrl.match(/\/(\d+)\/$/);
                return characterIdMatch && characterIdMatch[1] === characterId;
            });
        });

        console.log(filmsWithWedgeAntilles.length);
    } catch (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }
}

countFilmsWithWedgeAntilles(url);