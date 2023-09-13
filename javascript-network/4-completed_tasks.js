const request = require('request');

const apiUrl = process.argv[2]; // API URL for todos

// Make a GET request to fetch the todos data
request.get(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error:', error.message);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Failed to fetch data. Status code:', response.statusCode);
    process.exit(1);
  }

  try {
    const todos = JSON.parse(body);

    // Create an object to store the count of completed tasks by user ID
    const completedTaskCounts = {};

    // Iterate through the todos and count completed tasks by user ID
    todos.forEach((todo) => {
      if (todo.completed) {
        const userId = todo.userId;

        // Increment the count for the user ID
        completedTaskCounts[userId] = (completedTaskCounts[userId] || 0) + 1;
      }
    });

    const result = {};

    // Print the users with completed tasks and the number of tasks completed
    Object.keys(completedTaskCounts).forEach((userId) => {
        result[userId] = completedTaskCounts[userId];
    });

    console.log(result);

  } catch (parseError) {
    console.error('Error parsing JSON response:', parseError.message);
    process.exit(1);
  }
});
