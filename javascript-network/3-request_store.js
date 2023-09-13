// A script that gets the content of a webpage and stores it in a file

const request = require('request');
const fs = require('fs');

const url = process.argv[2];
const filename = process.argv[3];

if (!url) {
    console.error('Please enter a valid URL');
    process.exit(1);
}

request.get(url, (error, response, body) => {
    if (error) {
        console.error('Error:', error.message);
        process.exit(1);
    }

    if (response.statusCode !== 200) {
        console.error('Failed to fetch webpage details. Status code:', response.statusCode);
        process.exit(1);
    }

    fs.writeFile(`${filename}.txt`, body, (error) => {
        if (error) {
            console.error('Error:', error.message);
            process.exit(1);
        }

        console.log('File saved!');
    })
})
