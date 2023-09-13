const request =  require('request');

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
        console.log(movie.title);
    } catch (parseError) {
        console.error('Error parsing JSON response:', parseError.message);
        process.exit(1);
    }
});