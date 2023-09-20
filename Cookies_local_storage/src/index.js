// create a function setCookies that set the cookie firstname with the value in the firstname input and email with the email input
function setCookies() {
    document.cookie = "firstname=" + document.getElementById("firstname").value;
    document.cookie = "email=" + document.getElementById("email").value;
}

// Create a function showCookies that creates a DOM element p and set the inner html with Cookies: and the value of the cookie, it should append the paragraph at the bottom of the page
function showCookies() {
    const p = document.createElement("p");
    p.innerHTML = "Cookies: " + document.cookie;
    p.classList.add("cookie-paragraph"); // Add a CSS class to the <p> tag
    document.body.appendChild(p);
}
