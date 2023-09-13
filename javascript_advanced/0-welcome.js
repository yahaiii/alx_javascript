// a function welcome, takes two arguments, firstName (string) and lastName (string). It contains a variable named fullName that contains the concatenation of firstName and lastName. Finally, within it is a function named displayFullName that displays an alert with message 'Welcome, ' followed by the value of fullName.

function welcome(firstName, lastName) {
    const fullName = firstName + ' ' + lastName;
    function displayFullName() {
        alert('Welcome ' + fullName + '!');
    }
    return displayFullName();
}