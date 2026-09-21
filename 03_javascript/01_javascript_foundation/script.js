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
// Product List
// ====================

const products = [
    {
        name: "phone",
        price: 200
    },
    {
        name: "laptop",
        price: 5000
    },
    {
        name: "TV",
        price: 1000
    },
    {
        name: "KeyBoard",
        price: "20000",
        details: {
            category: "Electronics"
        }
    }

]

const productList = document.getElementById("productList");
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
const containsInput = document.getElementById("containsInput");
const maxPrice = document.getElementById("maxPrice");
const sortOrder = document.getElementById("sortOrder");
const findByName = document.getElementById("findByName");
const productName = document.getElementById("productName");
const productPrice = document.getElementById("productPrice");

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

// ====================
// Product List Functions
// ====================


//Testing array elements
console.log(products);
console.log(products[1].name);
console.log(products[2].price);
const product4 = {
    name: "charger",
    price: 50
}
products.push(product4);
console.log(products[3].name);


//To execute as you type
// searchInput.addEventListener("input", function(){
//     result = products.filter(function (product) {
//             return product.name.toLowerCase() === searchInput.value.toLowerCase();
//         });
//     console.log(result);
// });

searchButton.addEventListener("click", search);

function search() {
    const searchText = searchInput.value.toLowerCase();
    const result = containsInput.checked ? (products.filter((product) => {// or products.filter(function(product){ ....});
        //includes acts as contains
        return product.name.toLowerCase().includes(searchText); 
    })):(products.filter((product) => {
        return product.name.toLowerCase() === searchText;
    })); 
    
    displayProducts(result);
}

//filter helps in filtering the array based on condition
function filterByPrice() {
    const filterResult = products.filter((product) => {
        return product.price <= Number(maxPrice.value);
    })
    displayProducts(filterResult);
}

//sort function helps sort based on condition
function sortProducts(){
    if(sortOrder.value === "select"){
        return;
    }
    //Makes a Shallow copy that is it creates new copy of array but objects inside array share same reference meaning of object value is cahnged then it changes the value in both the copyies
    const sortedProducts = [...products];
    if(sortOrder.value === 'asc'){
        sortedProducts.sort((a,b) => {
            return a.price-b.price;
        });
    }
    else{
        //Arrow function using destructuring
        sortedProducts.sort(({ price: priceA }, { price: priceB }) => { 
            return priceB - priceA;
        });
    }
    displayProducts(sortedProducts);
}

//map creates a new array using existing array details
const productPrices = products.map(function(product){
    return product.price;
});
console.log(productPrices);

const details = products.map(function(product){
    return product.name + " costs ₹" + product.price;
});
console.log(details);

//find helps find the object that first matches the condition
const foundProduct = products.find(function(product){
    return product.name === "Keyboard";
});

console.log(foundProduct);

function findProductsName(){
    productList.innerHTML = "";
    const matchProduct = products.find((product) => {
        return product.name.toLowerCase() === findByName.value.toLowerCase();
    });
    //optional chaining helps protect from throwing errors if property does not exist
    console.log(matchProduct?.details?.category);// returns undefined if matchproduct or details value is null
    if (matchProduct === undefined) {
        productList.innerHTML += `<p>No products found</p>`;
        return;
    }

    productList.innerHTML += `
        <div>
            <h3>${matchProduct.name}</h3>
            <p>${matchProduct.price}</p>
        </div>
    `;
}

//Default Parameters if displayProducts is passed without parameter like displayProducts() then the default value products will be used else the parameter that is passed
const displayProducts = (productsToDisplay = products) => {
    productList.innerHTML = "";
    //using innerHTML
    if (productsToDisplay.length === 0) {
        productList.innerHTML += `<p>No products found</p>`;
    }
    else {
        //instead of directly using product in arrow function for product.name we are deconstructing them to individual variables {name, price}
        productsToDisplay.forEach(({name, price, details}) => {
        //Template literals - use of `<div... ` and ${...}
        productList.innerHTML += `
        <div>
            <h3>${name}</h3>
            <p>${price}</p>
            <p>${details?.category ?? "No category specified"}</p>
        </div>
    `;//?? means it gives a fallback message if the value is null or undefined
        });
    }
    
}

function addProduct(){
    const newProduct = {
        name: productName.value,
        price: Number(productPrice.value)
    }
    const updatedProducts = [...products, newProduct];//spread operator
    if(newProduct.name.trim()===""){
        displayProducts();
    }
    else{
        displayProducts(updatedProducts);
    }
}

