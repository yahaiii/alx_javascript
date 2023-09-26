// Wait for the DOM content to be fully loaded before executing JavaScript.
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form elements by their IDs.
    const emailForm = document.getElementById('emailForm');
    const emailInput = document.getElementById('email');
    const errorElement = document.getElementById('error');

    // Add a submit event listener to the form.
    emailForm.addEventListener('submit', function (event) {
        // Get the value entered in the email input field.
        const email = emailInput.value;

        // Call the validateEmail function to check the email format.
        const isValid = validateEmail(email);

        // If the email format is not valid, prevent form submission and display an error message.
        if (!isValid) {
            event.preventDefault();
            errorElement.textContent = 'Please enter a valid email address.';
        } else {
            // If the email format is valid, clear any previous error message.
            errorElement.textContent = '';
        }
    });

    // Function to validate the email format based on a basic pattern.
    function validateEmail(email) {
        // Regular expression pattern for a basic email format.
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

        // Test if the email matches the pattern.
        return emailPattern.test(email);
    }
});
