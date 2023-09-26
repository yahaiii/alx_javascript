// Wait for the DOM content to be fully loaded before executing JavaScript.
document.addEventListener('DOMContentLoaded', function () {
    // Get references to the form elements by their IDs.
    const passwordForm = document.getElementById('passwordForm');
    const passwordInput = document.getElementById('password');
    const errorElement = document.getElementById('error');

    // Add a submit event listener to the form.
    passwordForm.addEventListener('submit', function (event) {
        // Get the value entered in the password input field.
        const password = passwordInput.value;

        // Call the validatePassword function to check the password.
        const isValid = validatePassword(password);

        // If the password is not valid, prevent form submission and display an error message.
        if (!isValid) {
            event.preventDefault();
            errorElement.textContent = 'Password does not meet the criteria.';
        } else {
            // If the password is valid, clear any previous error message.
            errorElement.textContent = '';
        }
    });

    // Function to validate the password based on the provided criteria.
    function validatePassword(password) {
        const minLength = 8;
        // Regular expressions to check for specific criteria.
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasDigit = /[0-9]/.test(password);
        const hasSpecialChar = /[!@#$%^&*]/.test(password);

        // Check if all criteria are met.
        return (
            password.length >= minLength &&
            hasUppercase &&
            hasLowercase &&
            hasDigit &&
            hasSpecialChar
        );
    }
});
