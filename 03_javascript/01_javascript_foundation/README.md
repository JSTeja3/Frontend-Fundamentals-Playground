# JavaScript Fundamentals

This section introduces JavaScript by using it to make the existing HTML and CSS UI interactive.

The goal is to understand how JavaScript connects with the DOM, responds to user events, changes application state, and updates the UI.

---

## Topics Covered

- Variables
- `let` and `const`
- Functions
- DOM Manipulation
- Events
- Event Listeners
- Conditions
- Arrays
- `push()`
- `join()`
- Input Values
- `trim()`
- Regular Expressions
- `classList`
- Form Submission
- `preventDefault()`
- Dynamic DOM Updates

---

## 1. Variables

Variables are used to store values that can be used and changed by JavaScript.

### `let`

Use `let` when the variable needs to be reassigned.

```javascript
let count = 0;

count++;
count--;
```

The value of `count` changes during the application.

### `const`

Use `const` when the variable itself should not be reassigned.

```javascript
const countElement = document.getElementById("count");
const themeButton = document.getElementById("themeButton");
```

The DOM elements referenced by these variables can still be modified.

For example:

```javascript
themeButton.textContent = "☀ Light Mode";
```

The variable still refers to the same button element.

### Key Difference

```text
let
→ variable can be reassigned

const
→ variable cannot be reassigned
```

---

## 2. DOM Manipulation

The DOM represents the HTML document as objects that JavaScript can access and modify.

### Finding an Element

```javascript
const countElement = document.getElementById("count");
```

This finds:

```html
<span id="count">0</span>
```

### Changing Content

```javascript
countElement.textContent = count;
```

This changes the text displayed inside the element.

### Input Values

For form inputs:

```javascript
const nameInput = document.getElementById("name");

console.log(nameInput.value);
```

`.value` gives the value entered by the user.

---

## 3. Functions

Functions group instructions that can be executed when needed.

### Example

```javascript
function increaseCount() {
    count = count + 1;
    countElement.textContent = count;
}
```

The function changes the counter value and updates the UI.

Functions can then be connected to events.

---

## 4. Events

Events represent actions that happen in the UI.

Examples include:

- `click`
- `submit`

### Event Listener

```javascript
increaseButton.addEventListener("click", increaseCount);
```

This tells JavaScript to execute `increaseCount` when the button is clicked.

### Event Flow

```text
User action
    ↓
Event occurs
    ↓
Event listener detects it
    ↓
Function executes
    ↓
DOM is updated
```

---

## 5. Counter

The Counter feature uses JavaScript to increase and decrease a number.

### HTML

```html
<button id="decrease">-</button>

<span id="count">0</span>

<button id="increase">+</button>
```

### JavaScript

```javascript
let count = 0;

const countElement = document.getElementById("count");
const decreaseButton = document.getElementById("decrease");
const increaseButton = document.getElementById("increase");

function increaseCount() {
    count = count + 1;
    countElement.textContent = count;
}

function decreaseCount() {
    if (count > 0) {
        count--;
    }

    countElement.textContent = count;
}

increaseButton.addEventListener("click", increaseCount);
decreaseButton.addEventListener("click", decreaseCount);
```

### Concepts Practiced

- Variables
- `let`
- Functions
- Events
- `addEventListener()`
- Conditions
- DOM manipulation
- `textContent`

---

## 6. Conditions

Conditions allow JavaScript to execute code depending on whether something is true or false.

### Example

```javascript
if (count > 0) {
    count--;
}
```

The counter only decreases when its value is greater than zero.

### `if / else`

```javascript
if (isDarkMode) {
    themeButton.textContent = "☀ Light Mode";
}
else {
    themeButton.textContent = "🌙 Dark Mode";
}
```

---

## 7. Theme Switcher

The Theme Switcher changes the page between light and dark modes.

JavaScript controls the CSS class while CSS controls the visual appearance.

### Dark Mode CSS

```css
.dark-mode {
    background-color: black;
    color: white;
}
```

### Adding and Removing Classes

JavaScript can manipulate classes using `classList`.

```javascript
document.body.classList.add("dark-mode");
```

Adds the class.

```javascript
document.body.classList.remove("dark-mode");
```

Removes the class.

### Toggle

```javascript
document.body.classList.toggle("dark-mode");
```

`toggle()`:

- Adds the class if it does not exist
- Removes the class if it already exists

---

## 8. Using the Return Value of `toggle()`

`classList.toggle()` returns a boolean.

```javascript
const isDarkMode = document.body.classList.toggle("dark-mode");
```

The result is:

```text
true
→ dark-mode was added

false
→ dark-mode was removed
```

This value can be used with a condition.

```javascript
function themeSwitch() {
    const isDarkMode = document.body.classList.toggle("dark-mode");

    if (isDarkMode) {
        themeButton.textContent = "☀ Light Mode";
    }
    else {
        themeButton.textContent = "🌙 Dark Mode";
    }
}
```

### Event

```javascript
themeButton.addEventListener("click", themeSwitch);
```

### Separation of Responsibilities

```text
JavaScript
→ controls the class

CSS
→ controls how the class looks
```

---

## 9. Form Values

JavaScript can read the value entered into an input using `.value`.

```javascript
const nameInput = document.getElementById("name");

console.log(nameInput.value);
```

For example, if the user enters:

```text
Sai
```

then:

```javascript
nameInput.value
```

contains:

```text
"Sai"
```

---

## 10. Form Submission

The form listens for the `submit` event.

```javascript
registrationForm.addEventListener("submit", function(event) {
    event.preventDefault();

    console.log("Form submitted");
});
```

### `preventDefault()`

Normally, the browser performs the default action of submitting the form.

```javascript
event.preventDefault();
```

prevents that default behavior so JavaScript can perform validation first.

---

## 11. `trim()`

`trim()` removes whitespace from the beginning and end of a string.

```javascript
const name = nameInput.value.trim();
```

For example:

```text
"   Sai   "
```

becomes:

```text
"Sai"
```

And:

```text
"     "
```

becomes:

```text
""
```

This is useful when checking whether an input is actually empty.

```javascript
if (nameInput.value.trim() === "") {
    errors.push("Name is required");
}
```

---

## 12. Arrays and `push()`

An array can store multiple validation errors.

```javascript
let errors = [];
```

An error can be added using:

```javascript
errors.push("Name is required");
```

The array could contain:

```javascript
[
    "Name is required",
    "Email is required",
    "Password is required"
]
```

This is useful because multiple validation errors can be collected before updating the UI.

---

## 13. `join()`

`join()` combines the elements of an array into a string.

```javascript
formMessage.textContent = errors.join("\n");
```

The `"\n"` separates each error with a newline.

Because HTML normally collapses newline characters, the CSS uses:

```css
#formMessage {
    white-space: pre-line;
}
```

This allows the validation messages to appear on separate lines.

---

## 14. Email Validation

A simple regular expression was used to check the email format.

```javascript
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

The `.test()` method checks whether the value matches the pattern.

```javascript
emailPattern.test(emailInput.value.trim())
```

It returns:

```text
true
→ matches the pattern

false
→ does not match the pattern
```

### Validation

```javascript
if (emailInput.value.trim() === "") {
    errors.push("Email is required");
}
else if (!emailPattern.test(emailInput.value.trim())) {
    errors.push("Enter a valid email");
}
```

---

## 15. Password Validation

The password requirements used in this project are:

- At least 8 characters
- At least one uppercase letter
- At least one lowercase letter
- At least one number

### Length

```javascript
passwordInput.value.trim().length
```

`length` is a property, not a function.

Correct:

```javascript
passwordInput.value.trim().length
```

Incorrect:

```javascript
passwordInput.value.trim().length()
```

### Uppercase

```javascript
/[A-Z]/
```

### Lowercase

```javascript
/[a-z]/
```

### Number

```javascript
/[0-9]/
```

### Validation

```javascript
else if (
    passwordInput.value.trim().length < 8 ||
    !/[A-Z]/.test(passwordInput.value) ||
    !/[a-z]/.test(passwordInput.value) ||
    !/[0-9]/.test(passwordInput.value)
) {
    errors.push("Password doesn't meet the requirements");
}
```

The `||` operator means that if any one of the requirements fails, the password is considered invalid.

---

## 16. Confirm Password Validation

The confirmation password is compared with the original password.

```javascript
if (confirmPasswordInput.value.trim() === "") {
    errors.push("Confirm Password is required");
}
else if (confirmPasswordInput.value !== passwordInput.value) {
    errors.push("Passwords do not match");
}
```

The `!==` operator checks that the two values are not equal.

---

## 17. Complete Form Validation Flow

```text
Submit form
    ↓
Prevent default submission
    ↓
Create errors array
    ↓
Check Name
    ↓
Check Email
    ↓
Check Password
    ↓
Check Confirm Password
    ↓
Collect errors
    ↓
Join errors
    ↓
Update DOM
```

The form therefore uses several JavaScript concepts together:

```text
Variables
    ↓
DOM elements
    ↓
Events
    ↓
Functions / conditions
    ↓
Input values
    ↓
Validation
    ↓
DOM update
```

---

## 18. Objects and Arrays

- Represented products as JavaScript objects.
- Stored multiple products in an array.
- Accessed object properties using dot notation.
- Accessed array items using indexes.

Example:

```javascript
const products = [
    { name: "Laptop", price: 50000 },
    { name: "Phone", price: 30000 },
    { name: "Keyboard", price: 2000 }
];
```

## 19. forEach()

Used `forEach()` to iterate through the products array and display each product on the webpage.

## 20. filter()

Used `filter()` to create a new array containing products that match a condition.

Implemented:
- Product search using exact name matching.
- Product search using `includes()` for partial matching.
- Case-insensitive search using `toLowerCase()`.
- Price filtering based on a maximum price.
- Handling cases where no products match.

## 21. sort()

Used `sort()` to arrange products by price.

Implemented:
- Price: Low to High.
- Price: High to Low.

Created a copy of the original array using the spread operator before sorting:

```javascript
const sortedProducts = [...products];
```

This avoids directly modifying the original products array.

## 22. map()

Used `map()` to transform product data into new arrays.

Implemented:
- Extracting product prices.
- Creating product description strings.

## 23. find()

Used `find()` to retrieve the first product matching a condition.

Implemented:
- Finding a product by name.
- Handling cases where no matching product exists.

## Interactive Features

- Display all products.
- Search products by exact name or partial name.
- Filter products by maximum price.
- Sort products by price in ascending or descending order.
- Find a product by name.
- Display a message when no products are found.

## Key Learnings

- Objects store related data as key-value pairs.
- Arrays store collections of items.
- `forEach()` is useful for iterating over array items.
- `filter()` returns an array of matching items.
- `map()` returns a new array of transformed values.
- `find()` returns the first matching item or `undefined`.
- `sort()` can modify the original array.
- The spread operator can create a shallow copy of an array.
- DOM manipulation allows JavaScript to update webpage content dynamically.
- Event listeners connect user interactions to JavaScript functions.


## Key Takeaways

### Variables

```javascript
let count = 0;
const themeButton = document.getElementById("themeButton");
```

Use `let` when reassignment is required and `const` when the variable itself will not be reassigned.

### DOM

```javascript
document.getElementById("count");
```

Allows JavaScript to access HTML elements.

### Events

```javascript
element.addEventListener("click", function() {
    // code
});
```

Allows JavaScript to respond to user actions.

### DOM Updates

```javascript
element.textContent = "New text";
```

Changes the content displayed by an element.

### CSS Classes

```javascript
document.body.classList.toggle("dark-mode");
```

Allows JavaScript to control CSS classes.

### Form Values

```javascript
input.value
```

Retrieves data entered by the user.

### Conditions

```javascript
if (condition) {
    // code
}
```

Allows different behavior based on values or states.

---

## Practice Structure

```text
06-javascript/
└── 01-javascript-fundamentals/
    ├── index.html
    ├── style.css
    ├── script.js
    └── README.md
```

---
## Additonal Concepts Practiced
- `let` and `const`
- Arrow functions
- Template literals
- Destructuring
- Spread operator
- Optional chaining (`?.`)
- Nullish coalescing (`??`)
- Default parameters
- Array sorting with callback functions
- Shallow copies using spread syntax

## Additonal Features
- Refactored product rendering using a reusable function.
- Displayed product details with optional chaining and fallback values.
- Added products using the spread operator.
- Sorted products by price in ascending and descending order.
- Used destructuring in sorting callbacks.

### Key Learning
The spread operator creates a shallow copy of an array. The copied array has its own structure, but its objects are still shared references.

The `sort()` method modifies the array it is called on, so sorting a copied array keeps the original array's order unchanged.

## Goal of This Phase

The goal was to understand how JavaScript makes a static HTML/CSS interface interactive.

The main pattern practiced throughout this phase was:

**User Action → Event → JavaScript → State/Logic → DOM Update → UI Changes**

The Counter, Theme Switcher, Form Validation, and Search Products features provide a foundation for building more interactive frontend applications.

