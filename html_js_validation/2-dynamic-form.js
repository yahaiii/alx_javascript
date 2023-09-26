document.addEventListener('DOMContentLoaded', function () {
    const dynamicForm = document.getElementById('dynamicForm');
    const numFieldsSelect = document.getElementById('numFields');
    const inputContainer = document.getElementById('inputContainer');

    // Add an event listener to detect changes in the dropdown selection.
    numFieldsSelect.addEventListener('change', function () {
        const selectedValue = parseInt(numFieldsSelect.value);
        generateInputFields(selectedValue);
    });

    // Add an event listener to validate the form on submission.
    dynamicForm.addEventListener('submit', function (event) {
        if (!validateForm()) {
            event.preventDefault();
            alert('Please fill in all fields.');
        }
    });

    // Function to generate input fields dynamically.
    function generateInputFields(numFields) {
        inputContainer.innerHTML = ''; // Clear existing fields

        for (let i = 1; i <= numFields; i++) {
            const input = document.createElement('input');
            input.type = 'text';
            input.name = `field${i}`;
            input.placeholder = `Field ${i}`;
            inputContainer.appendChild(input);
        }
    }

    // Function to validate the form.
    function validateForm() {
        const inputFields = inputContainer.querySelectorAll('input');

        for (const inputField of inputFields) {
            if (inputField.value.trim() === '') {
                return false; // One of the fields is empty
            }
        }

        return true; // All fields are filled
    }
});
