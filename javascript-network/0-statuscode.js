const request = require('request');

const url = process.argv[2];

if (!url) {
    console.error('Please enter a valid URL.');
    process.exit(1);
}

request.get(url, (error, response) => {
    if (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }

    console.log(`code: ${response.statusCode}`);
})
