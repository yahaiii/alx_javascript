const request = require('request');

const url = process.argv[2];

//only print users with completed tasks
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
        console.error('Failed to fetch content. Status code:', response.statusCode);
        process.exit(1);
    }

    //only print users with completed tasks
    const users = JSON.parse(body);
    users.forEach((user) => {
        if (user.completed) {
            console.log(user);
        }
    })
})