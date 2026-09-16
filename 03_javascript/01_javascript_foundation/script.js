let count = 0;

//To retrive element by id
//We use const instead of let because we just wan to change the value but not the referencing element
const countElement = document.getElementById("count");

// ====================
// Counter
// ====================

//We now assign button elements to variables
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");

// ====================
// Theme Change
// ====================


const themeButton = document.getElementById("themeButton");


// ====================
// Form Validation
// ====================


const registrationForm = document.getElementById("registrationForm");
const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const confirmPasswordInput = document.getElementById("confirmPassword");
const formMessage = document.getElementById("formMessage");

//regex value for pattern something@something.something.
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// ====================
// Counter Functions
// ====================

//addEventListener tells code to execute when the respective button is clicked
increaseButton.addEventListener("click", increaseCount);

decreaseButton.addEventListener("click", decreaseCount);


//We can seperate the function instead of putting everything in evenlistener
function increaseCount() {
    count++;
    //Change its text content wiht our value
    countElement.textContent = count;
}

function decreaseCount() {
    if (count > 0)
        count--;
    //Change its text content wiht our value
    countElement.textContent = count;
}

// ====================
// Theme Change Functions
// ====================


themeButton.addEventListener("click", themeSwitch);

function themeSwitch() {
    // We can use classList property of javascript to add/remove class form DOM element or simply toggle which add if not present or removes if present
    // document.body.classList.add("dark-mode");
    // document.body.classList.remove("dark-mode");

    //const can be used as every click event a new const is initialized insteaof reassignment
    const isDarkMode = document.body.classList.toggle("dark-mode");

    if (isDarkMode) {
        themeButton.textContent = "☀ Light Mode";
    }
    else {
        themeButton.textContent = "🌙 Dark Mode"
    }
}

// ====================
// Form Registration Functions
// ====================


//Listen to submit of registration form
registrationForm.addEventListener("submit", function (event) {
    event.preventDefault();
    //textContent is the data inside the html element
    //value is the input given by user
    //Here we are making error messages to array and at last join them using \n
    let errors = [];

    if (nameInput.value.trim() === "") {
        errors.push("Name is required");
    }

    if (emailInput.value.trim() === "") {
        errors.push("Email is required");
    }
    else if (!emailPattern.test(emailInput.value.trim())) {// The test validates the regext pattern present in value
        errors.push("Enter a valid email");
    }

    if (passwordInput.value.trim() === "") {
        errors.push("Password is required");
    }
    else if (passwordInput.value.trim().length < 8 || !/[A-Z]/.test(passwordInput.value) || !/[a-z]/.test(passwordInput.value) || !/[0-9]/.test(passwordInput.value)) {
        errors.push("Password doesn't meet the requirements");
    }

    if (confirmPasswordInput.value.trim() === "") {
        errors.push("Confirm Password is required");
    }
    else if (confirmPasswordInput.value !== passwordInput.value) {
        errors.push("Passwords do not match");
    }

    formMessage.textContent = errors.join("\n");

});






